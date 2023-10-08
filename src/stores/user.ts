import { defineStore } from 'pinia'
import router from "@/router"
import {authApi} from "@/api";

export interface ReqParams {
  username: 'string';
  password: 'string';
}

export interface User {
  user: string,
  password: string,
  name: string,
  role: string
}

export const useUserStore = defineStore({
  id: 'app-user',

  state: (): User => ({
    user: '',
    password: '',
    name: '',
    role: ''
  }),

  getters: {
    isAdmin: (state): boolean => {
      return state.role === 'ADMIN'
    }
  },

  actions: {
    async login(body: ReqParams): Promise<User> {
      try {
        const data = await authApi.login(body)
        if (data) {
          this.user = data.user
          this.password = data.password
          this.name = data.name
          this.role = data.role
        }
        return data
      } catch (e) {
        return Promise.reject(e)
      }
    },

    async logout() {
      await router.replace('/login')
    },
  }
})
