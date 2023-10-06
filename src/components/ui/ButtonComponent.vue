<template>
  <button
    class="button_comp"
    :style="computedButton"
    :disabled="disabled"
    :class="{
      'elevation_button_comp': elevation
    }"
    @click.stop="handleClick"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <div v-if="loading" class="spinner_comp">
        <mdicon name="loading"/>
      </div>

      <div v-else>
        <slot/>
      </div>
    </transition>
  </button>
</template>

<script setup lang="ts">
  import {computed, defineProps} from "vue";

  const props = defineProps({
    icon: Boolean,
    color: {
      type: String,
      default: '#409EFF'
    },
    block: Boolean,
    width: {
      type: [String, Number],
      default: 100
    },
    height: {
      type: [String, Number],
      default: 40
    },
    loading: Boolean,
    disabled: Boolean,
    elevation: Boolean
  })

  const computedButton = computed(() => {
    const obj = {backgroundColor: props.color}
    if (props.icon) {
      return {
        ...obj,
        borderRadius: '50%',
        padding: '5px'
      }
    } else return {
      ...obj,
      width: props.block ? '100%' : `${props.width}px`,
      height: `${props.height}px`,
    }
  })

  const emits = defineEmits(['click'])

  const handleClick = (e) => {
    emits('click', e.target);
  }
</script>

<style scoped>
.button_comp {
  cursor: pointer;
  border-radius: 5px;
  border: none;
  opacity: .85;
  transition: opacity .1s linear;
}

.button_comp:hover {
  opacity: 1;
}

.button_comp:active {
  opacity: .75;
}

.elevation_button_comp {
  -webkit-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
}

.spinner_comp {
  animation: spinner 1s linear infinite;
}


@keyframes spinner {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
