import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'mdui/mdui.css'

import 'mdui'

import { setColorScheme } from 'mdui/functions/setColorScheme.js'
setColorScheme('#0078d4')

const app = createApp(App)

app.use(router)
app.mount('#app')
export default app
