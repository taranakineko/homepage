<template>
    <div class="miao">
        <mdui-card
            variant="elevated"
            class="hover"
            style="margin: 20px 5px 0px 5px; width: 98%; padding: 20px"
        >
            <h2>TaranakiNeko 是谁？🤔</h2>
            <div class="me-body">
                <p>TaranakiNeko 就是 TaranakiNeko 啊，没问题啊！非常的合理不是嘛</p>
                <p>
                    虽说名字里带有 Neko ，但无论是习惯什么的似乎都不像貓貓<del
                        >，還不可愛（思索）</del
                    >
                </p>
                <p>另外，你可以称呼 ta 为 「千畔」 <del>，或者是 「千帆」</del></p>
                <p>但似乎被叫「千畔」更多一些</p>
            </div>
        </mdui-card>
        <mdui-card
            variant="elevated"
            class="hover"
            style="margin: 20px 5px 0px 5px; width: 98%; padding: 20px"
        >
            <h2>名字从何而来？😮</h2>
            <div class="me-body">
                <p>
                    TaranakiNeko 这个名字其实是别人<!-- 谢谢 Moe23333 起的名 -->帮忙起的（当时只有 Taranaki）
                </p>
                <p>随后 Tara 自己擅自主张的加上了 Neko，于是就有了现在这个名字</p>
                <p>至于「千畔」这个名字嘛... 出自于「沉舟侧畔千帆过，病树前头万木春」这首诗词，很熟悉不是吗</p>
            </div>
        </mdui-card>
        <mdui-card
            variant="elevated"
            class="hover"
            style="margin: 20px 5px 0px 5px; width: 98%; padding: 20px"
        >
            <h2>那其他的呢？👀</h2>
            <div class="me-body">
                <p>千畔会随机使用拼音或者注音，虽说大部分时候都是使用拼音吧</p>
                <p>
                    <del
                        >umm... 剩下的懒得写了，屏幕前的你或许可以访问
                        <a href="https://nekoq.eu.org/about">关于 (Blog)</a> 页</del
                    >
                </p>
                <p><del>至于博客那边...会写的会写的不要催啦 😭（）</del></p>
                <p>或者切换选项卡至 “链接” ，里面有千畔的 Github 主页，那里也有一些其他信息</p>
                <p><del>但显然千畔似乎隐藏了什么 ==</del></p>
                <p>或许以后还会更新一些内容吧…就看千畔有没有动力去做了</p>
            </div>
        </mdui-card>
    </div>
    <div class="fab-footer">
        <mdui-fab ref="OpenDialog" icon="info"></mdui-fab>
    </div>
    <mdui-dialog class="hover" ref="TheDialog">
        <div class="dialog-footer">
            <p>Copyright © 2022 - Now taranakiNeko</p>
            <p>
                Made with
                <a href="https://github.com/zdhxiong/mdui/" target="_blank">zdhxiong/mdui</a> |
                <a href="https://github.com/taranakineko/homepage/" target="_blank">Github Repo</a>
            </p>
            <mdui-button ref="CloseDialog">关闭</mdui-button>
        </div>
    </mdui-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const TheDialog = ref<any>(null)
const OpenDialog = ref<any>(null)
const CloseDialog = ref<any>(null)
onMounted(() => {
    OpenDialog.value.addEventListener('click', () => (TheDialog.value.open = true))
    CloseDialog.value.addEventListener('click', () => (TheDialog.value.open = false))
})
</script>
