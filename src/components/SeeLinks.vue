<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon
            icon="menu--outlined"
            ref="zako"
            data-umami-event="zako~"
        ></mdui-button-icon>
        <mdui-top-app-bar-title>See Links</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao-links">
        <mdui-card variant="elevated" class="link-left">
            <h2 style="margin-bottom: 10px">这是关于 千畔 的链接！🔗</h2>
            <div class="me-body">
                <h3>社交平台</h3>
                <div class="links-chip">
                    <mdui-chip href="https://alive.bar/@TaranakiNeko" target="_blank"
                        ><mdui-icon slot="icon"
                            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Mastodon</title>
                                <path
                                    d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"
                                /></svg></mdui-icon
                        >Mastodon</mdui-chip
                    >
                    <mdui-chip href="https://twitter.com/taranakineko" target="_blank"
                        ><mdui-icon slot="icon"
                            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Twitter</title>
                                <path
                                    d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"
                                /></svg></mdui-icon
                        >Twitter</mdui-chip
                    >
                    <mdui-chip href="https://t.me/taranaki_neko" target="_blank"
                        ><mdui-icon slot="icon"
                            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Telegram</title>
                                <path
                                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                /></svg></mdui-icon
                        >Telegram</mdui-chip
                    >
                    <mdui-chip href="https://instagram.com/taranakineko" target="_blank"
                        ><mdui-icon slot="icon"
                            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Instagram</title>
                                <path
                                    d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                                /></svg></mdui-icon
                        >Instagram</mdui-chip
                    >
                    <mdui-chip
                        href="https://bsky.app/profile/taranakineko.bsky.social"
                        target="_blank"
                        ><mdui-icon slot="icon"
                            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Bluesky</title>
                                <path
                                    d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"
                                /></svg></mdui-icon
                        >BlueSky</mdui-chip
                    >
                </div>
                <h3>联系方式</h3>
                <div class="links-chip">
                    <mdui-chip v-on:click="KnowMail()"
                        ><mdui-icon slot="icon" name="mail--outlined"></mdui-icon>Email</mdui-chip
                    >
                    <mdui-chip href="https://matrix.to/#/@never7ko:matrix.org" target="_blank"
                        ><mdui-icon slot="icon"
                            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Matrix</title>
                                <path
                                    d="M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033c.309-.443.683-.784 1.117-1.024.433-.245.936-.365 1.5-.365.54 0 1.033.107 1.481.314.448.208.785.582 1.02 1.108.254-.374.6-.706 1.034-.992.434-.287.95-.43 1.546-.43.453 0 .872.056 1.26.167.388.11.716.286.993.53.276.245.489.559.646.951.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66 1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499 1.946 1.946 0 0 0-.231.696 5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688 1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19-.111 0-.259.024-.439.074-.18.051-.36.143-.53.282-.171.138-.319.337-.439.595-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"
                                /></svg></mdui-icon
                        >Matrix</mdui-chip
                    >
                    <mdui-chip href="https://t.me/taraneko_bot" target="_blank"
                        ><mdui-icon slot="icon"
                            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Telegram</title>
                                <path
                                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                /></svg></mdui-icon
                        >Telegram Bot</mdui-chip
                    >
                    <mdui-chip href="https://line.me/ti/p/5I4CjyDmEa" target="_blank"
                        ><mdui-icon slot="icon"
                            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>LINE</title>
                                <path
                                    d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"
                                /></svg></mdui-icon
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
                        ><mdui-icon slot="icon"
                            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub</title>
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                /></svg></mdui-icon
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
                        ><mdui-icon slot="icon"
                            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Hexo</title>
                                <path
                                    d="M12.02 0L1.596 6.02l-.02 12L11.978 24l10.426-6.02.02-12zm4.828 17.14l-.96.558-.969-.574V12.99H9.081v4.15l-.96.558-.969-.574V6.854l.964-.552.965.563v4.145h5.838V6.86l.965-.552.964.563z"
                                /></svg></mdui-icon
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
                                src="https://wsrv.nl/?url=https://winsloweric.com/assets/logo256t.4b80bfe0.png&w=200&h=200&output=webp"
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
import useZakoCounter from '../function/zako'
import { snackbar } from 'mdui/functions/snackbar.js'
const { zako, zakozako } = useZakoCounter()
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
