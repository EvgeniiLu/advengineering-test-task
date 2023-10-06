
import { repository } from "@/api/index"

const ordersApi = {
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
}

export default ordersApi
