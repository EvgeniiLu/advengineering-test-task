<template>
  <div :style="[navbarHeight]">
    <Navbar elevation/>
    <AppMain class="main"/>
  </div>
</template>

<script setup lang="ts">
  import { Navbar, AppMain } from "./components/index"
  import {useRouter} from 'vue-router'
  import {useUserStore} from "@/stores/user";
  import {computed} from "vue";

  const userStore = useUserStore()
  const navbarHeight = computed(()=> {
    return {
      '--navbar-height': userStore.user ? '80px' : '0px'
    }
  })

  const router = useRouter()
  if (!userStore.name) router.push('/')
</script>

<style scoped>
.main {
  margin-top: var(--navbar-height);
  height: calc(100vh - var(--navbar-height));
}
</style>
