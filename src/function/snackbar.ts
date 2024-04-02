import { ref, onMounted, onUnmounted } from 'vue'
import TXT from '../config/txt.json'
import { snackbar } from 'mdui/functions/snackbar.js'

export default function randomTheTXT() {
    const OpenTheSnackbar = ref<any>(null)
    const showBackToTop = ref(false)

    // 监听滚动事件并更新 showBackToTop
    const handleScroll = () => {
        // 这里的 100 是滚动多少距离后显示按钮，可以根据需要调整
        showBackToTop.value = window.scrollY > 100
    }

    // 返回顶部的方法
    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    onMounted(() => {
        // console.log(OpenTheSnackbar.value);
        // console.log(TheSnackbar.value);
        // 2023.11.18 09:57:05 —— 2023.11.19 02:03:00
        // 他喵的终于搞定这玩意了
        // Refactored by Elihuso
        window.addEventListener('scroll', handleScroll)
        const txt = TXT as String[]
        OpenTheSnackbar.value.addEventListener('click', () => {
            // TheSnackbar.value.open = true
            const rnd = Math.floor(Math.random() * txt.length)
            // TheSnackbar.value.innerHTML = txt[rnd]
            snackbar({
                message: txt[rnd] as string,
                autoCloseDelay: 3000,
                closeOnOutsideClick: true
            })
        })
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    return { OpenTheSnackbar, backToTop, showBackToTop }
}
