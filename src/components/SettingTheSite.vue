<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="menu--outlined"></mdui-button-icon>
        <mdui-top-app-bar-title>{{ $t('setting') }}</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao">
        <div class="setting">
            <p>{{ $t('setting_lanage') }}</p>
            <mdui-radio-group ref="lang" id="lang">
                <mdui-radio value="zh-CN">{{ $t('setting_lanage_chinese') }}</mdui-radio>
                <mdui-radio value="zh-MS">{{ $t('setting_lanage_zhms') }}</mdui-radio>
            </mdui-radio-group>
            <p>
                <b
                    >请注意：重置为默认设置将会在后续更新中提供<br />目前，如需重置为默认设置，还请手动清除本站数据后刷新即可生效</b
                ><br />
                有一说一哈，感觉千畔写的还不够微软式中文......
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import app from '@/main'
import { ref, onMounted } from 'vue'
const lang = ref<any>(null)
console.log(localStorage.getItem('lanauage'))
const lanauage = localStorage.getItem('lanauage')
onMounted(() => {
    // 显示设置
    if (localStorage.getItem('lanauage')) {
        lang.value.value = lanauage
        app.config.globalProperties.$i18n.locale = lang.value.value
        app.config.globalProperties.$i18n.fallbackLocale = lang.value.value
    } else {
        lang.value.value = 'zh-CN'
    }

    // 当有更新时
    lang.value.addEventListener('click', () => {
        localStorage.setItem('lanauage', lang.value.value)
        app.config.globalProperties.$i18n.locale = lang.value.value
        app.config.globalProperties.$i18n.fallbackLocale = lang.value.value
    })
})
</script>

<style lang="sass">
.miao div.setting
    margin: 30px 5px 0px 5%
</style>
