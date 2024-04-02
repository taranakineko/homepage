<template>
    <div class="miao" style="max-width: 100vw">
        <mdui-tabs value="index">
        <mdui-tab value="index">Home</mdui-tab>
        <mdui-tab value="know">Know</mdui-tab>
        <mdui-tab value="link">Links</mdui-tab>
        <mdui-tab value="thank">Others</mdui-tab>

        <mdui-tab-panel slot="panel" value="index"><TheIndex /></mdui-tab-panel>
        <mdui-tab-panel slot="panel" value="know"><KnowMe /></mdui-tab-panel>
        <mdui-tab-panel slot="panel" value="link"><SeeLinks /></mdui-tab-panel>
        <mdui-tab-panel slot="panel" value="thank"><ThankYou /></mdui-tab-panel>
    </mdui-tabs>
    </div>
</template>

<script setup lang="ts">
import TheIndex from './TheIndex.vue';
import KnowMe from './KnowMe.vue';
import SeeLinks from './SeeLinks.vue';
import ThankYou from './ThankYou.vue';
</script>