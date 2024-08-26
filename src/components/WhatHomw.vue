<template>
    <div class="miao" style="max-width: 100vw">
        <mdui-tabs value="fluffyluo">
            <mdui-tab value="fluffyluo" icon="warning_amber--outlined"  data-umami-event="fluffyluo">
                Fluffyluo
            </mdui-tab>
            <mdui-tab value="index" icon="restart_alt--outlined" data-umami-event="Home tab"
                >Home</mdui-tab
            >
            <mdui-tab value="link" icon="links--outlined" data-umami-event="Links tab"
                >Links</mdui-tab
            >

            <mdui-tab-panel slot="panel" value="fluffyluo"><Fluffyluo /></mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="index"><TheIndex /></mdui-tab-panel>
            <mdui-tab-panel slot="panel" value="link"><SeeLinks /></mdui-tab-panel>
        </mdui-tabs>
    </div>
</template>

<script setup lang="ts">
import TheIndex from './TheIndex.vue'
import SeeLinks from './SeeLinks.vue'
import Fluffyluo from './Fluffyluo.vue';
</script>
