<template>
  <table
    class="table_comp"
    :class="{
      'elevation_table_comp': elevation
    }"
  >
    <thead>
    <tr>
      <th v-for="(el, i) in headers" :key="i">
        {{ el.text }}
      </th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(item, i) in items" :key="i">
      <td v-for="(el, i) in headers" :key="i" :style="{width: el.width}">
        <template v-if="hasSlot(el.value)">
          <slot :name="el.value" v-bind="item"></slot>
        </template>

        <template v-else>
          {{valueStringParser(item, toArr(el.value))}}
        </template>
      </td>
    </tr>
    </tbody>

  </table>
</template>

<script setup lang="ts">
  import {useSlots, defineProps} from "vue";

  const props = defineProps({
    headers: {
      type: Array,
      default: () => []
    },
    items: {
      type: Array,
      default: () => []
    },
    elevation: Boolean,
    loading: Boolean
  })

  const slots = useSlots()

  const hasSlot = (name) => {
    return !!slots[name];
  }

  const toArr = (str) => str.split('.').reverse()

  const valueStringParser = (obj, arr) => {
    if (obj.hasOwnProperty(`${[arr[arr.length - 1]]}`)) {
      if (arr.length < 2) {
        return obj[arr[0]]
      }
      const firstEl = arr.shift()
      return valueStringParser(obj, arr)[`${firstEl}`]
    }
  }
</script>

<style scoped>

.table_comp {
  width: 100%;
  border: none;
  border-radius: 8px
}
.table_comp thead th {
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #E3F2FD;
  color: #212529;
  font-size: 14px;
}
.table_comp thead tr th:first-child {
  border-radius: 8px 0 0 8px;
}
.table_comp thead tr th:last-child {
  border-radius: 0 8px 8px 0;
}
.table_comp tbody td {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}
.table_comp tbody tr:nth-child(even){
  background: #f3f3f3;
}
.table_comp tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}
.table_comp tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}
.elevation_table_comp {
  -webkit-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
}
</style>
