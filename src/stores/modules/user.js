import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'd-s-user',
  () => {
    const token = ref('') // token
    const userInfo = ref({
      name: '张三',
      age: 18,
      gender: '男',
      hobby: '篮球',
    }) // 用户信息
    const setUserInfo = (data) => {
      userInfo.value = data
    }

    return { token, userInfo, setUserInfo }
  },
  {
    persist: true, // 持久化
  }
)
