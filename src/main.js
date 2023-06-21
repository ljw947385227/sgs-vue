import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios";
const app = createApp(App)
app.use(ViewUIPlus).use(ElementPlus)
app.use(router)

app.mount('#app')
axios.defaults.baseURL='http://localhost:8080'
