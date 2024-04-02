<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import { UseSetting } from '@/function/read'
import TheIndex from './components/TheIndex.vue';
import KnowMe from './components/KnowMe.vue';
import SeeLinks from './components/SeeLinks.vue';
import ThankYou from './components/ThankYou.vue';
import Pictures from './components/ShowPicture.vue';
const route = useRoute();
const shouldShowPictures = computed(() => route.path === '/pictures');
</script>

<template>
    <Pictures v-if="shouldShowPictures"/>
    <div v-else class="miao" style="max-width: 100vw">
        <mdui-tabs value="index">
        <mdui-tab value="index">Tab 1</mdui-tab>
        <mdui-tab value="know">Tab 2</mdui-tab>
        <mdui-tab value="link">Tab 3</mdui-tab>
        <mdui-tab value="thank">Tab 3</mdui-tab>

        <mdui-tab-panel slot="panel" value="index"><TheIndex /></mdui-tab-panel>
        <mdui-tab-panel slot="panel" value="know"><KnowMe /></mdui-tab-panel>
        <mdui-tab-panel slot="panel" value="link"><SeeLinks /></mdui-tab-panel>
        <mdui-tab-panel slot="panel" value="thank"><ThankYou /></mdui-tab-panel>
    </mdui-tabs>
    </div>
</template>
