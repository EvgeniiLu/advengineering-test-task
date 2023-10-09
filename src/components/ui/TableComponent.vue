<template>
  <div class="table_wrapper_comp" :class="{'elevation_table_comp': elevation}">
    <table class="table_comp">
      <thead class="table_thead_comp">
        <tr class="table_tr_comp">
          <th
            class="table_th_comp"
            v-for="(header, i) in extendedHeaders"
            :key="i"
            @click="changeSortType(header)"
          >
            <div class="table_th_inner_comp">
              <span>{{ header.text }}</span>
              <mdicon
                v-if="header.value !== 'actions'"
                class="table_th_icon_comp"
                :class="{
                  'table_comp_arrow_up': header.sortUp,
                  'table_comp_arrow_down': header.sortDown,
                }"
                name="arrow-up-bold"
                size="15"
              />
            </div>
          </th>
        </tr>
        </thead>

        <tbody class="table_tbody_comp">
        <tr
          class="table_tr_comp"
          v-for="(item, i) in sortedItems"
          :key="i"
        >
          <td
            class="table_td_comp"
            v-for="(header, i) in extendedHeaders"
            :key="i"
            :style="{width: header.width}"
          >
            <template v-if="hasSlot(header.value)">
              <slot :name="header.value" v-bind="item"></slot>
            </template>
            <template v-else>
              {{valueStringParser(item, toArr(header.value))}}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {useSlots, defineProps, ref, onActivated, computed, watchEffect} from "vue"

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

  const extendedHeaders = ref([])

  onActivated(()=> {
    extendedHeaders.value = props.headers.map(item => {
      return {
        ...item,
        sortUp: false,
        sortDown: false
      }
    })
  })

  const selectedHeader = ref(null)

  const changeSortType = (el) => {
    if (el.value === 'actions') return

    if (!selectedHeader.value) {
      selectedHeader.value = el
    }

    if (selectedHeader.value && selectedHeader.value !== el) {
      selectedHeader.value.sortUp = false
      selectedHeader.value.sortDown = false
      selectedHeader.value = el
    }

    if (!el.sortUp && !el.sortDown) {
      el.sortUp = true
      return
    }

    if (el.sortUp) {
      el.sortUp = false
      el.sortDown = true
      return
    }

    if (el.sortDown) {
      el.sortDown = false
      selectedHeader.value = null
      return
    }
  }

  const sortedItems = computed(()=> {
    if (selectedHeader.value?.sortUp) {
      return sortDescending()
    }

    if (selectedHeader.value?.sortDown) {
      return sortDescending().reverse()
    }
    return props.items
  })

  const sortDescending = () => {
    return props.items.slice().sort(function(argA, argB) {
      const a = argA[selectedHeader.value.value]
      const b = argB[selectedHeader.value.value]

      if (typeof a === 'number' && typeof b === 'number') {
        return a - b
      }

      if (typeof a === 'string' && typeof b === 'string') {
        if (isDate(a) && isDate(b)) {
          return convertDate(a) - convertDate(b)
        } else {
          return a.localeCompare(b)
        }
      }
    })
  }

  const isDate = (str) => {
    const dateRegex = /^\d{1,2} [а-яА-ЯёЁ]+ \d{4}$/i
    return dateRegex.test(str)
  }

  const convertDate = (str) => {
    const monthNames = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ]

    const [day, month, year] = str.split(' ')
    const monthNum = monthNames.findIndex(name => name === month) + 1

    return new Date(`${year}-${monthNum}-${day}`)
  }

  const slots = useSlots()

  const hasSlot = (name) => {
    return !!slots[name];
  }

  //метод valueStringParser необходим для обработки value с записью 'через точку' ('object.property.property')
  const valueStringParser = (obj, arr) => {
    if (obj?.hasOwnProperty(`${[arr[arr.length - 1]]}`)) {
      if (arr.length < 2) {
        return obj[arr[0]]
      }
      const firstEl = arr.shift()
      return valueStringParser(obj, arr)[`${firstEl}`]
    }
  }

  const toArr = (str) => str.split('.').reverse()
</script>

<style scoped>
.table_wrapper_comp {
  width: 100%;
  border-radius: 8px;
  overflow-x: auto;
}

.table_comp {
  width: 100%;
  border: none;
}

.table_th_comp {
  cursor: pointer;
}

.table_th_inner_comp {
  display: flex;
  align-items: center;
}

.table_th_icon_comp {
  opacity: 0;
  margin-left: 5px;
  transition: all .1s linear;
}

.table_th_comp:hover .table_th_icon_comp:not(.table_comp_arrow_up, .table_comp_arrow_down) {
  opacity: .5;
}

.table_th_icon_comp.table_comp_arrow_up {
  opacity: 1;
}

.table_th_icon_comp.table_comp_arrow_down {
  transform: rotate(180deg);
  opacity: 1;
}

.table_comp .table_thead_comp .table_th_comp {
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #E3F2FD;
  color: #212529;
  font-size: 14px;
}

.table_comp .table_thead_comp .table_tr_comp .table_th_comp:first-child {
  border-radius: 8px 0 0 8px;
}

.table_comp .table_thead_comp .table_tr_comp .table_th_comp:last-child {
  border-radius: 0 8px 8px 0;
}

.table_comp .table_tbody_comp .table_td_comp {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}

.table_comp .table_tbody_comp .table_tr_comp:nth-child(even){
  background: #f3f3f3;
}

.table_comp .table_tbody_comp .table_tr_comp .table_td_comp:first-child {
  border-radius: 8px 0 0 8px;
}

.table_comp .table_tbody_comp .table_tr_comp .table_td_comp:last-child {
  border-radius: 0 8px 8px 0;
}

.elevation_table_comp {
  -webkit-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.2);
}
</style>
