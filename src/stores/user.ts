import { defineStore } from 'pinia'
import router from "@/router"

export interface UserState {
  user: string,
  password: string,
  name: string,
  role: string
}

export interface ReqParams {
  user: 'string';
  password: 'string';
}

export const useUserStore = defineStore({
  id: 'app-user',

  state: (): UserState => ({
    user: '',
    password: '',
    name: '',
    role: ''
  }),

  actions: {
    async login(params: ReqParams) {
      return params
    },

    async logout() {
      this.$reset()
      await router.replace('/login')
    },
  }
})
