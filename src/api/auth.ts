
import { repository } from "@/api/index"

const authApi = {
  async login(body) {
    const {data} = await repository.post('/login', body)
    return data
  },

  async logout() {
    return await repository.post('/logout')
  },
}

export default authApi
