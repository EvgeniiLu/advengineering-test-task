<template>
  <div class="table">

    <table-component
      :headers="computedHeaders"
      :items="eventsStore.list"
      elevation
    >
      <template #actions="item">
        <div class="table_actions_slot">
          <button-component
            icon
            color="#E3F2FD"
            :disabled="item.status === 'Выполнен'"
            :loading="state.selectedItem?.id === item?.id && state.doneLoading"
            @click="setStatusDone(item)"
          >
            <mdicon name="check-circle-outline"/>
          </button-component>

          <button-component
            icon
            color="#E3F2FD"
            @click="openModal(item)"
          >
            <mdicon name="close-circle-outline"/>
          </button-component>
        </div>
      </template>

      <template #status="item">
        <span :class="{'status_completed': item.status === 'Выполнен'}">
          {{item.status}}
        </span>
      </template>
    </table-component>

    <transition name="fade">
      <modal-component
        v-if="state.isShowModal"
        question="Вы действительно хотите удалить заказ?"
        :loading="state.removeLoading"
        @confirm="removeEvent"
        @cancel="state.isShowModal = false"
      ></modal-component>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import {reactive, onActivated, computed} from 'vue'
  import {useEventsStore} from "@/stores/events"
  import {useUserStore} from "@/stores/user";

  const eventsStore = useEventsStore()
  const userStore = useUserStore()

  const headers = [
    {text: 'Имя клиента', value: 'name'},
    {text: 'Адрес', value: 'address'},
    {text: 'Дата заказа', value: 'date'},
    {text: 'Статус', value: 'status'},
    {text: 'Комментарий', value: 'comment'},
  ]

  const computedHeaders = computed(()=> {
    return userStore.isAdmin
      ? [...headers, {text: 'Действия', value: 'actions', width: '130px'}]
      : headers
  })

  const state = reactive({
    selectedItem: null,
    isShowModal: false,
    loading: false,
    removeLoading: false,
    doneLoading: false
  })

  onActivated(async () => {
    await getEvents()
  })

  const getEvents = async () => {
    try {
      state.loading = true
      const data = await eventsStore.getEvents()
    } catch (e) {
      console.log(e)
    } finally {
      state.loading = false
    }
  }

  const setStatusDone = async (item) => {
    try {
      state.selectedItem = item
      state.doneLoading = true
      item.status = 'Выполнен'
      await eventsStore.updateEvent(item)
    } catch (e) {
      console.log(e)
    } finally {
      state.selectedItem = null
      state.doneLoading = false
    }
  }

  const removeEvent = async () => {
    try {
      state.removeLoading = true
      await eventsStore.removeEvent(state.selectedItem)
      closeModal()
    } catch (e) {
      console.log(e)
    } finally {
      state.removeLoading = false
    }
  }

  const openModal = (item) => {
    state.selectedItem = item
    state.isShowModal = true
  }

  const closeModal = () => {
    state.selectedItem = null
    state.isShowModal = false
  }
</script>

<style>
.table {
  margin: 0 10px;
  padding-top: 25px;
}

.table_actions_slot {
  display: flex;
  justify-content: space-around;
}

.status_completed {
  color: black;
  font-weight: 800;
}
</style>


