<template>
    <div class="KnowNew">
        <div class="miao">
            <mdui-card
                variant="elevated"
                class="hover"
                style="margin: 20px 5px 0px 5%; width: 95%; padding: 20px"
            >
                <h2>注意注意！⚠️</h2>
                <div class="me-body">
                    <p>关于自我介绍这部分正在重写，敬请期待（）</p>
                    <p>如果你想查看之前的介绍的话...那就点击下面的这个按钮吧！</p>
                    <mdui-button @click="showKnow">查看之前的介绍</mdui-button>
                    <p><i>刷新即可重新显示哦~</i></p>
                </div>
            </mdui-card>
        </div>
    </div>
    <div class="KnowOld" style="display: none;">
        <KnowMe />
    </div>
</template>

<script setup lang="ts">
import { $ } from 'mdui/jq.js';
import KnowMe from './KnowMe.vue'
function showKnow() {
    $('.KnowOld').removeAttr('style')
    $('.KnowNew').attr({
        style: 'display: none;'
    })
}
</script>