<template>
  <transition name="fade" mode="out-in">
    <card-component
      v-if="state.showNotification"
      class="notification_comp"
      padding="15"
      elevation
      @click="state.showNotification = false"
    >
      <div class="notification_inner_comp">
        <div class="notification_icon_wrapper">
          <mdicon name="information-outline" :class="state.type" size="30"/>
        </div>

        <div class="notification_text_wrapper">
          <div class="notification_title_comp">
            {{ state.title }}
          </div>
          <div class="notification_message_comp">
            {{ state.message }}
          </div>
        </div>
      </div>
    </card-component>
  </transition>
</template>

<script setup lang="ts">
import {ref} from 'vue'

  const state = ref({
    showNotification: false,
    title: '',
    message: '',
    type: '',
    duration: 0,
  })

  const show = (title = '', message = '', type = 'info', duration = 5000) => {
    state.value.title = title
    state.value.message = message
    state.value.type = type
    state.value.duration = duration
    state.value.showNotification = true
    setTimeout(() => {
      state.value.showNotification = false
    }, duration)
  }

  defineExpose({
    show
  })
</script>

<style scoped>
.notification_comp {
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  max-width: 350px;
}

.notification_inner_comp {
  display: flex;
  align-items: center;
}

.notification_icon_wrapper {
  margin: 0 20px 0 10px;
}

.notification_title_comp {
  padding: 5px;
  font-weight: 800;
}

.notification_message_comp {
  padding: 5px;
}

::v-deep(.mdi.mdi-information-outline.error) {
  color: red !important;
}

::v-deep(.mdi.mdi-information-outline.info) {
  color: #007bff !important;
}

::v-deep(.mdi.mdi-information-outline.warning) {
  color: #ffb700 !important;
}
</style>
