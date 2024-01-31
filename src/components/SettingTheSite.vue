<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon
            icon="menu--outlined"
            ref="zako"
            data-umami-event="zako~"
        ></mdui-button-icon>
        <mdui-top-app-bar-title>Setting</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao">
        <div class="setting">
            <p>深/浅色模式</p>
            <div class="setting-mdui">
                <mdui-segmented-button-group selects="single" id="mode">
                    <mdui-segmented-button icon="mode_night--outlined" value="dark">深色</mdui-segmented-button>
                    <mdui-segmented-button icon="autorenew--outlined" value="auto">自动</mdui-segmented-button>
                    <mdui-segmented-button icon="light_mode--outlined" value="light">浅色</mdui-segmented-button>
                </mdui-segmented-button-group>
            </div>
        </div>
        <div class="setting">
            <p>主题颜色</p>
            <div class="setting-mdui">
                <mdui-dropdown placement="left-start">
                    <mdui-button-icon slot="trigger" icon="color_lens--outlined"></mdui-button-icon>
                    <mdui-card class="color-card">
                        <p>预设颜色</p>
                        <div class="color-colors">
                            <div
                                v-for="(hexColor, index) in colorOptions"
                                :key="index"
                                :style="{ backgroundColor: hexColor }"
                                @click="changeColor(hexColor)"
                            ></div>
                        </div>
                    </mdui-card>
                </mdui-dropdown>
            </div>
        </div>
        <div class="setting">
            <p>清除所有设置</p>
            <div class="setting-mdui">
                <mdui-button
                    variant="text"
                    icon="delete--outlined"
                    v-on:click="clearLocalStorage()"
                    >重置计数</mdui-button
                >
                <mdui-button variant="text" icon="delete--outlined" v-on:click="Reset()">清除</mdui-button>
            </div>
            <div class="setting-mdui" style="margin-top: 10px">
                <mdui-button variant="text" icon="delete--outlined" v-on:click="CleanAll()"
                    >一键清除！</mdui-button
                >
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { alert } from 'mdui/functions/alert.js'
import { setTheme } from 'mdui/functions/setTheme.js'
import { snackbar } from 'mdui/functions/snackbar.js'
import { setColorScheme } from 'mdui/functions/setColorScheme.js'
import { $ } from 'mdui/jq.js'
import useZakoCounter from '../function/zako'
const WebMode = localStorage.getItem('mode')
const WebColor = localStorage.getItem('color')
const HColor = '#AEC9D0'
const { zako, zakozako, clearLocalStorage } = useZakoCounter()
const colorOptions = ['#ffb4aa', '#00cc6a', '#0078d4', '#ff8c00', '#aec9d0']

onMounted(() => {
    if (localStorage.getItem('mode')) {
        setTheme(WebMode as 'light' | 'auto' | 'dark')
        $('#mode').prop('value', WebMode)
    } else {
        setTheme('auto')
        $('#mode').prop('value', 'auto')
    }
    if (localStorage.getItem('color')) {
        setColorScheme(WebColor as string)
    } else {
        setColorScheme(HColor)
    }

    $('#mode').on('click', function (e) {
        if ($('#mode').prop('value') === '') {
            $('#mode').prop('value', 'auto')
        }
        localStorage.setItem('mode', $('#mode').prop('value') as 'light' | 'dark' | 'auto')
        setTheme($('#mode').prop('value') as 'light' | 'dark' | 'auto')
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

function CleanAll() {
    alert({
        headline: '警 告',
        description: '你真的要清除吗？（真的很久很久的）',
        confirmText: 'Yes',
        onConfirm: function () {
            $('body').empty()
        },
        closeOnEsc: false,
        closeOnOverlayClick: false,
        icon: 'error_outline--outlined'
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
