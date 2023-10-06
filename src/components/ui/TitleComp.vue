<template>
  <div class="title_comp" :class="{ 'flex_start_comp': textStart }">
    <span
      :style="{
        fontSize: `${fontSize}px`,
        fontWeight: `${fontWeight}`,
        color: color
      }"
    >
      {{title}}
    </span>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: 'Title'
    },
    fontSize: {
      type: [String, Number],
      default: 18
    },
    fontWeight: {
      type: [String, Number],
      default: 600
    },
    color: {
      type: String,
      default: '#000000'
    },
    textStart: Boolean
  })
</script>

<style scoped>
.title_comp {
  width: 100%;
  display: flex;
  justify-content: center;
}

.flex_start_comp {
  justify-content: start;
}
</style>
