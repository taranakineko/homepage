<template>
    <mdui-top-app-bar variant="small" scroll-behavior="shrink elevate">
        <mdui-button-icon icon="menu--outlined"></mdui-button-icon>
        <mdui-top-app-bar-title>测试页，使用 ChatGPT 3.5 辅助搭建</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <div class="miao-pic">
        <div class="pic-body">
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
                ><p>本页仅供测试，不代表主页未来规划，敬请留意</p></mdui-card
            >
            <img src="/images/Screenshot_20240105-143739.png" />
            <img src="https://blog.nekoq.top/static/blog/2023/cover.webp" />
            <img src="https://blog.nekoq.top/static/blog/taiko-ch/cover.webp" />
            <img src="https://blog.nekoq.top/static/blog/2023/shenzhen.webp" />
            <img src="https://blog.nekoq.top/static/blog/2023/foshanzhan.webp" />
            <img src="https://blog.nekoq.top/static/blog/2023/maimaidx-2022.webp" />
            <img src="https://nekoq.eu.org/static/images/F4S2ZexbQAAJP5I.jpg" />
            <img src="https://blog.nekoq.top/static/blog/oneplus-8t/cover.webp" />
            <img src="https://blog.nekoq.top/static/blog/line1/chexiang.webp" />
            <img src="https://blog.nekoq.top/static/blog/2023/wuhan.webp" />
            <img src="https://blog.nekoq.top/static/blog/2023/dongguan.webp" />
            <img src="https://blog.nekoq.top/static/blog/2023/my-home.webp" />
            <img src="https://blog.nekoq.top/static/images/twittercard.png" />
            <img src="https://blog.nekoq.top/static/blog/2023/gotoGZN.webp" />
            <img src="https://blog.nekoq.top/static/blog/2023/xiamen.webp" />
            <img src="https://blog.nekoq.top/static/blog/2023/reganmian.webp" />
            <img src="https://blog.nekoq.top/static/blog/2023/maimaidx-2023.webp" />
            <img src="https://blog.nekoq.top/static/blog/2023/JustBeFriend.webp" />
        </div>
    </div>
</template>

<script>
import ScrollReveal from 'scrollreveal'
import { observeResize } from 'mdui/functions/observeResize.js';
import { UseLan } from '@/function/read'
import { $ } from 'mdui/jq.js';
import { dialog } from 'mdui/functions/dialog.js';

export default {
    mounted() {
        const sr = ScrollReveal()

        const config = {
            distance: '20px',
            duration: 1000,
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        }

        // 向下滚动时的动画效果
        const imgElements = document.querySelectorAll('.pic-body img')
        imgElements.forEach((img) => {
            sr.reveal(img, { ...config, origin: 'bottom', delay: 200 })
        })


        $('img').on('click', function() {
            const clickedSrc = $(this).attr('src');
            dialog({
                headline: 'Image Viewer',
                body: `<img src="${clickedSrc}" class="show" />`,
                closeOnEsc: true,
                closeOnOverlayClick: true
            })
        } )

        UseLan()
    }
}
</script>

<style lang="sass">
.pic-body
    margin: 20px
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))  // 设置列数和最小/最大宽度
    gap: 20px  // 设置列之间的间距

img
    width: 100%
    height: 100%
    object-fit: cover
    margin-bottom: 20px
    border-radius: var(--mdui-shape-corner-medium)

.show
    width: 100%
    height: 100%
    margin-bottom: 0
    object-fit: cover
    border-radius: var(--mdui-shape-corner-medium)
</style>
