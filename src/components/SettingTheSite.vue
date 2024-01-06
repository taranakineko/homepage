<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="menu--outlined"></mdui-button-icon>
        <mdui-top-app-bar-title>{{ $t('setting') }}</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao">
        <div class="setting">
            <p>{{ $t('setting_lanage') }}</p>
            <div class="setting-mdui">
                <mdui-select variant="filled" value="zh-CN" ref="lang">
                    <mdui-menu-item value="zh-CN">{{
                        $t('setting_lanage_chinese')
                    }}</mdui-menu-item>
                    <mdui-menu-item value="zh-MS">{{ $t('setting_lanage_zhms') }}</mdui-menu-item>
                    <mdui-menu-item value="zh-GL">{{ $t('setting_lanage_zhgl') }}</mdui-menu-item>
                </mdui-select>
            </div>
        </div>
        <div class="setting">
            <p>{{ $t('setting_delete') }}</p>
            <div class="setting-mdui">
                <mdui-button variant="text" icon="delete--outlined" v-on:click="Reset()">{{
                    $t('setting_delete_button')
                }}</mdui-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import app from '@/main'
import { ref, onMounted } from 'vue'
import { snackbar } from 'mdui/functions/snackbar.js'
const lang = ref<any>(null)
console.log(localStorage.getItem('lanauage'))
const lanauage = localStorage.getItem('lanauage')
onMounted(() => {
    // 显示设置
    if (localStorage.getItem('lanauage')) {
        // lang.value.value = lanauage
        lang.value.value = lanauage
        app.config.globalProperties.$i18n.locale = lang.value.value
        app.config.globalProperties.$i18n.fallbackLocale = lang.value.value
    } else {
        lang.value.value = 'zh-CN'
    }

    // 表单更新时
    lang.value.addEventListener('click', () => {
        if (lang.value.value === '') {
            lang.value.value = 'zh-CN'
        }
        // console.log(langTest.value.value + '被选中了')
        localStorage.setItem('lanauage', lang.value.value)
        app.config.globalProperties.$i18n.locale = lang.value.value
        app.config.globalProperties.$i18n.fallbackLocale = lang.value.value
    })
})
function Reset() {
    localStorage.clear()
    snackbar({
        message: '已经清除啦~',
        action: 'Reload',
        onActionClick: () => location.reload(),
        autoCloseDelay: 3000,
        closeOnOutsideClick: true
    })
}
</script>

<style lang="sass">
.miao div.setting
    margin: 30px 5px 0px 5%

.setting-mdui
    text-align: right
</style>
