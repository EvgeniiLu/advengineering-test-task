<template>
  <div>
    <card-comp elevation>
      <title-comp text-start/>
    </card-comp>
    <text-field-comp label="label" placeholder="placeholder"/>
    <button-comp elevation>Кнопка</button-comp>

    <table-comp :headers="headers" :items="items" elevation>
      <template #actions="item">
        <div class="table_actions_slot">
          <button-comp icon color="" @click="qwe(item)">
            <mdicon name="check-circle-outline"/>
          </button-comp>

          <button-comp icon color="" @click="showModal = true">
            <mdicon name="close-circle-outline"/>
          </button-comp>
        </div>
      </template>
    </table-comp>

    <transition name="fade">
      <modal-comp
        v-if="showModal"
        question="Вы действительно хотите удалить  заказ?"
        @cancel="showModal = false"
      ></modal-comp>
    </transition>
  </div>
</template>

<script setup lang="ts">

  import TableComp from "@/components/ui/TableComp.vue";
  import ButtonComp from "@/components/ui/ButtonComp.vue";
  import ModalComp from "@/components/ui/ModalComp.vue";
  import {ref} from 'vue'

  const headers = [
    { text: 'Логин', value: 'id' },
    { text: 'ФИО', value: 'applicationStatus.name' },
    { text: 'Действия', value: 'actions', width: '130px' },
  ]

  const showModal = ref(false)

  const items = [
    {
      id: 1,
      applicationStatus: {
        name: '1111111111111'
      },
    },
    {
      id: 2,
      applicationStatus: {
        name: '22222222222222'
      },
    },
    {
      id: 3,
      applicationStatus: {
        name: '3333333333333'
      },
    },
  ]

  const qwe = (e) => {
    console.log(e)
  }

</script>

<style>
.table_actions_slot {
  display: flex;
  justify-content: space-around;
}
</style>


