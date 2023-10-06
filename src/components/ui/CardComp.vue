<template>
  <div
    class="card_comp"
    :style="{
      backgroundColor: backgroundColor,
      borderRadius: `${borderRadius}px`,
      padding: `${padding}px`
    }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
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
      default: 15
    }
  })
</script>

<style scoped>
  .card_comp {
    width: 100%;
  }
</style>
