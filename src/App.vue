<script setup lang="ts">
import { useRouter, RouterView } from 'vue-router'
import { ref, onMounted} from 'vue'
const NaviRail = ref<any>(null)
const NaviBar = ref<any>(null)
const TheDialog = ref<any>(null)
const OpenDialog = ref<any>(null)
const CloseDialog = ref<any>(null)
const router = useRouter()
onMounted(() => {
    OpenDialog.value.addEventListener('click', () => (TheDialog.value.open = true))
    CloseDialog.value.addEventListener('click', () => (TheDialog.value.open = false))
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
</script>

<template>
    <div class="desktop">
        <mdui-navigation-rail value="{{ to.path }}" alignment="center" ref="NaviRail">
            <mdui-navigation-rail-item
                icon="restart_alt--outlined"
                value="start"
                v-on:click="OpenStart()"
                >Start</mdui-navigation-rail-item
            >
            <mdui-navigation-rail-item
                icon="device_unknown--outlined"
                value="me"
                v-on:click="OpenMe()"
                >介绍</mdui-navigation-rail-item
            >
            <mdui-navigation-rail-item icon="link--outlined" value="links" v-on:click="OpenLinks()"
                >链接</mdui-navigation-rail-item
            >
            <mdui-navigation-rail-item
                icon="face_retouching_natural--outlined"
                value="thanks"
                v-on:click="OpenThanks()"
                >感谢</mdui-navigation-rail-item
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
                >Start</mdui-navigation-bar-item
            >
            <mdui-navigation-bar-item
                icon="device_unknown--outlined"
                value="me"
                v-on:click="OpenMe()"
                >介绍</mdui-navigation-bar-item
            >
            <mdui-navigation-bar-item icon="link--outlined" value="links" v-on:click="OpenLinks()"
                >链接</mdui-navigation-bar-item
            >
            <mdui-navigation-bar-item
                icon="face_retouching_natural--outlined"
                value="thanks"
                v-on:click="OpenThanks"
                >感谢</mdui-navigation-bar-item
            >
        </mdui-navigation-bar>
    </div>

    <RouterView />
</template>
