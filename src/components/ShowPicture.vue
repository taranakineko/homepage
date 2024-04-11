<template>
    <mdui-top-app-bar
        variant="small"
        scroll-behavior="shrink elevate"
        v-if="route.path === '/pictures'"
    >
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
            <img
                v-for="picture in picturesOne"
                :src="picture.src"
                :alt="picture.alt"
                loading="lazy"
                :key="picture.id"
            />
            <mdui-card
                style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 20px;
                    padding: 20px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                "
                href="https://music.163.com/song?id=2099560517"
                ><p>
                    All your steps aor in a maze <br />
                    All I do is follow through and pray <br />...<br />
                    To find the answer to this quest <br />
                    I'll journey with you till the end<br />...<br />Oramus iter per astra <br />
                    Lux tua nos dirigot
                </p></mdui-card
            >
            <img
                v-for="picture in picturesOneandOne"
                :src="picture.src"
                :alt="picture.alt"
                loading="lazy"
                :key="picture.id"
            />
            <mdui-card
                style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 20px;
                    padding: 20px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                "
                href="https://www.youtube.com/watch?v=a8DtaQwDawI"
                ><p>
                    爱我的话 给我回答 <br />
                    我的爱丫爱丫没时差 <br />
                    等待 是我为你付出的代价 喔 <br />
                    爱我的话 要回答 <br />
                    我只等你等你一句话 <br />
                    走太远 你走太远 <br />
                    你的回答 听不见 <br /></p
            ></mdui-card>
            <img
                v-for="picture in pictureTwo"
                :src="picture.src"
                :alt="picture.alt"
                loading="lazy"
                :key="picture.id"
            />
            <mdui-card
                style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 20px;
                    padding: 20px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                "
                href="https://www.youtube.com/watch?v=6GFOAik-x-8"
                ><p>
                    ah, c'est une belle époque juste avant l'automne <br />
                    pourtant, j’ai oublié comment elle se nomme <br />
                    peut-être qu'imaginer c'est savoir <br />
                    faites de beaux rêves, mes chers, bonne nuit<br />
                    faites de beaux rêves <br />
                    Mes chers, bonne nuit
                </p></mdui-card
            >
            <img
                v-for="picture in pictureThree"
                :src="picture.src"
                :alt="picture.alt"
                loading="lazy"
                :key="picture.id"
            />
            <mdui-card
                style="
                    width: 100%;
                    height: 100%;
                    margin-bottom: 20px;
                    padding: 20px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                "
                href="https://www.youtube.com/watch?v=qtJ6U4c0_fQ"
                ><p>
                    燻んでしまったの灰色に <br />
                    こんな才能なんて借り物 <br />
                    まだ人生終わっていないから <br />
                    諦めんなって誰かの声 <br />
                    見失ってしまったのアイロニー <br />
                    気付けなくて今も抗ってる <br />
                    この感情奪って去ってよ <br />
                    ドロドロになってしまう前に <br /></p
            ></mdui-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineExpose, watchEffect, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import useZakoCounter from '../function/zako'
