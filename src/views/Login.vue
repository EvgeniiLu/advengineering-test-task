<template>
  <div class="login_page">
    <card-component
      class="login"
      padding="25"
      elevation
    >
      <div class="login_title">
        <title-component
          title="Авторизация"
          font-size="25"
        />
      </div>

      <div class="login_content">
        <text-field-component
          v-model="form.username"
          label="Имя пользователя"
          placeholder="Введите имя"
        />
        <text-field-component
          v-model="form.password"
          label="Пароль"
          placeholder="Введите пароль"
          type="password"
        />
      </div>

      <div class="login_actions">
        <button-component
          elevation
          :loading="loading"
          @click="login"
        >
          Вход
        </button-component>
      </div>
    </card-component>
  </div>
</template>

<script setup lang="ts">
  import {reactive, ref} from 'vue'
  import {useRouter} from 'vue-router'
  import {useUserStore} from "@/stores/user";

  const userStore = useUserStore()
  const router = useRouter()

  const form = reactive({
    username: '',
    password: ''
  })
  let loading = ref(false)

  const login = async () => {
    try {
      loading.value = true
      const data = await userStore.login(form)
      if (data.user) await router.push({name: 'events'})
    } catch (e) {
      console.log(e)
    } finally {
      loading.value = false
    }
  }

</script>

<style scoped>
.login_page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  max-width: 500px;
  min-width: 300px;
  margin: 0 10px;
}

.login_title {
}

.login_content {
  padding: 15px 0;
}

.login_actions {
  display: flex;
  justify-content: end;
}
</style>
