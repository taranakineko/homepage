<script setup lang="ts">
import { useRouter, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { UseSetting } from '@/function/read'
const NaviRail = ref<any>(null)
const NaviBar = ref<any>(null)
const TheDialog = ref<any>(null)
const OpenDialog = ref<any>(null)
const CloseDialog = ref<any>(null)
const router = useRouter()
onMounted(() => {
    OpenDialog.value.addEventListener('click', () => (TheDialog.value.open = true))
    CloseDialog.value.addEventListener('click', () => (TheDialog.value.open = false))
    UseSetting()
})
router.beforeEach((to, from, next) => {
    switch (to.path) {
        case '/':
            NaviRail.value.value = 'start'
            NaviBar.value.value = 'start'
            break
    }
    switch (to.path) {
        case '/me':
            NaviRail.value.value = 'me'
            NaviBar.value.value = 'me'
            break
    }
    switch (to.path) {
        case '/links':
            NaviRail.value.value = 'links'
            NaviBar.value.value = 'links'
            break
    }
    switch (to.path) {
        case '/thanks':
            NaviRail.value.value = 'thanks'
            NaviBar.value.value = 'thanks'
            break
    }
    switch (to.path) {
        case '/setting':
            NaviRail.value.value = 'setting'
            NaviBar.value.value = 'setting'
            break
    }
    next()
})
function OpenStart() {
    router.push('/')
}
function OpenMe() {
    router.push('/me')
}
function OpenLinks() {
    router.push('/links')
}
function OpenThanks() {
    router.push('/thanks')
}
function OpenSetting() {
    router.push('/setting')
}
</script>

<template>
    <div class="desktop">
        <mdui-navigation-rail value="{{ to.path }}" alignment="center" ref="NaviRail">
            <mdui-navigation-rail-item
                icon="restart_alt--outlined"
                value="start"
                v-on:click="OpenStart()"
                >{{ $t('app_start') }}</mdui-navigation-rail-item
            >
            <mdui-navigation-rail-item
                icon="device_unknown--outlined"
                value="me"
                v-on:click="OpenMe()"
                >{{ $t('app_me') }}</mdui-navigation-rail-item
            >
            <mdui-navigation-rail-item
                icon="link--outlined"
                value="links"
                v-on:click="OpenLinks()"
                >{{ $t('app_links') }}</mdui-navigation-rail-item
            >
            <mdui-navigation-rail-item
                icon="face_retouching_natural--outlined"
                value="thanks"
                v-on:click="OpenThanks()"
                >{{ $t('app_thanks') }}</mdui-navigation-rail-item
            >
            <mdui-navigation-rail-item
                icon="settings--outlined"
                value="setting"
                v-on:click="OpenSetting()"
                >{{ $t('app_setting') }}</mdui-navigation-rail-item
            >
            <mdui-button-icon
                ref="OpenDialog"
                icon="info--outlined"
                slot="bottom"
                data-umami-event="Footer Dialog"
            ></mdui-button-icon>
        </mdui-navigation-rail>
        <mdui-dialog class="hover" ref="TheDialog">
            <div class="dialog-footer">
                <p>Copyright © 2022 - Now taranakiNeko</p>
                <p>
                    Made with
                    <a href="https://github.com/zdhxiong/mdui/" target="_blank">zdhxiong/mdui</a> |
                    <a href="https://github.com/taranakineko/homepage/" target="_blank"
                        >Github Repo</a
                    >
                </p>
                <mdui-button ref="CloseDialog">关闭</mdui-button>
            </div>
        </mdui-dialog>
    </div>
    <div class="mobile">
        <mdui-navigation-bar value="{{ to.path }}" alignment="center" ref="NaviBar">
            <mdui-navigation-bar-item
                icon="restart_alt--outlined"
                value="start"
                v-on:click="OpenStart()"
                >{{ $t('app_start') }}</mdui-navigation-bar-item
            >
            <mdui-navigation-bar-item
                icon="device_unknown--outlined"
                value="me"
                v-on:click="OpenMe()"
                >{{ $t('app_me') }}</mdui-navigation-bar-item
            >
            <mdui-navigation-bar-item
                icon="link--outlined"
                value="links"
                v-on:click="OpenLinks()"
                >{{ $t('app_links') }}</mdui-navigation-bar-item
            >
            <mdui-navigation-bar-item
                icon="face_retouching_natural--outlined"
                value="thanks"
                v-on:click="OpenThanks"
                >{{ $t('app_thanks') }}</mdui-navigation-bar-item
            >
            <mdui-navigation-bar-item
                icon="settings--outlined"
                value="setting"
                v-on:click="OpenSetting()"
                >{{ $t('app_setting') }}</mdui-navigation-bar-item
            >
        </mdui-navigation-bar>
    </div>

    <RouterView />
</template>
