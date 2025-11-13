import { createApp } from 'vue'
import router from './router'
import pinia from './stores'
import './style.css'
import App from './App.vue'

import echarts from './components/commonJs/echarts' // 引入echarts

const app = createApp(App)
app.use(router)
app.use(pinia)
app.provide('echarts', echarts) // 将echarts注入到全局
app.mount('#app')
