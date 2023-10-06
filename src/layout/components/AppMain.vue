<template>
  <main>
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
