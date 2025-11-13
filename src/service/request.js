import axios from 'axios'
import { useUserStore } from '../stores'

const service = axios.create({
  baseURL: 'http://192.168.31.96:3000',
})

service.interceptors.request.use((config) => {
  const userStore = useUserStore()
  config.headers.Authorization = userStore.token || '' // 添加token
})

service.interceptors.response.use(
  (response) => {
    if (typeof response.data !== 'object') {
      alert('服务器响应异常，请稍后再试')
      return Promise.reject(response)
    }
    return response.data
  },
  (err) => {
    console.log('err', err)
    return Promise.reject(err)
  }
)
export default service
