<template>
  <div class="modal_container">
    <card-component class="modal_body" elevation padding="30">
      <h4>{{ question }}</h4>
      <div class="modal_action">
        <button-component
          elevation
          :loading="loading"
          @click="emit('confirm')"
        >
          Принять
        </button-component>
        <button-component elevation @click="emit('cancel')">Отмена</button-component>
      </div>
    </card-component>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";

const props = defineProps({
  question: String,
  loading: Boolean
})
const emit = defineEmits(['confirm', 'cancel'])
</script>

<style>
.modal_container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(134, 134, 134, 0.71);
}
.modal_body {
  margin: 0 10px;
  text-align: center;
  padding: 20px 40px;
  min-width: 250px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}
.modal_action {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
}
</style>
