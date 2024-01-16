import { ref, onMounted } from 'vue'
import TXT from '../config/txt.json'
import { snackbar } from 'mdui/functions/snackbar.js'

export default function randomTheTXT() {
    const OpenTheSnackbar = ref<any>(null)

    onMounted(() => {
        // console.log(OpenTheSnackbar.value);
        // console.log(TheSnackbar.value);
        // 2023.11.18 09:57:05 —— 2023.11.19 02:03:00
        // 他喵的终于搞定这玩意了
        // Refactored by Elihuso
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

    return { OpenTheSnackbar }
}
