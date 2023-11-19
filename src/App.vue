<script setup lang="ts">
import { useRouter, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
const NaviRail = ref<any>(null)
const NaviBar = ref<any>(null)
const router = useRouter()
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
            <mdui-navigation-rail-item icon="restart_alt--outlined" value="start" @click="OpenStart"
                >Start</mdui-navigation-rail-item
            >
            <mdui-navigation-rail-item icon="device_unknown--outlined" value="me" @click="OpenMe"
                >介绍</mdui-navigation-rail-item
            >
            <mdui-navigation-rail-item icon="link--outlined" value="links" @click="OpenLinks"
                >链接</mdui-navigation-rail-item
            >
            <mdui-navigation-rail-item
                icon="face_retouching_natural--outlined"
                value="thanks"
                @click="OpenThanks"
                >感谢</mdui-navigation-rail-item
            >
        </mdui-navigation-rail>
    </div>
    <div class="mobile">
        <mdui-navigation-bar value="{{ to.path }}" alignment="center" ref="NaviBar">
            <mdui-navigation-bar-item icon="restart_alt--outlined" value="start" @click="OpenStart"
                >Start</mdui-navigation-bar-item
            >
            <mdui-navigation-bar-item icon="device_unknown--outlined" value="me" @click="OpenMe"
                >介绍</mdui-navigation-bar-item
            >
            <mdui-navigation-bar-item icon="link--outlined" value="links" @click="OpenLinks"
                >链接</mdui-navigation-bar-item
            >
            <mdui-navigation-bar-item
                icon="face_retouching_natural--outlined"
                value="thanks"
                @click="OpenThanks"
                >感谢</mdui-navigation-bar-item
            >
        </mdui-navigation-bar>
    </div>
    <RouterView />
</template>
