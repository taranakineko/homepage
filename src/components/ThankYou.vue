<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="menu"></mdui-button-icon>
        <mdui-top-app-bar-title>Thank You</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao-thanks mdui-prose">
        <div class="thanks-body">
            <mdui-card
                variant="elevated"
                class="hover"
                style="margin: 20px 5px 0px 5%; width: 95%; padding: 20px"
            >
                <h2>想看看网站统计？</h2>
                <div class="me-body">
                    <p>这边请~ 😉</p>
                    <mdui-list>
                        <mdui-list-item
                            href="https://umami.nekoq.eu.org/share/4lQOLAOmfO6CW9z6/主页"
                            description="有什么呢？"
                            end-icon="open_in_new"
                        >
                            主页
                        </mdui-list-item>
                        <mdui-list-item
                            href="https://umami.nekoq.eu.org/share/gjaybUZ87J6pDCaJ/Blog"
                            description="这里不能看！"
                            end-icon="open_in_new"
                        >
                            博客
                        </mdui-list-item>
                    </mdui-list>
                </div>
            </mdui-card>
        </div>
        <div class="thanks-body">
            <mdui-card
                variant="elevated"
                class="hover"
                style="margin: 20px 5px 0px 5%; width: 95%; padding: 20px"
            >
                <h2>其他内容？</h2>
                <div class="me-body">
                    <p>等...！新的内容目前还在施工！</p>
                    <p>但是你可以等千畔慢慢的写...</p>
                    <p>绝对不会咕咕咕的！（确信）</p>
                    <p>同时也要感谢陪伴在千畔身边的你</p>
                    <p>祝你好运！😘</p>
                </div>
            </mdui-card>
        </div>
        <div class="thanks-body">
            <mdui-card
                variant="elevated"
                class="hover"
                style="margin: 20px 5px 0px 5%; width: 95%; padding: 20px"
            >
                <h2>Thanks 感谢</h2>
                <div class="me-body">
                    <mdui-list>
                        <mdui-list-item
                            headline="@Moe23333"
                            description="Inter 字体设置参考 + 网站细节修改建议"
                        ></mdui-list-item>
                        <mdui-list-item
                            headline="@SkyNext"
                            description="网站细节修改建议"
                        ></mdui-list-item>
                        <mdui-list-item
                            headline="@Elihuso"
                            description="重构部分代码"
                        ></mdui-list-item>
                        <mdui-list-item headline="mdui" description="前端组件库"></mdui-list-item>
                        <mdui-list-item
                            headline="And other more..."
                            description="千畔先吃个早餐，稍等再继续补充"
                        ></mdui-list-item>
                    </mdui-list>
                </div>
            </mdui-card>
        </div>
    </div>
    <div class="fab-footer">
        <mdui-fab
            class="openSnackbar"
            ref="OpenTheSnackbar"
            icon="auto_awesome"
            data-umami-event="ThankYou Snackbar"
        ></mdui-fab>
    </div>
    <mdui-snackbar
        close-on-outside-click
        class="snackbar"
        ref="TheSnackbar"
        id="say"
    ></mdui-snackbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TXT from '../config/txt.json'
const OpenTheSnackbar = ref<any>(null)
const TheSnackbar = ref<any>(null)
onMounted(() => {
    var txt = TXT as String[]
    OpenTheSnackbar.value.addEventListener('click', () => {
        TheSnackbar.value.open = true
        const rnd = Math.floor(Math.random() * txt.length)
        TheSnackbar.value.innerHTML = txt[rnd]
    })
})
</script>
