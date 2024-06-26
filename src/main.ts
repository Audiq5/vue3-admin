import { createApp } from 'vue'
// import 'virtual:svg-icons-register'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入自定义插件对象:注册整个项目全局组件
import gloablComponent from './components/index';
import './styles/index.scss'
import router from './router'
import pinia from "@/store/index";

// import axios from 'axios'
// axios({
//   url: '/api/user/login',
//   method: 'post',
//   data: {
//     username: 'admin',
//     password: '1111211'
//   }
// })


//获取应用实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn
})
//注册router
app.use(router)
//安装pinia
app.use(pinia)

//安装自定义插件
app.use(gloablComponent);
//将应用挂载到挂载点上
app.mount('#app')