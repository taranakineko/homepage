<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="menu--outlined"></mdui-button-icon>
        <mdui-top-app-bar-title>Setting 🚧</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao">
        <div>
            <p>语言设置</p>
            <mdui-radio-group value="chinese" ref="lang" id="lang">
                <mdui-radio value="chinese">中文</mdui-radio>
                <mdui-radio value="zh-ms">zh-MS</mdui-radio>
            </mdui-radio-group>
            <p v-html="la"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const lang = ref<any>(null)
console.log(document.cookie.match('(lanauage=)(.*?)(;|$)'))
const la = document.cookie.match('(lanauage=)(.*?)(;|$)') // 调试用
const lanauage = document.cookie.match('(lanauage=)(.*?)(;|$)')
onMounted(() => {
    console.log(lang.value.value) // 调试用
    if (document.cookie.includes("lanauage")) { // 判断是否有 lanauage cookie
        lang.value.value = lanauage[2]
    }
    lang.value.addEventListener('click', () => {
        console.log(lang.value.value) // 调试用
        document.cookie = "lanauage=" + lang.value.value
    })
})
</script>