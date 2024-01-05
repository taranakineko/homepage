import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import zh from './assets/lan/zh-CN.json'
import zh_ms from './assets/lan/zh-MS.json'

import './assets/main.css'
import 'mdui/mdui.css'

import 'mdui'

import { setColorScheme } from 'mdui/functions/setColorScheme.js'
setColorScheme('#AEC9D0')

// 载入 l10n
const messages = {
    'zh-CN': zh,
    'zh-MS': zh_ms
}

// 初始化 i18n
export const i18n = createI18n({
    legacy: false,
    locale: 'zh-CN',
    fallbackLocale: 'zh-CN',
    silentFallbackWarn: true,
    messages
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
export default app
