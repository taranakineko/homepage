<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon
            icon="menu--outlined"
            ref="zako"
            data-umami-event="zako~"
        ></mdui-button-icon>
        <mdui-top-app-bar-title>{{ $t('thanks') }}</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao-thanks mdui-prose">
        <div class="thanks-body">
            <mdui-card
                variant="elevated"
                class="hover"
                style="margin: 20px 5px 0px 5%; width: 95%; padding: 20px"
            >
                <h2>{{ $t('thanks_analytics_h2') }}</h2>
                <div class="me-body">
                    <p>{{ $t('thanks_analytics_p') }}</p>
                    <mdui-list>
                        <mdui-list-item
                            href="https://umami.nekoq.eu.org/share/4lQOLAOmfO6CW9z6/主页"
                            target="_blank"
                            end-icon="open_in_new--outlined"
                            :description="$t('thanks_analytics_homepage_desc')"
                        >
                            主页
                        </mdui-list-item>
                        <mdui-list-item
                            href="https://umami.nekoq.eu.org/share/gjaybUZ87J6pDCaJ/Blog"
                            target="_blank"
                            :description="$t('thanks_analytics_blog_desc')"
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
                <h2>{{ $t('thanks_othing_h2') }}</h2>
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
    <mdui-snackbar
        close-on-outside-click
        class="snackbar"
        ref="TheSnackbar"
        id="say"
    ></mdui-snackbar>
</template>

<script setup lang="ts">
import app from '@/main'
import { ref, onMounted } from 'vue'
import TXT from '../config/txt.json'
import useZakoCounter from '../function/zako'
const OpenTheSnackbar = ref<any>(null)
const TheSnackbar = ref<any>(null)
const { zako, zakozako } = useZakoCounter()
if (localStorage.getItem('lanauage')) {
    app.config.globalProperties.$i18n.locale = localStorage.getItem('lanauage') as string
}
onMounted(() => {
    var txt = TXT as String[]
    OpenTheSnackbar.value.addEventListener('click', () => {
        TheSnackbar.value.open = true
        const rnd = Math.floor(Math.random() * txt.length)
        TheSnackbar.value.innerHTML = txt[rnd]
    })
})
</script>
