<template>
  <nav class="tab_comp">
    <a
      class="tab_link_comp"
      v-for="(item, i) in items"
      :key="i"
      :class="{ 'active_tab': route.path === item.to }"
      :style="[activeTabColor]"
      @click="goTo(item.to)"
    >
      {{item.name}}
    </a>
  </nav>
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router';
  import {computed, defineProps} from "vue";
  const router = useRouter()
  const route = useRoute()

  const props = defineProps({
    items: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: '#409EFF'
    },
    backgroundColor: {
      type: String,
      default: 'white'
    }
  })

  const goTo = (to) => {
    router.push(to)
  }

  const activeTabColor = computed(()=> {
    return {
      '--active_tab': `${props.color}`
    }
  })

</script>

<style scoped>
.tab_comp {
  display: flex;
  text-transform: uppercase;
  padding: 8px 0;
}

.tab_link_comp {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  opacity: 1;
  min-width: 150px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.1s linear;
}

.tab_link_comp:hover {
  opacity: .75;
}

.tab_link_comp.active_tab {
  color: var(--active_tab);
  border-bottom: 2px solid var(--active_tab);
}

@media (max-width: 500px) {
  .tab_comp {
    flex-direction: column;
  }
}
</style>
