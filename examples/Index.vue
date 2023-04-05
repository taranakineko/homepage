<template>
<div class="miao">
    <div class="hi" @click="showTaraSay">
        <img class="avatar" height="96" src="https://fastly.jsdelivr.net/gh/taranakineko/homepage/images/taranaki.webp" alt="头像" />
        <h1>Taranakineko</h1>
    </div>
    <div style="display: flex; margin: 20px 20px 0 20px;">
    <bc-tab style="margin-top: 20px; flex: 1;">
        <div name="首页">
            <ss-card style="margin: 20px 5px 0px 5px; text-align: center;">
                <span>A cat lying on the keyboard.</span>
            </ss-card>
        </div>
        <div name="介绍?">
            <ss-card title="Taranakineko 是谁？" icon style="margin: 20px 5px 0px 5px;">
                <p>Taranakineko 就是 Taranakineko 啊，没问题啊！非常的合理不是嘛</p>
                <p>另外，你也可以叫 ta “千畔” 或者是 “千帆”（很好听的名字不是？</p>
            </ss-card>
            <ss-card title="那其他的呢？" icon style="margin: 20px 5px 0px 5px;">
                <p><del>因为懒得写，所以屏幕前的你可以访问 <a href="https://nekoq.eu.org/about">关于(BLog)</a> 或者访问下面的 Github 主页来获得更多信息</del></p>
            </ss-card>
        </div>
        <div name="其他">
            <ss-card title="这是链接！" icon style="margin: 20px 5px 0px 5px;">
                <div class="link">
                    <a href="https://nekoq.eu.org">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Blog</title>
                            <path d="M12.02 0L1.596 6.02l-.02 12L11.978 24l10.426-6.02.02-12zm4.828 17.14l-.96.558-.969-.574V12.99H9.081v4.15l-.96.558-.969-.574V6.854l.964-.552.965.563v4.145h5.838V6.86l.965-.552.964.563z"/>
                        </svg>
                        <span>&nbsp;</span>
                    </a>
                    <a rel="me" href="https://alive.bar/@TaranakiNeko">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Mastodon</title>
                            <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/>
                        </svg>
                        <span>&nbsp;</span>
                    </a>
                    <a href="https://twitter.com/taranakineko">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Twitter</title>
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        <span>&nbsp;</span>
                    </a>
                    <a href="https://t.me/taranaki_neko">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Telegram</title>
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        <span>&nbsp;</span>
                    </a>
                    <a href="https://github.com/taranakineko">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                    </a>
                </div>
            </ss-card>
            <ss-card title="这又是链接！" icon style="text-align: center; margin: 20px 5px 0px 5px;">
                <span><a href="https://winsloweric.com/">Pivot of Winslow</a> | <a href="https://shef.cc/">SheepChef Blog</a></span>
            </ss-card>
        </div>
    </bc-tab>
 </div>
<div class="footer">
    <ss-card style="margin: 15px 15px 0px 15px; padding-bottom: 10px; padding-top: 10px;">
            <p>Copyright © 2022 - Now Taranakineko</p>
            <p>Made with <a href="https://stapxs.github.io/Border-Card-UI/docs/" target="_blank">Border Card UI</a> | <a href="https://github.com/taranakineko/homepage/" target="_blank">Github Repo</a></p>
    </ss-card>
</div>
</div>

    <bc-toast :time="5000"></bc-toast>
</template>

