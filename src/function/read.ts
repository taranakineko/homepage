import app from '@/main'
import { setColorScheme } from 'mdui'
import { setTheme } from 'mdui'

export function UseSetting() {
    if (localStorage.getItem('color')) {
        setColorScheme(localStorage.getItem('color') as string)
    }

    if (localStorage.getItem('mode')) {
        setTheme(localStorage.getItem('mode') as 'light' | 'dark' | 'auto')
    }
}

export function UseLan() {
    if (localStorage.getItem('lanauage')) {
        app.config.globalProperties.$i18n.locale = localStorage.getItem('lanauage') as string
    }
}
