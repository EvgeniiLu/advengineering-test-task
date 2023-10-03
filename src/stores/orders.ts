import { defineStore } from 'pinia'
import router from "@/router"

export interface OrderState {
  id: number,
  name: string,
  address: string,
  date: string,
  status: string,
  comment: string

}

export interface OrderList {
  list: OrderState[]
}

export interface ReqParams {
  user: 'string';
  password: 'string';
}

export const useOrderState = defineStore({
  id: 'app-orders',

  state: (): OrderList => ({
    list: []
  }),

  actions: {
  }
})
