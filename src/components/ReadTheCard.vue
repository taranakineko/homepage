<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon
            icon="menu--outlined"
            ref="zako"
            data-umami-event="zako~"
        ></mdui-button-icon>
        <mdui-top-app-bar-title>读取卡片,探索更多</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao">
        <mdui-card
            class="pane"
            variant="elevated"
            style="margin: 20px 5px 0px 5%; padding: 20px; height: auto;"
        >
            <div v-if="s === 'test'">
                <p>这是用来测试根据 url 查询符显示页面的测试句</p>
            </div>
            <div v-if="s === 'b35396c'">
                <p>☆(･ω･ﾉﾉﾞ☆(･ω･ﾉﾉﾞ☆</p>
            </div>
            <div v-else>
                <p>并没有匹配的内容哦，请检查卡片写入的 url 是否正确</p>
                <p>可能的原因有：</p>
                <ul>
                    <li>千畔未能及时更新</li>
                    <li>误打误撞来到这里了</li>
                    <li>千畔把这页吃掉了</li>
                    <li>其他连千畔都不知道为什么的原因</li>
                </ul>
                <p>接下来，你可以尝试访问这网站的其他地方，似乎按钮就在...右边？或者是下面！</p>
            </div>
        </mdui-card>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import useZakoCounter from '../function/zako'
const { zako, zakozako, clearLocalStorage } = useZakoCounter()
const route = useRoute();

const s = computed(() => route.query.s);
</script>