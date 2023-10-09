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
          @input="v$.username.$touch()"
          :error-message="v$.username.$errors"
        />
        <text-field-component
          v-model="form.password"
          label="Пароль"
          placeholder="Введите пароль"
          type="password"
          @input="v$.password.$touch()"
          :error-message="v$.password.$errors"
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

    <notification-component ref="notification"/>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {useRouter} from 'vue-router'
  import {useUserStore} from "@/stores/user"
  import {useVuelidate} from '@vuelidate/core'
  import {loginRules} from "@/validation"

  const userStore = useUserStore()
  const router = useRouter()

  const form = ref({
    username: '',
    password: ''
  })
  let loading = ref(false)

  const v$ = useVuelidate(loginRules, form)

  const notification = ref(null)

  const login = async () => {
    const result = await v$.value.$validate()
    if (!result) return

    try {
      loading.value = true
      const data = await userStore.login(form.value)
      if (data.user) await router.push({name: 'events'})
    } catch (e) {
      console.log(e)
      e.request.status === 422 && notification.value?.show('Ошибка!', 'Неверный логин\\пароль', 'error')
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