import ScrollReveal from 'scrollreveal'
import { $ } from 'mdui/jq.js'
import { dialog } from 'mdui/functions/dialog.js'
const { zako, zakozako } = useZakoCounter()
const route = useRoute()
const picturesOne = [
    { id: 1, src: '/images/Screenshot_20240105-143739.webp', alt: 'Share a song: After Rain' },
    {
        id: 2,
        src: 'https://blog.nekoq.top/static/blog/2023/cover.webp',
        alt: '广州天环，地下通道，BRT 付费区域'
    },
    { id: 3, src: 'https://blog.nekoq.top/static/blog/taiko-ch/cover.webp', alt: '太鼓之达人' },
    { id: 4, src: 'https://blog.nekoq.top/static/blog/2023/shenzhen.webp', alt: '深圳地铁' },
    {
        id: 5,
        src: 'https://blog.nekoq.top/static/blog/2023/foshanzhan.webp',
        alt: '佛山火车站一角'
    },
    {
        id: 6,
        src: 'https://blog.nekoq.top/static/blog/2023/maimaidx-2022.webp',
        alt: '要开始了哟~'
    },
    { id: 7, src: 'https://nekoq.eu.org/static/images/F4S2ZexbQAAJP5I.png', alt: 'VSCode 背景' },
    { id: 8, src: 'https://blog.nekoq.top/static/blog/oneplus-8t/cover.webp', alt: '一张桌子' },
    { id: 9, src: 'https://blog.nekoq.top/static/blog/line1/chexiang.webp', alt: '广州地铁一号线' },
    { id: 10, src: 'https://blog.nekoq.top/static/blog/2023/wuhan.webp', alt: '武汉' },
    { id: 11, src: 'https://blog.nekoq.top/static/blog/2023/dongguan.webp', alt: '东莞' },
    { id: 12, src: 'https://blog.nekoq.top/static/blog/2023/my-home.webp', alt: '抽象的房子' }
]
const picturesOneandOne = [
    { id: 13, src: 'https://blog.nekoq.top/static/images/twittercard.png', alt: 'Twitter Card' },
    {
        id: 14,
        src: 'https://blog.nekoq.top/static/blog/2023/gotoGZN.webp',
        alt: '佛山地铁二号线站台一角'
    },
    { id: 15, src: 'https://blog.nekoq.top/static/blog/2023/xiamen.webp', alt: '厦门' },
    { id: 16, src: 'https://blog.nekoq.top/static/blog/2023/reganmian.webp', alt: '热干面' },
    {
        id: 17,
        src: 'https://blog.nekoq.top/static/blog/2023/maimaidx-2023.webp',
        alt: '舞萌 DX 2023 运行首日网络崩溃'
    },
    { id: 18, src: 'https://blog.nekoq.top/static/blog/2023/JustBeFriend.webp', alt: '.' }
]
const pictureTwo = [
    { id: 1, src: '/images/photo_2023-09-30_23-48-51.webp', alt: '晚高峰的广州南站' },
    { id: 2, src: '/images/photo_2023-07-19_12-12-05.webp', alt: '肇庆' },
    { id: 3, src: '/images/photo_2023-07-15_17-22-30.webp', alt: '佛山地铁某站站台休息室一角' },
    { id: 4, src: '/images/photo_2023-06-24_16-13-11.webp', alt: 'CRRC | GZMetro' },
    { id: 5, src: '/images/photo_2023-05-20_14-07-46.webp', alt: 'store by .webp' },
    { id: 6, src: '/images/photo_2024-02-29_00-07-00.webp', alt: '重庆 by SkyNext' },
    { id: 7, src: '/images/photo_2024-02-16_10-20-22.webp', alt: 'GZ Metro Line 5 西村站站台' },
    { id: 8, src: '/images/photo_2024-02-09_00-49-19.webp', alt: '游客止步' },
    { id: 9, src: '/images/photo_2024-02-06_04-04-37.webp', alt: 'GZ Metro 某站运营终止' },
    { id: 10, src: '/images/photo_2024-02-05_04-30-32.webp', alt: 'cat' }
]
const pictureThree = [
    { id: 11, src: '/images/photo_2024-01-07_00-31-31.webp', alt: '重庆轨道交通 by SkyNext' },
    { id: 12, src: '/images/photo_2023-12-31_13-29-01.webp', alt: '宜家' },
    { id: 13, src: '/images/photo_2023-12-03_16-39-07.webp', alt: '重庆轨道交通 by SkyNext' },
    { id: 14, src: '/images/photo_2024-02-29_01-04-49.webp', alt: 'pjsk!' },
    { id: 15, src: '/images/photo_2024-03-21_18-51-58.webp', alt: 'GZ Metro Line 5 区庄站站台' },
    { id: 16, src: '/images/photo_2024-02-25_16-18-07.webp', alt: '模拟恐怖（）' },
    { id: 17, src: '/images/photo_2024-02-17_01-48-07.webp', alt: '某商场一角' },
    { id: 18, src: '/images/photo_2024-02-16_10-03-02.webp', alt: '8 号出口（bushi' }
]
// redo with ChatGPT 3.5
// 2024.04.03
function chuNew() {
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
function mcd() {
    $('img').off('click')
}
// 初始化逻辑？（
onMounted(() => {
    // 自动更新？（
    watchEffect(() => {
        if (route.path === '/pictures') {
            chuNew()
        }
    })
})

// 卸载前清理工作
onBeforeUnmount(() => {
    mcd()
})

defineExpose({ chuNew })
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

img:hover
    cursor: pointer

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
