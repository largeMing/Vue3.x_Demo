import { createApp } from 'vue'
// eslint-disable-next-line no-unused-vars
import ElementPlus from 'element-plus'
import App from './App.vue'

// eslint-disable-next-line no-unused-vars,import/extensions,import/no-unresolved
import router from './router'
// eslint-disable-next-line no-unused-vars,import/no-unresolved,import/extensions
import store from './store'
// eslint-disable-next-line no-unused-vars
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).mount('#app')
