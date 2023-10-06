<template>
  <div class="modal-container">
    <div class="modal-body">
      <h4>{{ question }}</h4>
      <div class="modal-action">
        <button-comp @click="emit('confirm')">Принять</button-comp>
        <button-comp @click="emit('cancel')">Отмена</button-comp>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  question: String
})
const emit = defineEmits(['confirm', 'cancel'])
</script>

<style>
.modal-container {
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
.modal-body {
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 20px 40px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
}
.modal-action {
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
}
</style>
