<template>
  <div class="text_field_comp">
    <label
      v-if="label"
      class="text_field_label_comp"
      :for="inputId"
    >
      {{label}}
    </label>
    <input
      class="text_field_input_comp"
      :name="inputId"
      :id="inputId"
      :type="type"
      :placeholder="placeholder"
      :value="textValue"
      @input="textValue = $event.target.value"
      @blur="emits('blur', $event.target.value)"
    >

      <div class="error_message_comp">
        <transition
          name="fade"
          mode="out-in"
        >
          <span v-if="errorMessage">{{errorMessage}}</span>
        </transition>
      </div>
  </div>
</template>

<script setup lang="ts">
  import uniqid from 'uniqid';
  import {ref, watch} from "vue";

  const emits = defineEmits(['update:modelValue', 'input', 'blur'])
  const props = defineProps({
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    label: String,
    errorMessage: String,
    modelValue: String,
  })
  const inputId = uniqid()
  const textValue = ref('')
  watch(textValue, (e) => {
    emits('update:modelValue', e)
    emits('input', e)
  })
</script>

<style scoped>
input[type="text"] {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
}

.text_field_label_comp {
  display: block;
  margin-bottom: 4px;
}

.text_field_input_comp {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 10px;
  color: #212529;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
}

.error_message_comp {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  width: 100%;
  height: 15px;
  padding: 0 15px;
  color: red;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
