<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="menu--outlined" ref="zako"></mdui-button-icon>
        <mdui-top-app-bar-title>测试页，使用 ChatGPT 3.5 辅助搭建</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao-pic">
        <div class="pic-body">
            <mdui-card
                style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 20px;
                    padding: 20px;
                    text-align: center;
                "
                ><p>
                    本页仅供测试，不代表主页未来规划，敬请留意<br />建议使用 FireFox Nightly <br />
                    并在 Nightly 设置的 Nightly 实验中开启<br />「CSS：瀑布流（Masonry）布局」
                </p>
                <a href="https://caniuse.com/mdn-css_properties_grid-template-rows_masonry"
                    >点此查看支持的浏览器列表</a
                >
            </mdui-card>
            <img src="/images/Screenshot_20240105-143739.png" alt="Share a song: After Rain" />
            <img
                src="https://blog.nekoq.top/static/blog/2023/cover.webp"
                alt="广州天环，地下通道，BRT 付费区域"
            />
            <img src="https://blog.nekoq.top/static/blog/taiko-ch/cover.webp" alt="太鼓之达人" />
            <img src="https://blog.nekoq.top/static/blog/2023/shenzhen.webp" alt="深圳地铁" />
            <img
                src="https://blog.nekoq.top/static/blog/2023/foshanzhan.webp"
                alt="佛山火车站一角"
            />
            <img
                src="https://blog.nekoq.top/static/blog/2023/maimaidx-2022.webp"
                alt="要开始了哟~"
            />
            <img src="https://nekoq.eu.org/static/images/F4S2ZexbQAAJP5I.jpg" alt="VSCode 背景" />
            <img src="https://blog.nekoq.top/static/blog/oneplus-8t/cover.webp" alt="一张桌子" />
            <img
                src="https://blog.nekoq.top/static/blog/line1/chexiang.webp"
                alt="广州地铁一号线"
            />
            <img src="https://blog.nekoq.top/static/blog/2023/wuhan.webp" alt="武汉" />
            <img src="https://blog.nekoq.top/static/blog/2023/dongguan.webp" alt="东莞" />
            <img src="https://blog.nekoq.top/static/blog/2023/my-home.webp" alt="抽象的房子" />
            <img src="https://blog.nekoq.top/static/images/twittercard.png" alt="Twitter Card" />
            <img
                src="https://blog.nekoq.top/static/blog/2023/gotoGZN.webp"
                alt="佛山地铁二号线站台一角"
            />
            <img src="https://blog.nekoq.top/static/blog/2023/xiamen.webp" alt="厦门" />
            <img src="https://blog.nekoq.top/static/blog/2023/reganmian.webp" alt="热干面" />
            <img
                src="https://blog.nekoq.top/static/blog/2023/maimaidx-2023.webp"
                alt="舞萌 DX 2023 运行首日网络崩溃"
            />
            <img src="https://blog.nekoq.top/static/blog/2023/JustBeFriend.webp" alt="." />
            <mdui-card
                style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 20px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                "
                ><p>
                    All your steps aor in a maze <br />
                    All I do is follow through and pray <br />...<br />
                    To find the answer to this quest <br />
                    I'll journey with you till the end<br />...<br />Oramus iter per astra <br />
                    Lux tua nos dirigot
                </p></mdui-card
            >
        </div>
    </div>
</template>

<script>
import useZakoCounter from '../function/zako'
import ScrollReveal from 'scrollreveal'
import { $ } from 'mdui/jq.js'
import { dialog } from 'mdui/functions/dialog.js'
const { zako, zakozako } = useZakoCounter()

export default {
    mounted() {
        const sr = ScrollReveal()

        const config = {
            distance: '20px',
            duration: 1000,
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        }

        // 向下滚动时的动画效果
        const imgElements = document.querySelectorAll('.pic-body')
        imgElements.forEach((img) => {
            sr.reveal(img, { ...config, origin: 'bottom', delay: 200 })
        })

        $('img').on('click', function () {
            const clickedSrc = $(this).attr('src')
            const seeAlt = $(this).attr('alt')
            dialog({
                headline: 'Image Viewer',
                body: `<div class="dialog-img"><img src="${clickedSrc}" class="show" /><p>${seeAlt}</p></div>`,
                closeOnEsc: true,
                closeOnOverlayClick: true
            })
        })
    }
}
</script>

<style lang="sass">
.pic-body
    margin: 20px
    display: grid
    grid-template-rows: masonry
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))  // 设置列数和最小/最大宽度
    gap: 20px  // 设置列之间的间距
    left: 0
    position: absolute

    p, a
        text-align: center
        display: flex
        justify-content: center
        align-items: center
        line-height: 25pt


img
    width: 100%
    height: 100%
    object-fit: cover
    margin-bottom: 20px
    border-radius: var(--mdui-shape-corner-medium)

.dialog-img
    width: 100%
    height: 100%

    .show
        width: 100%
        height: 100%
        margin-bottom: 0
        object-fit: cover
        border-radius: var(--mdui-shape-corner-medium)
</style>
