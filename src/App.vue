<template>
    <RouterView />
    <div class="fab-footer">
        <mdui-fab
            class="openSnackbar"
            ref="OpenTheSnackbar"
            @click="ShowSettings"
            icon="settings--outlined"
            data-umami-event="Setting"
        ></mdui-fab>
        <mdui-fab
            class="openSnackbar"
            ref="OpenTheSnackbar"
            icon="auto_awesome--outlined"
            data-umami-event="Snackbar"
        ></mdui-fab>
        <mdui-tooltip content="点这返回顶部┏ (゜ω゜)=👉" placement="left-end">
            <mdui-fab
                v-show="showBackToTop"
                class="openSnackbar"
                @click="backToTop"
                icon="airline_stops--outlined"
                data-umami-event="BackTop"
            ></mdui-fab>
        </mdui-tooltip>
    </div>
    <mdui-dialog
        ref="dialog"
        close-on-overlay-click
        close-on-esc
        icon="settings--outlined"
        headline="设置"
    >
        <SettingTheSite ref="settingRef" />
    </mdui-dialog>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import SettingTheSite from './components/SettingTheSite.vue'
import randomTheTXT from '@/function/snackbar'
const { OpenTheSnackbar, backToTop, showBackToTop } = randomTheTXT()
const dialog = ref()
const settingRef = ref()
function ShowSettings() {
    settingRef.value.readWebMode()
    dialog.value.open = true
}
</script>
