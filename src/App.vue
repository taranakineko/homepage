<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router';
import { UseSetting } from '@/function/read'
import randomTheTXT from '@/function/snackbar'
import TheIndex from './components/TheIndex.vue';
import KnowMe from './components/KnowMe.vue';
import SeeLinks from './components/SeeLinks.vue';
import ThankYou from './components/ThankYou.vue';
import Pictures from './components/ShowPicture.vue';
const { OpenTheSnackbar } = randomTheTXT()
</script>

<template>
    <RouterView />
    <div class="fab-footer">
        <mdui-fab
            class="openSnackbar"
            ref="OpenTheSnackbar"
            icon="auto_awesome--outlined"
            data-umami-event="TheIndex Snackbar"
        ></mdui-fab>
    </div>
</template>
