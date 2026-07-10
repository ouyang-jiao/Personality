import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import router from './router'
import App from './App.vue'
import './styles/global.css'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.mount('#app')
