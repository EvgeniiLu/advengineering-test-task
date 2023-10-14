import { repository } from "@/api/base"
import type {ReqParams, User} from "@/stores/user";

export default {
  async login(body: ReqParams): User {
    const {data} = await repository.post(`/login`, body)
    return data
  },

  async logout() {
    return await repository.post('/logout')
  },
}
