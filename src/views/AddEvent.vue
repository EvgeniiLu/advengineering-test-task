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
            v-model="state.event.name"
            label="Имя пользователя"
            placeholder="Введите имя"
          />
          <text-field-component
            v-model="state.event.address"
            label="Адрес"
            placeholder="Введите адрес"
          />
          <text-field-component
            v-model="state.event.comment"
            label="Комментарий"
            placeholder="Введите комментарий"
          />
        </div>

        <div class="event_actions">
          <button-component
            elevation
            :loading="state.loading"
            @click="addEvent"
          >
            Добавить заказ
          </button-component>
        </div>
      </card-component>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {useEventsStore} from "@/stores/events"
  import {onActivated, reactive} from "vue";

  const eventsStore = useEventsStore()

  const state = reactive({
    event: {
      name: '',
      address: '',
      date: '',
      status: '',
      comment: ''
    },
    loading: false
  })

  const addEvent = async () => {
    try {
      state.loading = true
      setProperties()
      const data = await eventsStore.addEvent(state.event)
      resetEventState()
    } catch (e) {
      console.log(e)
    } finally {
      state.loading = false
    }
  }

  const setProperties = () => {
    state.event.status = 'Новый'
    state.event.date = formatDate().replace(' г.', '')
  }

  const formatDate = () => {
    const date = new Date()
    const options = { day: '2-digit', month: 'long', year: 'numeric' }
    return date.toLocaleDateString('ru-RU', options)
  }

  const resetEventState = () => {
    state.event = {
      name: '',
      address: '',
      date: '',
      status: '',
      comment: ''
    }
  }
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
