import { repository } from "@/api/base"

export default {
  async get() {
    const { data } = await repository.get('/events')
    return data
  },

  async post(body) {
    const {data} = await repository.post('/events', body)
    return data
  },

  async put(body) {
    const {data} = await repository.put('/events', body)
    return data
  },

  async remove(body) {
    const {data} = await repository.delete('/events', body)
    return data
  },
}