<script lang="ts">
import { MenuStatue } from 'packages/dist/types'
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    name: 'App',
    data () {
        return {
            popBox: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-popbox'],
            toast: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-toast'],
            menu: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-menu'],
            menuStatue: {
                show: false,
                point: { x: 0, y: 0 }
            } as MenuStatue
        }
    },
    methods: {
        showMenu(event: Event, isMe = false) {
            const info = this.menu.set('demo-menu', event as MouseEvent)
            info.list = !isMe ? ['reply', 'copy'] : ['delete', 'copy']
            this.menuStatue = info
        },
        closeMenu(id: string) {
            this.menuStatue.show = false
            if(id) {
                this.toast.show({
                    icon: 'fa-solid fa-circle-info',
                    text: `${id} 被点击了。`,
                    autoClose: true
                })
            }
        },

        showToast() {
            const textList = [
                ['fa-circle-info', '这是一条吐司消息。'],
                ['fa-bread-slice', '香浓的吐司！'],
                ['fa-gear', '这个吐司看起来有好好初始化哦。'],
                ['fa-ghost', '¯\\_(ツ)_/¯'],
                ['fa-utensils', '来个吐司？'],
                ['fa-face-grin-stars', '吐司超好吃 ——'],
                ['fa-circle-info', '这是个没有感情的吐司。'],
                ['fa-heart', 'Also try LayUI!'],
                ['fa-bread-slice', 'Toast'],
                ['fa-circle-info', '不想说话。'],
                ['fa-circle-info', 'SS!'],
                ['fa-face-grin-squint-tears', '隔壁小孩都馋哭了。'],
                ['fa-fire', '正在烤吐司。'],
                ['fa-wrench', '超文本烤箱控制协议'],
                ['fa-ban', '419 I\'m a Microwave Oven.']
            ]
            // 随机显示
            const index = Math.floor(Math.random() * textList.length)
            const toastInfo = {
                icon: 'fa-solid ' + textList[index][0],
                text: textList[index][1],
                // 随机获取一个 true 或 false
                autoClose: Math.random() > 0.5
            }
            this.toast.show(toastInfo)
        },
        showTaraSay() {
            const textList = [
                ['fa-circle-info', '还在施工中哦'],
            ]
            // 随机显示
            const index = Math.floor(Math.random() * textList.length)
            const toastInfo = {
                icon: 'fa-solid ' + textList[index][0],
                text: textList[index][1],
                // 随机获取一个 true 或 false
                autoClose: Math.random() > 0.5
            }
            this.toast.show(toastInfo)
        },
        clearToast() {
            this.toast.clear()
        },

        addPop() {
            const textList = [
                '这是一条弹窗消息。',
                '👋，你好啊！',
                '这是一条弹窗消息，这是一条弹窗消息，这是一条弹窗消息。',
                '你好世界！',
                '一个弱小可怜又无助的消息。'
            ]
            // 随机获取三条显示
            for (let i = 0; i < 4; i++) {
                const index = Math.floor(Math.random() * textList.length)
                const popInfo = {
                    title: '你好啊！',
                    icon: 'fa-solid fa-smile',
                    html: `<p>${textList[index]}</p>`,
                    button: [
                        {
                            text: '关闭',
                            master: true,
                            fun: () => this.popBox.remove()
                        }
                    ]
                }
                this.popBox.add(popInfo)
            }
        },
        removeCard() {
            const card = document.getElementById('delCard')
            if (card) {
                card.style.display = 'none'
            }
        }
    }
});
</script>

<style scoped>
h2 {
    opacity: 0;
    height: 0;
    margin: 0;
}
code {
    font-family: 'Fira Code', monospace;
    background: var(--color-main);
    color: var(--color-font-r);
    border-radius: 4px;
    padding: 1px 10px;
    font-size: 0.8rem;
    white-space: pre;
}
svg{
    width: 40px;
    height: 40px;
}
span{
    text-align: center;
}

.code {
    margin: 30px -30px -20px -30px;
    border-radius: 0 0 7px 7px;
    padding: 10px 20px;
    overflow-x: scroll;
}
.code > code {
    color: var(--color-font) !important;
    background: unset !important;
}
.code-free {
    border-radius: 7px;
    margin: 10px 5px;
    padding: 20px;
}

.color-view {
    margin: 0 -20px;
    width: 200px;
}
.color-view > div {
    border-radius: 7px;
    padding: 5px;
    margin: 5px;
}

.view-space {
    margin: 0 -30px -30px -30px;
    background: var(--color-bg);
    padding: 20px;
}

.just-img {
    border-radius: 7px;
    margin: 10px;
    height: auto;
    width: 100%;
}
.just-img-a {
    color: var(--color-font-2);
    font-size: 0.8rem;
}
.just-img-b {
    color: var(--color-font);
}

.menu-view-bg {
    background-image: url(https://lib.stapxs.cn/download/pic/desktopImg/75558054_p0.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.menu-view img.hd {
    background: var(--color-card-2);
    border-radius: 100%;
    margin-right: 10px;
    margin-top: 10px;
    height: 2.2rem;
    width: 2.2rem;
}
.menu-view > div {
    align-items: center;
    align-items: start;
    margin: 5px 0;
    display: flex;
}
.menu-view > div .space {
    flex: 1;
}
.menu-view-body {
    margin: -10px -20px !important;
}
.link{
    margin: 20px 20px 0 20px;
    text-align: center;
    letter-spacing: 5px;
}
.footer{
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
}
.friends-link{
    padding: 2px;
}
.miao{
/* 页边距 */
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1000px;
    min-width: 360px;
}
.hi{
    text-align: center;
    margin: 0 auto;
    margin: 60px 20px 0 20px;
}
.avatar{
    width: 6rem;
    border-radius: 50%;
    --main-size: ;
}
.anacard{
    text-align: center;
    box-sizing: border-box;
    font-size: 1.0rem;
    font-weight: 400;
}
</style>
