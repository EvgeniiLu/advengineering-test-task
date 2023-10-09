<template>
  <div class="event">
    <div class="event_container">
      <card-component elevation padding="30">
        <div class="event_title">
          <title-component
            text-start
            title="Добавить заказ"
            font-size="25"
          />
        </div>

        <div class="event_content">
          <text-field-component
            v-model="event.name"
            label="Имя пользователя"
            placeholder="Введите имя"
            @input="v$.name.$touch()"
            :error-message="v$.name.$errors"
          />
          <text-field-component
            v-model="event.address"
            label="Адрес"
            placeholder="Введите адрес"
            @input="v$.address.$touch()"
            :error-message="v$.address.$errors"
          />
          <text-field-component
            v-model="event.comment"
            label="Комментарий"
            placeholder="Введите комментарий"
            @input="v$.comment.$touch()"
            :error-message="v$.comment.$errors"
          />
        </div>

        <div class="event_actions">
          <button-component
            elevation
            :loading="loading"
            @click="addEvent"
          >
            Добавить заказ
          </button-component>
        </div>
      </card-component>
    </div>

    <notification-component ref="notification"/>
  </div>
</template>

<script setup lang="ts">
  import {useEventsStore} from "@/stores/events"
  import {useUserStore} from "@/stores/user"
  import {ref, onActivated, onDeactivated} from "vue";
  import {useVuelidate} from '@vuelidate/core'
  import {eventRules} from "@/validation"

  const eventsStore = useEventsStore()
  const userStore = useUserStore()

  const event = ref({
      name: '',
      address: '',
      date: '',
      status: '',
      comment: ''
  })
  const loading = ref(false)

  const v$ = useVuelidate(eventRules, event)

  const notification = ref(null)

  const addEvent = async () => {
    const result = await v$.value.$validate()
    if (!result) return

    try {
      loading.value = true
      setProperties()
      const data = await eventsStore.addEvent(event.value)
      resetEventState()
      notification.value?.show('Успех!', 'Заказ успешно добавлен')
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

  const setProperties = () => {
    event.value.status = 'Новый'
    event.value.date = formatDate()
  }

  const formatDate = () => {
    const date = new Date()
    const str = date.toLocaleDateString('ru-RU', {day: '2-digit', month: 'long', year: 'numeric'})
    return str.replace(' г.', '')
  }

  const resetEventState = () => {
    v$.value.$reset()
    event.value = {
      name: '',
      address: '',
      date: '',
      status: '',
      comment: ''
    }
  }

  onActivated(() => {
    if (userStore.name) event.value.name = userStore.name
  })

  onDeactivated(() => {
    resetEventState()
  })
</script>

<style scoped>

.event {
  padding-top: 25px;
  display: flex;
  justify-content: center;
}

.event_container {
  min-width: 300px;
  width: 800px;
}

.event_content {
  padding: 15px 0;
}
</style>
