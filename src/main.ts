import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'mdui/mdui.css'

import 'mdui'

import { setColorScheme } from 'mdui/functions/setColorScheme.js'
setColorScheme('#AEC9D0')
// 想改成灰色的，但改了和没改一样，作罢

const app = createApp(App)

app.use(router)
app.mount('#app')
export default app
