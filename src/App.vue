<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterView } from 'vue-router';
import { UseSetting } from '@/function/read'
import randomTheTXT from '@/function/snackbar'
const { OpenTheSnackbar, backToTop, showBackToTop } = randomTheTXT()
</script>

<template>
    <RouterView />
    <div class="fab-footer">
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
</template>
