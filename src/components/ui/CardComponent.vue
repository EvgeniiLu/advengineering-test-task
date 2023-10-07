<template>
  <div
    class="card_comp"
    :class="{
      'elevation_card_comp': elevation
    }"
    :style="{
      backgroundColor: backgroundColor,
      borderRadius: `${borderRadius}px`,
      padding: `${padding}px`
    }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
  import {defineProps, useSlots} from "vue";

  const props = defineProps({
    backgroundColor: {
      type: String,
      default: 'white'
    },
    borderRadius: {
      type: [String, Number],
      default: 5
    },
    padding: {
      type: [String, Number],
      default: 0
    },
    elevation: Boolean
  })
</script>

<style scoped>
.card_comp {
  width: 100%;
}

.elevation_card_comp {
  -webkit-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
}
</style>
