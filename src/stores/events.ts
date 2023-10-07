import { defineStore } from 'pinia'
import {eventApi} from '@/api'

export interface Event {
  id: number,
  name: string,
  address: string,
  date: string,
  status: string,
  comment: string
}

export interface Events {
  list: Event[]
}

export const useEventsStore = defineStore({
  id: 'app-orders',

  state: (): Events => ({
    list: []
  }),

  actions: {
    async getEvents(): Promise<Events> {
      try {
        return await eventApi.get()
      } catch (e) {
        console.log(e)
      }
    },

    async addEvent(event: Event): Promise<Events> {
      try {
        const data = await eventApi.post(event)
        this.list.push(data)
        return data
      } catch (e) {
        console.log(e)
      }
    },

    async updateEvent(event: Event): Promise<Events> {
      try {
        const data = await eventApi.put(event)
        const index = this.list.findIndex(el => el.id === data.id)
        index >=0 && this.list.splice(index, 1, data)
        return data
      } catch (e) {
        console.log(e)
      }
    },

    async removeEvent(event: Event): void {
      try {
        const data = await eventApi.remove(event)
        const index = this.list.findIndex(el => el.id === data.id)
        index >=0 && this.list.splice(index, 1)
      } catch (e) {
        console.log(e)
      }
    },
  }
})
