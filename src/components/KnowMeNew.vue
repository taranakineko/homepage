<template>
    <div class="KnowNew">
        <div class="miao">
            <mdui-card
                variant="elevated"
                class="hover waring"
                style="margin: 20px 5px 0px 5%; width: 95%; padding: 20px"
            >
                <h2>注意注意！⚠️</h2>
                <div class="me-body">
                    <p>关于自我介绍这部分正在重写</p>
                    <p>如果你想查看之前的介绍的话...那就点击下面的这个按钮吧！</p>
                    <mdui-button @click="showKnow">查看之前的介绍</mdui-button>&nbsp;<mdui-button @click="showKnowNew">查看新的介绍</mdui-button>
                    <p><i>刷新即可重新显示哦~</i></p>
                </div>
            </mdui-card>
        </div>
        <div class="miao-thanks NewNew">
            <div class="thanks-body">
                <mdui-card variant="elevated" class="hover me-with-img" style="margin: 0px 5px 20px 5%; width: 95%;">
                    <img src="/images/me/Snipaste_2024-04-26_00-40-12.png">
                    <div class="me-nr">
                        <div class="me-body">
                            <p>这里是 TaranakiNeko 的介绍</p>
                            <p><del>很显然这种介绍风格是模仿了某个认识的朋友的（</del></p>
                            <p>Taranaki，取自于新西兰的其中一个区名</p>
                            <p>虽说这是别人建议的，最初只是为了让搜出来的结果“石沉大海”</p>
                            <p>而 Neko 呢，则是因为最初的设定是只猫</p>
                            <p>所以最后组合起来，就是叫 TaranakiNeko 了</p>
                            <p>如果你觉得这个名字太长了，那你可以记下另外一个广为人知的名字：千畔</p>
                            <p>当然这些名字（或者叫昵称？）还有很多变体，这里就不细说啦</p>
                        </div>
                    </div>
                </mdui-card>
                <mdui-card variant="elevated" class="hover me-with-img" style="margin: 0px 5px 20px 5%; width: 95%;">
                    <img src="/images/me/Snipaste_2024-04-26_00-40-12.png">
                    <div class="me-nr">
                        <div class="me-body">
                            <p>要问千畔喜欢什么的话......似乎并没有特别喜欢什么东西吧</p>
                            <p>但要全说出来的话，似乎也挺多的（x</p>
                            <p></p>
                        </div>
                    </div>
                </mdui-card>
            </div>
            <div class="thanks-body">
                <mdui-card variant="elevated" class="hover me-with-img" style="margin: 0px 5px 20px 5%; width: 95%;">
                    <img src="/images/me/PXL_20240425_172920510.jpg">
                    <div class="me-nr" style="margin-top: 20px;">
                        <div class="me-body">
                            <mdui-tabs value="tab-1" placement="top" full-width>
                            <mdui-tab value="tab-1">设备</mdui-tab>
                            <mdui-tab value="tab-2">使用</mdui-tab>

                            <mdui-tab-panel class="chip" slot="panel" value="tab-1">
                                <mdui-tooltip content="Mobile Phone">
                                    <mdui-chip>
                                        Pixel 5
                                        <mdui-icon
                                            slot="icon"
                                            src="https://simpleicons.org/icons/google.svg"
                                        ></mdui-icon> </mdui-chip></mdui-tooltip
                                >&nbsp;
                                <mdui-tooltip content="Smart Watch">
                                    <mdui-chip>
                                        Samsung Galaxy Watch 4
                                        <mdui-icon
                                            slot="icon"
                                            src="https://simpleicons.org/icons/samsung.svg"
                                        ></mdui-icon> </mdui-chip></mdui-tooltip
                                >&nbsp;
                                <mdui-tooltip content="PC">
                                    <mdui-chip>
                                        RedmiBook Pro 14S
                                        <mdui-icon
                                            slot="icon"
                                            src="https://simpleicons.org/icons/xiaomi.svg"
                                        ></mdui-icon> </mdui-chip></mdui-tooltip
                                >&nbsp;
                            </mdui-tab-panel>
                            <mdui-tab-panel class="chip" slot="panel" value="tab-2">
                                <mdui-tooltip content="Windows Insider Beta Channel">
                                    <mdui-chip>
                                        Windows 11 Pro
                                        <mdui-icon
                                            slot="icon"
                                            src="https://simpleicons.org/icons/windows.svg"
                                        ></mdui-icon> </mdui-chip
                                ></mdui-tooltip>&nbsp;
                                <mdui-tooltip content="based Android 14">
                                    <mdui-chip>
                                        Pixel
                                        <mdui-icon
                                            slot="icon"
                                            src="https://simpleicons.org/icons/android.svg"
                                        ></mdui-icon> </mdui-chip></mdui-tooltip
                                >&nbsp;
                                <mdui-tooltip content="Firefox Nightly"
                                    ><mdui-chip>
                                        Browser
                                        <mdui-icon
                                            slot="icon"
                                            src="https://simpleicons.org/icons/firefox.svg"
                                        ></mdui-icon> </mdui-chip></mdui-tooltip
                                >&nbsp;
                                <mdui-chip>
                                    Code Edit
                                    <mdui-icon
                                        slot="icon"
                                        src="https://simpleicons.org/icons/visualstudiocode.svg"
                                    ></mdui-icon> </mdui-chip
                                >&nbsp;
                                <mdui-chip>
                                    Blog Framework
                                    <mdui-icon
                                        slot="icon"
                                        src="https://simpleicons.org/icons/hexo.svg"
                                    ></mdui-icon> </mdui-chip
                                >&nbsp;
                                <mdui-chip>
                                    Website Analysis
                                    <mdui-icon
                                        slot="icon"
                                        src="https://simpleicons.org/icons/umami.svg"
                                    ></mdui-icon> </mdui-chip
                                >&nbsp;
                            </mdui-tab-panel>
                        </mdui-tabs>
                        </div>
                    </div>
                </mdui-card>
                <mdui-card variant="elevated" class="hover me-with-img" style="margin: 0px 5px 20px 5%; width: 95%;">
                    <img src="/images/me/Snipaste_2024-04-26_00-40-12.png">
                    <div class="me-nr">
                        <div class="me-body">
                        </div>
                    </div>
                </mdui-card>
            </div>
            <div class="thanks-body">
                <mdui-card variant="elevated" class="hover me-with-img" style="margin: 0px 5px 20px 5%; width: 95%;">
                    <img src="/images/me/Snipaste_2024-04-26_00-40-12.png">
                    <div class="me-nr">
                        <div class="me-body">
                        </div>
                    </div>
                </mdui-card>
                <mdui-card variant="elevated" class="hover me-with-img" style="margin: 0px 5px 20px 5%; width: 95%;">
                    <img src="/images/me/Snipaste_2024-04-26_00-40-12.png">
                    <div class="me-nr">
                        <div class="me-body">
                        </div>
                    </div>
                </mdui-card>
            </div>
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
function showKnowNew() {
    $('.NewNew').removeAttr('style')
    $('.waring').attr({
        style: 'display: none;'
    })
}
</script>

<style lang="sass">
.thanks-body
    margin-right: 1%
.me-with-img
    display: flex
    // align-items: center
    flex-direction: column
    width: fit-content

    img
        max-width: 100%
        height: auto
        margin-bottom: 0px

    .me-nr
        padding: 20px
        padding-top: 0px

        h2
             padding-top: 20px
</style>

<!--
    感谢 Moe 起的名
-->