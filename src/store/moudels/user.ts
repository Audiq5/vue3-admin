import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import { constantRoute } from '@/router/routes'
import type {
  loginFormData,
} from '@/api/user/type'
export const useCounterStore = defineStore('userMsg', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'),
      userRoutes: constantRoute
    }
  },
  actions: {
    async loginForm(data: loginFormData) {
      const res: any = await reqLogin(data)
      if (res.code == 200) {
        this.token = res.data.token
        //本地存储持久化存储一份
        localStorage.setItem('TOKEN', res.data.token)
        //能保证当前async函数返回一个成功的promise
        return 'ok'
      } else {
        console.log('err');
        // 返回失败的结果
        return Promise.reject(new Error(res.data))
      }

    }
  },
})