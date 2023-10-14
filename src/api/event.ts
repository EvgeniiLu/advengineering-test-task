import { repository } from "@/api/base"
import type {Events, Event} from "@/stores/events";

export default {
  async get(): Events {
    const { data } = await repository.get('/events')
    return data
  },

  async post(body: Event): Event {
    const {data} = await repository.post('/events', body)
    return data
  },

  async put(body: Event): Event {
    const {data} = await repository.put(`/events/${body.id}`, body)
    return data
  },

  async remove(body) {
    const {data} = await repository.delete(`/events/${body.id}`, body)
    return data
  },
}

