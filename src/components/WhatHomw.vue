<template>
    <div class="miao" style="max-width: 100vw">
        <mdui-tabs value="index">
            <mdui-tab value="index" icon="restart_alt--outlined">Home</mdui-tab>
            <mdui-tab value="know" icon="face_retouching_natural--outlined">Know</mdui-tab>
            <mdui-tab value="link" icon="links--outlined">Links</mdui-tab>
            <mdui-tab value="thank" icon="info--outlined">Others</mdui-tab>
            <mdui-tab value="picture" icon="image--outlined" @click="goPicture">Picture</mdui-tab>

            <mdui-tab-panel slot="panel" value="index"><TheIndex /></mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="know"><KnowMe /></mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="link"><SeeLinks /></mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="thank"><ThankYou /></mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="picture"></mdui-tab-panel>
        </mdui-tabs>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
import TheIndex from './TheIndex.vue'
import KnowMe from './KnowMe.vue'
import SeeLinks from './SeeLinks.vue'
import ThankYou from './ThankYou.vue'
function goPicture() {
    router.push('/pictures')
}
</script>
