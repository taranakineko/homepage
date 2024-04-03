<template>
    <div class="miao" style="max-width: 100vw">
        <mdui-tabs value="index">
            <mdui-tab value="index" icon="restart_alt--outlined">Home</mdui-tab>
            <mdui-tab value="know" icon="face_retouching_natural--outlined">Know</mdui-tab>
            <mdui-tab value="link" icon="links--outlined">Links</mdui-tab>
            <mdui-tab value="thank" icon="info--outlined">Others</mdui-tab>
            <mdui-tab value="picture" icon="image--outlined" @click="initPic">Picture</mdui-tab>

            <mdui-tab-panel slot="panel" value="index"><TheIndex /></mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="know"><KnowMe /></mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="link"><SeeLinks /></mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="thank"><ThankYou /></mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="picture"><Picture ref="pictureRef"/></mdui-tab-panel>
        </mdui-tabs>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TheIndex from './TheIndex.vue'
import KnowMe from './KnowMe.vue'
import SeeLinks from './SeeLinks.vue'
import ThankYou from './ThankYou.vue'
import Picture from './ShowPicture.vue'
// redo with ChatGPT 3.5
// 2024.04.03
const pictureRef = ref(null);
function initPic() {
    pictureRef.value.chuNew();
}
</script>
