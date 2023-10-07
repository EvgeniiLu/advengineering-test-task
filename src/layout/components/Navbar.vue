<template>
  <header
    class="header"
    :class="{
      'navbar_border_bottom': borderBottom,
      'navbar_elevation': elevation
    }"
  >
    <div class="container">
      <div class="header_inner" v-if="userStore.user">
        <div class="header_tabs">
          <tabs-component :items="items"/>
        </div>
        <div class="header_inner_wrapper">
          <div class="header_username" v-html="userStore.name"/>

          <button-component @click="logout" elevation :loading="loading">
            Выход
          </button-component>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import {defineProps, ref} from "vue"
  import {useUserStore} from "@/stores/user"
  import {useEventsStore} from "@/stores/events"

  defineProps({
    borderBottom: Boolean,
    elevation: Boolean
  })

  const loading = ref(false)
  const items = [{ name: 'Все заказы', to: '/events' }, { name: 'Добавить заказ', to: '/add-event' }]
  const userStore = useUserStore()
  const eventsStore = useEventsStore()

  const logout = async () => {
    try {
      loading.value = true
      await userStore.logout()
      userStore.$reset()
      eventsStore.$reset()
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  height: var(--navbar-height);
  background-color: inherit;
  top: 0;
  left: 0;
}

.navbar_border_bottom {
  border-bottom: 1px solid #b0b0b0;
}

.navbar_elevation {
  -webkit-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
}

.header_inner {
  display: flex;
  height: var(--navbar-height);
  justify-content: space-between;
  padding: 15px;
  align-items: center;
}

.header_inner_wrapper {
  display: flex;
  align-items: center;
}

.header_username {
  margin: 0 25px;
}
</style>
