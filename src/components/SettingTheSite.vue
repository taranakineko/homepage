<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="menu--outlined"></mdui-button-icon>
        <mdui-top-app-bar-title>{{ $t('setting') }}</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao">
        <div class="setting">
            <p>{{ $t('setting_lanage') }}</p>
            <div class="setting-mdui">
                <mdui-select end-aligned variant="filled" value="zh-CN" ref="lang">
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
                    <mdui-segmented-button icon="light_mode--outlined" value="light"
                        >{{ $t('setting_mode_light') }}</mdui-segmented-button
                    >
                    <mdui-segmented-button icon="autorenew--outlined" value="auto"
                        >{{ $t('setting_mode_auto') }}</mdui-segmented-button
                    >
                    <mdui-segmented-button icon="mode_night--outlined" value="dark"
                        >{{ $t('setting_mode_dark') }}</mdui-segmented-button
                    >
                </mdui-segmented-button-group>
            </div>
        </div>
        <div class="setting">
            <p>{{ $t('setting_color') }}</p>
            <div class="setting-mdui">
                <mdui-dropdown>
                    <mdui-card
                        slot="trigger"
                        variant="outlined"
                        clickable
                        style="width: 100px; height: 50px"
                    >
                        <mdui-card
                            class="color-card"
                            variant="filled"
                            style="
                                width: 80px;
                                height: 30px;
                                margin-top: 10px;
                                margin-right: 10px;
                                background-color: #aec9d0;
                            "
                        ></mdui-card>
                    </mdui-card>
                    <mdui-menu ref="color" value="#AEC9D0" selects="single">
                        <mdui-menu-item value="#00cc6a" style="background-color: #00cc6a;">{{ $t('setting_color_spring') }}</mdui-menu-item>
                        <mdui-menu-item value="#0078d4" style="background-color: #0078d4;">{{ $t('setting_color_summer') }}</mdui-menu-item>
                        <mdui-menu-item value="#ff8c00" style="background-color: #ff8c00;">{{ $t('setting_color_autumm') }}</mdui-menu-item>
                        <mdui-menu-item value="#AEC9D0" style="background-color: #AEC9D0;">{{ $t('setting_color_winter') }}</mdui-menu-item>
                    </mdui-menu>
                </mdui-dropdown>
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
import { setTheme } from 'mdui/functions/setTheme.js'
import { snackbar } from 'mdui/functions/snackbar.js'
import { setColorScheme } from 'mdui/functions/setColorScheme.js';
import { $ } from 'mdui/jq.js';
const lang = ref<any>(null)
const mode = ref<any>(null)
const color = ref<any>(null)
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
        // lang.value.value = lanauage
        color.value.value = WebColor
        $('.color-card').css('background-color', color.value.value)
        setColorScheme(color.value.value);
    } else {
        color.value.value = HColor
        setColorScheme(HColor);
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
    color.value.addEventListener('click', () => {
        console.log(color.value.value)
        localStorage.setItem('color', color.value.value)
        $('.color-card').css('background-color', color.value.value)
        setColorScheme(color.value.value);
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
