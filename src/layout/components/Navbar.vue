<template>
  <header class="header" :class="{ 'border_bottom': borderBottom }">
    <div class="container">
      <div class="header_inner">
        <tabs-component :items="items"/>
        <button-component @click="logout" elevation>
          Выход
        </button-component>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import TabsComponent from "@/components/ui/TabsComponent.vue";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";

  defineProps({
    borderBottom: Boolean
  })
  const items = [{ name: 'Все заказы', to: '/orders' }, { name: 'Добавить заказ', to: '/add-order' }]
  const logout = () => {

  }

</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  height: var(--navbar-height);
  background-color: inherit;
  top: 0;
  left: 0;
}

.header_inner {
  display: flex;
  height: var(--navbar-height);
  justify-content: space-between;
  padding: 15px;
  align-items: center;
}

.border_bottom {
  border-bottom: 1px solid #b0b0b0;
}
</style>
