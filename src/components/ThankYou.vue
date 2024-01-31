<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon
            icon="menu--outlined"
            ref="zako"
            data-umami-event="zako~"
        ></mdui-button-icon>
        <mdui-top-app-bar-title>Thanks You</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao-thanks">
        <div class="thanks-body">
            <mdui-card
                variant="elevated"
                class="hover"
                style="margin: 20px 5px 0px 5%; width: 95%; padding: 20px"
            >
                <h2>想看看网站统计？</h2>
                <div class="me-body">
                    <p>这边请~😉</p>
                    <mdui-list>
                        <mdui-list-item
                            href="https://umami.nekoq.eu.org/share/4lQOLAOmfO6CW9z6/主页"
                            target="_blank"
                            end-icon="open_in_new--outlined"
                            description="有什么呢"
                        >
                            主页
                        </mdui-list-item>
                        <mdui-list-item
                            href="https://umami.nekoq.eu.org/share/gjaybUZ87J6pDCaJ/Blog"
                            target="_blank"
                            description="这里不能看！"
                            end-icon="open_in_new--outlined"
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
                    <p>等...！新的内容目前还在施工，现有内容也在缓慢替换</p>
                    <p>但是你可以等千畔慢慢的写...</p>
                    <p>绝对不会咕咕咕的！（确信）</p>
                    <p>最后也要感谢陪伴在千畔身边的你</p>
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
                <h2>Thanks 感谢 / Use 使用</h2>
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
                        <mdui-list-item
                            headline="Inter"
                            href="rsms.me/inter"
                            target="_blank"
                            description="英文字体"
                            end-icon="open_in_new--outlined"
                        ></mdui-list-item>
                        <mdui-list-item
                            headline="mdui"
                            href="https://github.com/zdhxiong/mdui"
                            target="_blank"
                            description="前端组件库"
                            end-icon="open_in_new--outlined"
                        ></mdui-list-item>
                        <mdui-list-item
                            headline="Vue3"
                            href="https://cn.vuejs.org/"
                            target="_blank"
                            description="网站框架"
                            end-icon="open_in_new--outlined"
                        ></mdui-list-item>
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
            icon="auto_awesome--outlined"
            data-umami-event="ThankYou Snackbar"
        ></mdui-fab>
    </div>
</template>

<script setup lang="ts">
import useZakoCounter from '../function/zako'
import randomTheTXT from '@/function/snackbar'
const { OpenTheSnackbar } = randomTheTXT()
const { zako, zakozako } = useZakoCounter()
</script>
