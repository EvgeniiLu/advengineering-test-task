<template>
  <router-view />
</template>

<script setup lang="ts">
</script>

<style>

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;

  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  color: #6c7279;
  background-color: #fff;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
