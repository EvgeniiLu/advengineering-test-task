import { repository } from "@/api/base"

export default {
  async login(body) {
    const {data} = await repository.post(`/login`, body)
    return data
  },

  async logout() {
    return await repository.post('/logout')
  },
}
