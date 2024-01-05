<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="menu--outlined"></mdui-button-icon>
        <mdui-top-app-bar-title>Setting 🚧</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao">
        <div>
            <p>{{ $t('setting_lanage') }}</p>
            <mdui-radio-group ref="lang" id="lang">
                <mdui-radio value="zh-CN">中文</mdui-radio>
                <mdui-radio value="zh-MS">zh-MS</mdui-radio>
            </mdui-radio-group>
            <p v-html="la"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import app from '@/main'
import { ref, onMounted } from 'vue'
const lang = ref<any>(null)
console.log(localStorage.getItem("lanauage"))
const la = localStorage.getItem("lanauage") // 调试用
const lanauage = localStorage.getItem("lanauage")
onMounted(() => {
    console.log(app.config.globalProperties.$i18n.locale) // 调试用
    console.log(lang.value.value) // 调试用

    if (localStorage.getItem("lanauage")) { // 判断是否有 lanauage，感觉有点多此一举
        lang.value.value = lanauage
    } else {
        lang.value.value = 'zh-CN'
    }

    lang.value.addEventListener('click', () => {
        console.log(lang.value.value) // 调试用
        localStorage.setItem("lanauage", lang.value.value)
        app.config.globalProperties.$i18n.locale = lang.value.value
        console.log(app.config.globalProperties.$i18n.locale) // 调试用
    })
})
</script>