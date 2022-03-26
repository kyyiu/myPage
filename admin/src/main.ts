import { createApp } from 'vue'
import App from './App.vue'
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import http from './http'

const app = createApp(App)
app.config.globalProperties.$axios = http;
app.config.globalProperties.$message = ElMessage;
app.use(router)
app.mount('#app')
