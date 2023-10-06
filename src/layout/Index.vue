<template>
  <div :style="[navbarHeight]">
    <Navbar border-bottom/>
    <AppMain class="main"/>
  </div>
</template>

<script setup lang="ts">
  import { Navbar, AppMain } from "./components/index"
  import {computed} from "vue";

  const navbarHeight = computed(()=> {
    return {
      '--navbar-height': '80px'
    }
  })
</script>

<style scoped>
.main {
  margin-top: var(--navbar-height);
  height: calc(100vh - var(--navbar-height));
}
</style>
