import { repository } from "@/api/base"

export default {
  async login(body) {
    const {data} = await repository.post(`/login?username=${body.username}&password=${body.password}`)
    return data
  },

  async logout() {
    return await repository.post('/logout')
  },
}
