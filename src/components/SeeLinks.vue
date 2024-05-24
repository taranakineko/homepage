<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
    <div class="miao-links">
        <mdui-card variant="elevated" class="link-left">
            <h2 style="margin-bottom: 10px">这是关于 千畔 的链接！🔗</h2>
            <div class="me-body">
                <h3>社交平台</h3>
                <div class="links-chip">
                    <mdui-chip href="https://firefish.nekoq.top/@taranakineko" target="_blank"
                        ><mdui-icon
                            slot="icon"
                            src="https://simpleicons.org/icons/firefish.svg"
                        ></mdui-icon
                        >FireFish</mdui-chip
                    >
                    <mdui-chip href="https://twitter.com/taranakineko" target="_blank"
                        ><mdui-icon
                            slot="icon"
                            src="https://simpleicons.org/icons/twitter.svg"
                        ></mdui-icon
                        >Twitter</mdui-chip
                    >
                    <mdui-chip href="https://t.me/taranaki_neko" target="_blank"
                        ><mdui-icon
                            slot="icon"
                            src="https://simpleicons.org/icons/telegram.svg"
                        ></mdui-icon
                        >Telegram</mdui-chip
                    >
                    <mdui-chip href="https://instagram.com/taranakineko" target="_blank"
                        ><mdui-icon
                            slot="icon"
                            src="https://simpleicons.org/icons/instagram.svg"
                        ></mdui-icon
                        >Instagram</mdui-chip
                    >
                    <mdui-chip
                        href="https://bsky.app/profile/taranakineko.bsky.social"
                        target="_blank"
                        ><mdui-icon
                            slot="icon"
                            src="https://simpleicons.org/icons/bluesky.svg"
                        ></mdui-icon
                        >BlueSky</mdui-chip
                    >
                </div>
                <h3>联系方式</h3>
                <div class="links-chip">
                    <mdui-chip v-on:click="KnowMail()"
                        ><mdui-icon slot="icon" name="mail--outlined"></mdui-icon>Email</mdui-chip
                    >
                    <mdui-chip href="https://matrix.to/#/@never7ko:matrix.org" target="_blank"
                        ><mdui-icon
                            slot="icon"
                            src="https://simpleicons.org/icons/matrix.svg"
                        ></mdui-icon
                        >Matrix</mdui-chip
                    >
                    <mdui-chip href="https://t.me/taraneko_bot" target="_blank"
                        ><mdui-icon
                            slot="icon"
                            src="https://simpleicons.org/icons/telegram.svg"
                        ></mdui-icon
                        >Telegram Bot</mdui-chip
                    >
                    <mdui-chip href="https://line.me/ti/p/5I4CjyDmEa" target="_blank"
                        ><mdui-icon
                            slot="icon"
                            src="https://simpleicons.org/icons/line.svg"
                        ></mdui-icon
                        >Line</mdui-chip
                    >
                    <p>
                        <a href="/TaranakiNeko_0xF94A19FF_public.asc" download
                            >My PGP: B087 30BC F94A 19FF</a
                        >
                    </p>
                </div>
                <p class="links-chip" style="text-align: center">
                    <b
                        >由于千畔手机常年开免打扰<br />如通过以上联系途径联系千畔超过三个小时未回复<br />自求多福吧（被打</b
                    >
                </p>
                <h3>On Github</h3>
                <div class="links-chip">
                    <mdui-chip href="https://github.com/taranakineko" target="_blank"
                        ><mdui-icon
                            slot="icon"
                            src="https://simpleicons.org/icons/github.svg"
                        ></mdui-icon
                        >Github</mdui-chip
                    >
                    <mdui-chip
                        href="https://github.com/users/taranakineko/projects/1"
                        target="_blank"
                        ><mdui-icon slot="icon"
                            ><svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                            >
                                <path
                                    d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM11.75 3a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-8.25.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0ZM8 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 3Z"
                                ></path></svg></mdui-icon
                        >Tara's project</mdui-chip
                    >
                    <mdui-chip href="https://github.com/taranakineko/homepage" target="_blank"
                        ><mdui-icon slot="icon"
                            ><svg
                                aria-hidden="true"
                                height="16"
                                viewBox="0 0 16 16"
                                version="1.1"
                                width="16"
                            >
                                <path
                                    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
                                ></path></svg></mdui-icon
                        >Homepage</mdui-chip
                    >
                </div>
                <h3>其他链接</h3>
                <div class="links-chip">
                    <mdui-chip href="https://bookmarks.nekoq.top/" target="_blank"
                        ><mdui-icon slot="icon" name="bookmark--outlined"></mdui-icon
                        >Bookmarks</mdui-chip
                    >
                    <mdui-chip href="https://neko.nekoq.top" target="_blank"
                        ><mdui-icon slot="icon" name="attach_money--outlined"></mdui-icon
                        >我很可爱请给我钱</mdui-chip
                    >
                    <p>使用率极低的（例如 Spotify ）暂不公开</p>
                </div>
                <h3>Blog</h3>
                <div class="links-chip">
                    <mdui-chip href="https://blog.nekoq.top" target="_blank"
                        ><mdui-icon
                            slot="icon"
                            src="https://simpleicons.org/icons/hexo.svg"
                        ></mdui-icon
                        >Blog</mdui-chip
                    >
                </div>
            </div>
        </mdui-card>
        <div class="link-right">
            <mdui-card variant="elevated" style="margin: 0 5px 0 5%; width: 95%; padding: 20px">
                <h2 style="margin-bottom: 10px">这是友链！🫂</h2>
                <div class="links-chip">
                    <a href="https://winsloweric.com/">
                        <div class="card">
                            <mdui-avatar
                                src="/images/friend/logo256t-Dqfv6BoD.png"
                                loading="lazy"
                            ></mdui-avatar>
                            <p>Winslow</p>
                        </div></a
                    >
                    <a href="https://shef.cc/">
                        <div class="card">
                            <mdui-avatar
                                src="https://shef.cc/wp-content/uploads/SheepChef-%E5%90%89%E7%A5%A5%E7%89%A9-%E5%A4%B4%E5%83%8F2-e1683031048446.png.webp"
                            ></mdui-avatar>
                            <p>SheepChef</p>
                        </div></a
                    ><a href="https://moe23333.vercel.app/">
                        <div class="card">
                            <mdui-avatar
                                src="https://moe23333.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_trans.1f5053b1.png&w=1920&q=75"
                            ></mdui-avatar>
                            <p>Moe23333</p>
                        </div></a
                    ><a href="https://sunyz.net/">
                        <div class="card">
                            <mdui-avatar
                                src="https://wsrv.nl/?url=https://gravatar.com/avatar/f00abd61daa5520cd384fe0d1136d3b40df021ac87089061fe99b4a3f74dc9a2&output=webp"
                            ></mdui-avatar>
                            <p>Sunyz</p>
                        </div></a
                    ><a href="https://i.lemonkoi.one/">
                        <div class="card">
                            <mdui-avatar
                                src="https://gravatar.loli.net/avatar/6fd22617894ee4de431dc28927bcd1bb?s=200"
                            ></mdui-avatar>
                            <p>MoeMagicMango</p>
                        </div></a
                    ><a href="https://souiken.moe/">
                        <div class="card">
                            <mdui-avatar
                                src="https://wsrv.nl/?url=https://souiken.moe/img/avatar.webp&w=200&h=200&output=webp"
                            ></mdui-avatar>
                            <p>Souiken</p>
                        </div></a
                    ><a href="https://blog.nekoq.top/links">
                        <div class="card">
                            <mdui-avatar icon="add_link--outlined"></mdui-avatar>
                            <p>Motto motto...</p>
                            <!-- https://www.youtube.com/watch?v=7uiKC1P7__U -->
                        </div></a
                    >
                </div>
            </mdui-card>
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
    </div>
</template>

<script setup lang="ts">
import { snackbar } from 'mdui/functions/snackbar.js'
const mail = 'hi@nekoq.top'
function KnowMail() {
    snackbar({
        message: mail,
        action: '复制~',
        onActionClick: () => navigator.clipboard.writeText(mail)
    })
}
</script>

<style lang="sass">
mdui-card
    transition: 0.5s
    &:hover
        box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25)
    &::before
        box-shadow: none
    &::after
        box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25)

mdui-chip
    margin: 5px

.links-chip
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap

    a:hover
        text-decoration: none

    .card
        width: 135px
        height: 135px
        margin: 5px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        overflow: hidden
        position: relative
        cursor: pointer
        transition: background 0.3s ease // 添加背景颜色过渡效果
        border-radius: var(--mdui-shape-corner-medium)

        &:hover
            background: rgba(0, 0, 0, 0.05) // 鼠标悬停时的背景颜色


        p
            text-align: center
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            max-width: 100%
</style>
