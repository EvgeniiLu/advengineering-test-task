
import axios from 'axios'

export const repository = axios.create({
  baseURL: '/api',
  withCredentials: true,
  timeout: 10000,
})

