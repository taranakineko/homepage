<template>
    <div class="miao">
        <div class="hi" @click="showTaraSay">
            <img class="avatar" height="96" src="https://fastly.jsdelivr.net/gh/taranakineko/homepage/images/taranaki.webp" alt="头像" />
            <h1>TaranakiNeko</h1>
        </div>
        <div style="display: flex; margin: 20px 20px 0 20px;">
        <bc-tab style="margin-top: 20px; flex: 1; min-width: 0; overflow: auto;">
            <div name="Start">
                <ss-card style="margin: 20px 5px 0px 5px; text-align: center;">
                    <span>A 🐱cat lying on the ⌨️keyboard.</span>
                </ss-card>
                <ss-card style="margin: 20px 5px 0px 5px; text-align: center; font-style:italic; line-height: 200%;">
                    <span>
                        🚧 Somethings are not finished yet, please wait for me to finish...!
                        <br>
                        有些事情还未结束哦...
                    </span>
                </ss-card>
            </div>
            <div name="介绍">
                <ss-card title="TaranakiNeko 是谁？🤔" icon style="margin: 20px 5px 0px 5px;">
                    <p>TaranakiNeko 就是 TaranakiNeko 啊，没问题啊！非常的合理不是嘛</p>
                    <p>虽说名字里带有 Neko ，但无论是习惯什么的似乎都不像貓貓，<del>還不可愛（思索）</del></p>
                    <p>另外，你可以称呼 ta 为 「千畔」 或者是 「千帆」</p>
                    <p>但似乎被叫「千畔」更多一些</p>
                </ss-card>
                <ss-card title="名字从何而来？😮" icon style="margin: 20px 5px 0px 5px;">
                    <p>TaranakiNeko 这个名字其实是别人<!-- 在此感谢 Moe23333 起的名 -->起的（当时只有 Taranaki）</p>
                    <p>随后 Tara 自己擅自主张的加上了 Neko，于是就有了现在这个名字</p>
                    <p>至于 「千畔」嘛... 「沉舟侧畔千帆过，病树前头万木春」</p>
                </ss-card>
                <ss-card title="那其他的呢？👀" icon style="margin: 20px 5px 0px 5px;">
                    <p>随机使用拼音或者注音，虽说大部分时候都是使用拼音吧</p>
                    <p><del>umm... 剩下的懒得写了，所以屏幕前的你可以访问 <a href="https://nekoq.eu.org/about">关于 (Blog)</a> 页</del></p>
                    <p><del>至于博客那边...会更新的，会更新的 😭</del></p>
                    <p>或者切换上面的选项卡至 “其他” ，里面有千畔的 Github 主页，那里也有更多信息</p>
                </ss-card>
            </div>
            <div name="链接">
                <ss-card title="这是关于 千畔 的链接！🔗" icon style="margin: 20px 5px 0px 5px;">
                    <div class="link">
                        <a href="https://nekoq.eu.org">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Blog</title>
                                <path d="M12.02 0L1.596 6.02l-.02 12L11.978 24l10.426-6.02.02-12zm4.828 17.14l-.96.558-.969-.574V12.99H9.081v4.15l-.96.558-.969-.574V6.854l.964-.552.965.563v4.145h5.838V6.86l.965-.552.964.563z"/>
                            </svg>
                            <span>&nbsp;</span>
                        </a>
                        <a href="https://bookmarks.nekoq.cyou">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                                <title>BookMarks</title>
                                <path d="M400 0H176a64.11 64.11 0 00-62 48h228a74 74 0 0174 74v304.89l22 17.6a16 16 0 0019.34.5 16.41 16.41 0 006.66-13.42V64a64 64 0 00-64-64z"/>
                                <path d="M320 80H112a64 64 0 00-64 64v351.62A16.36 16.36 0 0054.6 509a16 16 0 0019.71-.71L216 388.92l141.69 119.32a16 16 0 0019.6.79 16.4 16.4 0 006.71-13.44V144a64 64 0 00-64-64z"/>
                            </svg>
                            <span>&nbsp;</span>
                        </a>
                        <a href="https://github.com/users/taranakineko/projects/1/views/1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                                <title>Project（字面意思</title>
                                <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-88 302a24 24 0 1124-24 24 24 0 01-24 24zm0-71a24 24 0 1124-24 24 24 0 01-24 24zm0-73a24 24 0 1124-24 24 24 0 01-24 24zm184 135H224a16 16 0 010-32h128a16 16 0 010 32zm0-71H224a16 16 0 010-32h128a16 16 0 010 32zm0-72H224a16 16 0 010-32h128a16 16 0 010 32z"/>
                            </svg>
                            <span>&nbsp;</span>
                        </a>
                    </div>
                    <div class="link" style="margin: 0px 20px 0 20px;">
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
                            <span>&nbsp;</span>
                        </a>
                        <a href="mailto:hi@nekoq.cyou">
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                                <title>Mail</title>
                                <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"/>
                            </svg>
                            <span>&nbsp;</span>
                        </a>
                        <a href="https://instagram.com/taranakineko">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Instagram</title>
                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                            </svg>
                        </a>
                    </div>
                    <p style="text-align: center;">虽说还有一些其他的链接，但这就得要靠自己寻找啦！</p>
                </ss-card>
                <ss-card title="这是友链！🫂" icon style="text-align: center; margin: 20px 5px 0px 5px; padding-bottom: 10px;">
                    <p><a href="https://moe23333.vercel.app/">Moe23333</a> | <a href="https://winsloweric.com/">Pivot of Winslow</a> | <a href="https://shef.cc/">SheepChef Blog</a></p>
                </ss-card>
            </div>
            <div name="鸣谢">
                <ss-card title="特别鸣谢？☺️（暂定标题啦" icon style="margin: 20px 5px 0px 5px;">
                    <p>等...！这一部分目前还在施工！</p>
                    <p>但是你可以到 <a href="https://github.com/taranakineko/homepage/blob/main/README.md">这里</a> 查看，稍后千畔将会把那边的内容 copy 一份到这里的</p>
                    <p>绝对不会咕咕咕的！千畔这样说道</p>
                    <p>同时也要感谢陪伴在千畔身边的你</p>
                    <p>祝你好运！😘</p>
                </ss-card>
            </div>
        </bc-tab>
     </div>
    <div class="footer">
        <ss-card style="margin: 15px 15px 0px 15px; padding-bottom: 10px; padding-top: 10px;">
                <p>Copyright © 2022 - Now Taranakineko</p>
                <p>Made with <a href="https://github.com/Stapxs/Border-Card-UI/" target="_blank">Border Card UI for Vue</a> | <a href="https://github.com/taranakineko/homepage/" target="_blank">Github Repo</a></p>
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
                } as MenuStatue,
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
            clearToast() {
                this.toast.clear()
            },
            showTaraSay() {
                const textList = [
                    ['fa-circle-info', '还在施工中哦'],
                    ['fa-triangle-exclamation', '不要大力拍打或滑动哟'],
                    ['fa-question', '当 0 或 1 都是可以的喵'],
                    ['fa-exclamation', '传来樱桃青轴般的段落感。 （（'],
                    ['fa-wand-magic-sparkles', '前面的区域，以后再来探索吧'],
                    ['fa-shield-cat', 'nya~'],
                    ['fa-heart', '守られることはもうきっとないけど'],
                    ['fa-music', '歌は、言語関係ないですからね。'],
                    ['fa-bug', '不是写出了 Bug 就是在写出 Bug 的路上'],
                    ['fa-heart', 'Hope...']
                ]
                // 随机显示
                const index = Math.floor(Math.random() * textList.length)
                const toastInfo = {
                    icon: 'fa-solid ' + textList[index][0],
                    text: textList[index][1],
                    // 随机获取一个 true 或 false
                    autoClose: true
                }
                this.toast.show(toastInfo)
            },
        }
    });
    console.log("%c> We shall meet in the place where there is no darkness.",  "font-size:12px; font-style:italic")
    console.log("%c感谢 Sanae & Moe23333 & U.M.R Powered 提供的一些句子",  "font-size:12px")
    console.log("最后更新时间：2023.08.08 22:54:45")
    </script>
    
    <style scoped>
    svg{
        width: 40px;
        height: 40px;
    }
    span{
        text-align: center;
    }
    del{
        color: var(--color-font-1);
    }
    
    .link{
        margin: 20px 20px 0 20px;
        text-align: center;
        letter-spacing: 9px;
        line-height: 40px;
    }
    .footer{
        text-align: center;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom: 10px;
    }
    .miao{
    /* 页边距 */
        margin-right: auto;
        margin-left: auto;
        max-width: 700px;
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
    </style>
