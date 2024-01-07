<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="menu--outlined" ref="zako"></mdui-button-icon>
        <mdui-top-app-bar-title>{{ $t('links') }}</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao-links mdui-prose">
        <mdui-card variant="elevated" class="link-left">
            <h2 style="margin-bottom: 10px">{{ $t('links_mylinks_h2') }}</h2>
            <div class="me-body">
                <mdui-list>
                    <mdui-list-item href="https://nekoq.eu.org" end-icon="open_in_new--outlined">
                        Blog
                    </mdui-list-item>
                    <mdui-list-item
                        href="https://alive.bar/@TaranakiNeko"
                        target="_blank"
                        description="@TaranakiNeko@alive.bar"
                        end-icon="open_in_new--outlined"
                    >
                        Mastodon
                    </mdui-list-item>
                    <mdui-list-item
                        href="https://twitter.com/taranakineko"
                        target="_blank"
                        description="@taranakineko"
                        end-icon="open_in_new--outlined"
                    >
                        Twitter
                    </mdui-list-item>
                    <mdui-list-item
                        href="https://t.me/taranaki_neko"
                        target="_blank"
                        description="Tara - 千畔 换乘站"
                        end-icon="open_in_new--outlined"
                    >
                        Telegram
                    </mdui-list-item>
                    <mdui-list-item
                        href="https://github.com/taranakineko"
                        target="_blank"
                        description="@taranakineko"
                        end-icon="open_in_new--outlined"
                    >
                        Github
                    </mdui-list-item>
                    <mdui-list-item
                        href="https://instagram.com/taranakineko"
                        target="_blank"
                        description="@taranakineko"
                        end-icon="open_in_new--outlined"
                    >
                        Instagram
                    </mdui-list-item>
                </mdui-list>
                <mdui-collapse>
                    <mdui-collapse-item>
                        <mdui-list-item
                            slot="header"
                            icon="view_list--outlined"
                            :description="$t('thanks_analytics_homepage_desc')"
                            >Others</mdui-list-item
                        >
                        <div style="margin-left: 2.5rem">
                            <mdui-list-item
                                href="https://bookmarks.nekoq.top/"
                                target="_blank"
                                :description="$t('links_mylinks_other_bookmark')"
                                icon="bookmark--outlined"
                                end-icon="open_in_new--outlined"
                            >
                                BookMarks
                            </mdui-list-item>
                            <mdui-list-item
                                href="https://github.com/users/taranakineko/projects/1/views/1"
                                target="_blank"
                                :description="$t('links_mylinks_other_project')"
                                icon="checklist--outlined"
                                end-icon="open_in_new--outlined"
                            >
                                Project
                            </mdui-list-item>
                        </div>
                    </mdui-collapse-item>
                </mdui-collapse>
            </div>
        </mdui-card>
        <mdui-card variant="elevated" class="link-right">
            <h2 style="margin-bottom: 10px">{{ $t('links_friendslinks_h2') }}</h2>
            <mdui-list>
                <mdui-list-item
                    href="https://moe23333.vercel.app/"
                    target="_blank"
                    end-icon="open_in_new--outlined"
                >
                    <mdui-avatar
                        slot="icon"
                        src="https://moe23333.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_trans.1f5053b1.png&w=1920&q=75"
                    ></mdui-avatar>
                    Moe23333
                </mdui-list-item>
                <mdui-list-item
                    href="https://winsloweric.com/"
                    target="_blank"
                    end-icon="open_in_new--outlined"
                >
                    <mdui-avatar
                        slot="icon"
                        src="https://wsrv.nl/?url=https://winsloweric.com/assets/logo256t.4b80bfe0.png&w=200&h=200&output=webp"
                    ></mdui-avatar>
                    Pivot of Winslow
                </mdui-list-item>
                <mdui-list-item
                    href="https://shef.cc/"
                    target="_blank"
                    end-icon="open_in_new--outlined"
                    ><mdui-avatar
                        slot="icon"
                        src="https://shef.cc/wp-content/uploads/SheepChef-%E5%90%89%E7%A5%A5%E7%89%A9-%E5%A4%B4%E5%83%8F2-e1683031048446.png.webp"
                    ></mdui-avatar>
                    SheepChef
                </mdui-list-item>
                <mdui-list-item
                    href="https://sunyz.net/"
                    target="_blank"
                    end-icon="open_in_new--outlined"
                    ><mdui-avatar
                        slot="icon"
                        src="https://cdn.sunyz.net/avatar@128x128.webp"
                    ></mdui-avatar>
                    Sunyz
                </mdui-list-item>
                <mdui-list-item
                    href="https://blog.nekoq.top/links"
                    target="_blank"
                    description="will open new website"
                    end-icon="open_in_new--outlined"
                >
                    Motto motto...
                    <!-- https://www.youtube.com/watch?v=7uiKC1P7__U -->
                </mdui-list-item>
            </mdui-list>
        </mdui-card>
    </div>
</template>

<script setup lang="ts">
import app from '@/main'
import useZakoCounter from '../function/zako'
const { zako, zakozako } = useZakoCounter()
if (localStorage.getItem('lanauage')) {
    app.config.globalProperties.$i18n.locale = localStorage.getItem('lanauage') as string
}
</script>

<style lang="scss">
.link-left {
    transition: 0.5s;
    &:hover {
        box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
    }
    &::before {
        box-shadow: none;
    }
    &::after {
        box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
    }
}

.link-right {
    transition: 0.5s;
    &:hover {
        box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
    }
    &::before {
        box-shadow: none;
    }
    &::after {
        box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
    }
}
</style>
