<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon
            icon="menu--outlined"
            ref="zako"
            data-umami-event="zako~"
        ></mdui-button-icon>
        <mdui-top-app-bar-title>{{ $t('setting') }}</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao">
        <div class="setting">
            <p>{{ $t('setting_lanage') }}</p>
            <div class="setting-mdui">
                <mdui-select end-aligned variant="filled" value="zh-CN" ref="lang" disabled>
                    <mdui-menu-item value="zh-CN">{{
                        $t('setting_lanage_chinese')
                    }}</mdui-menu-item>
                    <mdui-menu-item value="zh-MS">{{ $t('setting_lanage_zhms') }}</mdui-menu-item>
                    <mdui-menu-item value="zh-GL">{{ $t('setting_lanage_zhgl') }}</mdui-menu-item>
                </mdui-select>
            </div>
            <mdui-list>
                <mdui-collapse>
                    <mdui-collapse-item>
                        <mdui-list-item slot="header" icon="warning--outlined">{{
                            $t('setting_lanage_warning')
                        }}</mdui-list-item>
                        <div style="margin-left: 2.5rem">
                            <mdui-list-item>{{ $t('setting_lanage_warning_p') }}</mdui-list-item>
                        </div>
                    </mdui-collapse-item>
                </mdui-collapse>
            </mdui-list>
        </div>
        <div class="setting">
            <p>{{ $t('setting_mode') }}</p>
            <div class="setting-mdui">
                <mdui-segmented-button-group selects="single" ref="mode">
                    <mdui-segmented-button icon="mode_night--outlined" value="dark">{{
                        $t('setting_mode_dark')
                    }}</mdui-segmented-button>
                    <mdui-segmented-button icon="autorenew--outlined" value="auto">{{
                        $t('setting_mode_auto')
                    }}</mdui-segmented-button>
                    <mdui-segmented-button icon="light_mode--outlined" value="light">{{
                        $t('setting_mode_light')
                    }}</mdui-segmented-button>
                </mdui-segmented-button-group>
            </div>
        </div>
        <div class="setting">
            <p>{{ $t('setting_color') }}</p>
            <div class="setting-mdui">
                <mdui-dropdown placement="left-start">
                    <mdui-button-icon slot="trigger" icon="color_lens--outlined"></mdui-button-icon>
                    <mdui-card class="color-card">
                        <p>预设颜色</p>
                        <div class="color-colors">
                            <div v-for="(hexColor, index) in colorOptions" :key="index" :style="{ backgroundColor: hexColor }" @click="changeColor(hexColor)"></div>
                        </div>
                    </mdui-card>
                </mdui-dropdown>
            </div>
        </div>
        <div class="setting">
            <p>{{ $t('setting_delete') }}</p>
            <div class="setting-mdui">
                <mdui-button
                    variant="text"
                    icon="delete--outlined"
                    v-on:click="clearLocalStorage()"
                    >{{ $t('setting_delete_zako') }}</mdui-button
                >
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
import { setTheme } from 'mdui/functions/setTheme.js'
import { snackbar } from 'mdui/functions/snackbar.js'
import { setColorScheme } from 'mdui/functions/setColorScheme.js'
// import { $ } from 'mdui/jq.js'
import useZakoCounter from '../function/zako'
const lang = ref<any>(null)
const mode = ref<any>(null)
// const color = ref<any>(null)
const colorCard = ref<any>(null)
const { zako, zakozako, clearLocalStorage } = useZakoCounter()

const colorOptions = ['#ffb4aa', '#00cc6a', '#0078d4', '#ff8c00', '#aec9d0']
// console.log(localStorage.getItem('lanauage'))
// console.log(localStorage.getItem('mode'))
const lanauage = localStorage.getItem('lanauage')
const WebMode = localStorage.getItem('mode')
const WebColor = localStorage.getItem('color')
const HColor = '#AEC9D0'
onMounted(() => {
    // 显示相关设置
    if (localStorage.getItem('lanauage')) {
        // lang.value.value = lanauage
        lang.value.value = lanauage
        app.config.globalProperties.$i18n.locale = lang.value.value
        // app.config.globalProperties.$i18n.fallbackLocale = lang.value.value
    } else {
        lang.value.value = 'zh-CN'
    }
    if (localStorage.getItem('mode')) {
        // lang.value.value = lanauage
        mode.value.value = WebMode
        setTheme(mode.value.value)
    } else {
        mode.value.value = 'auto'
        setTheme('auto')
    }
     if (localStorage.getItem('color')) {
         setColorScheme(WebColor as string)
     } else {
         setColorScheme(HColor)
     }

    // 更新设置
    lang.value.addEventListener('click', () => {
        if (lang.value.value === '') {
            lang.value.value = 'zh-CN'
        }
        // console.log(langTest.value.value + '被选中了')
        localStorage.setItem('lanauage', lang.value.value)
        app.config.globalProperties.$i18n.locale = lang.value.value
        // app.config.globalProperties.$i18n.fallbackLocale = lang.value.value
    })
    mode.value.addEventListener('click', () => {
        if (mode.value.value === '') {
            mode.value.value = 'auto'
        }
        localStorage.setItem('mode', mode.value.value)
        setTheme(mode.value.value)
    })
})

const changeColor = (hexColor: string) => {
    // redo by ChatGPT 3.5
    //  2024.01.23 22:38
    console.log(hexColor)
    setColorScheme(hexColor)
    localStorage.setItem('color', hexColor)
}

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

.color-card
    padding: 1rem

    .color-colors
        display: flex
        padding: .5rem 0rem

        div
            cursor: pointer
            box-sizing: border-box
            width: 1.875rem
            height: 1.875rem
            border-radius: var(--mdui-shape-corner-extra-small)
            border: .0625rem solid rgb(var(--mdui-color-outline))
            margin-left: .5rem
</style>
