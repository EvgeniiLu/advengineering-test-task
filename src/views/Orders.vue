<template>
  <div>
    <card-component elevation>
      <title-component text-start/>
    </card-component>
    <text-field-component label="label" placeholder="placeholder"/>
    <button-component elevation>Кнопка</button-component>

    <table-component :headers="headers" :items="items" elevation>
      <template #actions="item">
        <div class="table_actions_slot">
          <button-component icon color="" @click="qwe(item)">
            <mdicon name="check-circle-outline"/>
          </button-component>

          <button-component icon color="" @click="showModal = true">
            <mdicon name="close-circle-outline"/>
          </button-component>
        </div>
      </template>
    </table-component>

    <transition name="fade">
      <modal-component
        v-if="showModal"
        question="Вы действительно хотите удалить  заказ?"
        @cancel="showModal = false"
      ></modal-component>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import TitleComponent from "@/components/ui/TitleComponent.vue";
  import TextFieldComponent from "@/components/ui/TextFieldComponent.vue";

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


