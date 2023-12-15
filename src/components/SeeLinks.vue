<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="menu"></mdui-button-icon>
        <mdui-top-app-bar-title>See Links</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao-links mdui-prose">
        <mdui-card variant="elevated" class="link-left">
            <h2 style="margin-bottom: 10px">这是关于 千畔 的链接！🔗</h2>
            <div class="me-body">
                <mdui-list>
                    <mdui-list-item href="https://nekoq.eu.org" end-icon="open_in_new">
                        Blog
                    </mdui-list-item>
                    <mdui-list-item
                        href="https://alive.bar/@TaranakiNeko"
                        target="_blank"
                        description="@TaranakiNeko@alive.bar"
                        end-icon="open_in_new"
                    >
                        Mastodon
                    </mdui-list-item>
                    <mdui-list-item
                        href="https://twitter.com/taranakineko"
                        target="_blank"
                        description="@taranakineko"
                        end-icon="open_in_new"
                    >
                        Twitter
                    </mdui-list-item>
                    <mdui-list-item
                        href="https://t.me/taranaki_neko"
                        target="_blank"
                        description="Tara - 千畔 换乘站"
                        end-icon="open_in_new"
                    >
                        Telegram
                    </mdui-list-item>
                    <mdui-list-item
                        href="https://github.com/taranakineko"
                        target="_blank"
                        description="@taranakineko"
                        end-icon="open_in_new"
                    >
                        Github
                    </mdui-list-item>
                    <mdui-list-item
                        href="https://instagram.com/taranakineko"
                        target="_blank"
                        description="@taranakineko"
                        end-icon="open_in_new"
                    >
                        Instagram
                    </mdui-list-item>
                </mdui-list>
                <mdui-collapse>
                    <mdui-collapse-item>
                        <mdui-list-item slot="header" icon="view_list" description="有什么呢"
                            >Others</mdui-list-item
                        >
                        <div style="margin-left: 2.5rem">
                            <mdui-list-item
                                href="https://bookmarks.nekoq.top/"
                                target="_blank"
                                description="看看千畔都看了什么"
                                icon="bookmark"
                                end-icon="open_in_new"
                            >
                                BookMarks
                            </mdui-list-item>
                            <mdui-list-item
                                href="https://github.com/users/taranakineko/projects/1/views/1"
                                target="_blank"
                                description="填坑计划！"
                                icon="checklist"
                                end-icon="open_in_new"
                            >
                                Project
                            </mdui-list-item>
                        </div>
                    </mdui-collapse-item>
                </mdui-collapse>
            </div>
        </mdui-card>
        <mdui-card variant="elevated" class="link-right">
            <h2 style="margin-bottom: 10px">这是友链！🫂</h2>
            <mdui-list>
                <mdui-list-item
                    href="https://moe23333.vercel.app/"
                    target="_blank"
                    end-icon="open_in_new"
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
                    end-icon="open_in_new"
                >
                    <mdui-avatar
                        slot="icon"
                        src="https://winsloweric.com/assets/logo256t.4b80bfe0.png"
                    ></mdui-avatar>
                    Pivot of Winslow
                </mdui-list-item>
                <mdui-list-item href="https://shef.cc/" target="_blank" end-icon="open_in_new"
                    ><mdui-avatar slot="icon" src="https://shef.cc/logo.png"></mdui-avatar>
                    SheepChef
                </mdui-list-item>
                <mdui-list-item href="https://sunyz.net/" target="_blank" end-icon="open_in_new"
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
                    end-icon="open_in_new"
                >
                    Motto motto...
                    <!-- https://www.youtube.com/watch?v=7uiKC1P7__U -->
                </mdui-list-item>
            </mdui-list>
        </mdui-card>
    </div>
</template>

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
