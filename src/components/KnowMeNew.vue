<template>
    <div class="KnowNew">
        <div class="miao">
            <mdui-card
                variant="elevated"
                class="hover waring"
                style="margin: 20px 5px 0px 5%; width: 90%; padding: 20px"
            >
                <h2>注意注意！⚠️</h2>
                <div class="me-body">
                    <p>关于自我介绍这部分正在重写</p>
                    <p>如果你想查看之前的介绍的话...那就点击下面的这个按钮吧！</p>
                    <mdui-button @click="showKnow">查看之前的介绍</mdui-button>&nbsp;<mdui-button
                        @click="showKnowNew"
                        >查看新的介绍</mdui-button
                    >
                    <p><i>刷新即可重新显示哦~</i></p>
                </div>
            </mdui-card>
        </div>
        <div class="miao-thanks NewNew" style="display: none">
            <div class="thanks-body">
                <mdui-card
                    variant="elevated"
                    class="hover me-with-img"
                    style="margin: 0px 5px 20px 5%; width: 95%"
                >
                    <img src="/images/me/Snipaste_2024-04-26_00-40-12.png" />
                    <div class="me-nr">
                        <div class="me-body">
                            <p>这里是 TaranakiNeko 的介绍</p>
                            <p><del>很显然这种介绍风格是模仿了某个认识的朋友的（</del></p>
                            <p>Taranaki，取自于新西兰的其中一个区名</p>
                            <p>虽说这是别人建议的，最初只是为了让搜出来的结果“石沉大海”</p>
                            <p>而 Neko 呢，则是因为一开始的设定是只猫</p>
                            <p>所以最后组合起来，就是叫 TaranakiNeko 了</p>
                            <p>
                                如果你觉得这个名字太长了，那你可以记下另外一个广为人知的名字：千畔
                            </p>
                            <p>当然这些名字（或者叫昵称？）还有很多变体，这里就不细说啦</p>
                        </div>
                    </div>
                </mdui-card>
                <mdui-card
                    variant="elevated"
                    class="hover me-no-img"
                    style="margin: 0px 5px 20px 5%; width: 95%"
                >
                    <div class="me-nr">
                        <div class="me-body">
                            <p>要问千畔喜欢什么的话......似乎并没有特别喜欢什么东西吧</p>
                            <p>但要全说出来的话，似乎也挺多的（x</p>
                            <p>那就...不说了吧！以后再慢慢去说（点头</p>
                            <p>或者可以去看看其他地方，总会有些小惊喜的不是吗（）</p>
                            <p></p>
                        </div>
                    </div>
                </mdui-card>
            </div>
            <div class="thanks-body">
                <mdui-card
                    variant="elevated"
                    class="hover me-with-img"
                    style="margin: 0px 5px 20px 5%; width: 95%"
                >
                    <img src="/images/me/PXL_20240425_172920510.jpg" />
                    <div class="me-nr" style="margin-top: 20px">
                        <div class="me-body">
                            <mdui-tabs value="tab-1" placement="top" full-width>
                                <mdui-tab value="tab-1">设备</mdui-tab>
                                <mdui-tab value="tab-2">软件</mdui-tab>

                                <mdui-tab-panel class="chip" slot="panel" value="tab-1">
                                    <mdui-tooltip content="Mobile Phone">
                                        <mdui-chip>
                                            Pixel 5
                                            <mdui-icon
                                                slot="icon"
                                                src="https://simpleicons.org/icons/google.svg"
                                            ></mdui-icon> </mdui-chip></mdui-tooltip
                                    >&nbsp;
                                    <mdui-tooltip content="Smart Watch">
                                        <mdui-chip>
                                            Samsung Galaxy Watch 4
                                            <mdui-icon
                                                slot="icon"
                                                src="https://simpleicons.org/icons/samsung.svg"
                                            ></mdui-icon> </mdui-chip></mdui-tooltip
                                    >&nbsp;
                                    <mdui-tooltip content="PC">
                                        <mdui-chip>
                                            RedmiBook Pro 14S
                                            <mdui-icon
                                                slot="icon"
                                                src="https://simpleicons.org/icons/xiaomi.svg"
                                            ></mdui-icon> </mdui-chip></mdui-tooltip
                                    >&nbsp;
                                </mdui-tab-panel>
                                <mdui-tab-panel class="chip" slot="panel" value="tab-2">
                                    <mdui-tooltip content="Windows Insider Beta Channel">
                                        <mdui-chip>
                                            Windows 11 Pro
                                            <mdui-icon
                                                slot="icon"
                                                src="https://simpleicons.org/icons/windows.svg"
                                            ></mdui-icon> </mdui-chip></mdui-tooltip
                                    >&nbsp;
                                    <mdui-tooltip content="based Android 14">
                                        <mdui-chip>
                                            Pixel
                                            <mdui-icon
                                                slot="icon"
                                                src="https://simpleicons.org/icons/android.svg"
                                            ></mdui-icon> </mdui-chip></mdui-tooltip
                                    >&nbsp;
                                    <mdui-tooltip content="Firefox Nightly"
                                        ><mdui-chip>
                                            Browser
                                            <mdui-icon
                                                slot="icon"
                                                src="https://simpleicons.org/icons/firefox.svg"
                                            ></mdui-icon> </mdui-chip></mdui-tooltip
                                    >&nbsp;
                                    <mdui-tooltip content="Visual Studio Code">
                                        <mdui-chip>
                                            Code Edit
                                            <mdui-icon
                                                slot="icon"
                                                src="https://simpleicons.org/icons/visualstudiocode.svg"
                                            ></mdui-icon> </mdui-chip></mdui-tooltip
                                    >&nbsp;
                                    <mdui-tooltip content="Hexo">
                                        <mdui-chip>
                                            Blog Framework
                                            <mdui-icon
                                                slot="icon"
                                                src="https://simpleicons.org/icons/hexo.svg"
                                            ></mdui-icon> </mdui-chip></mdui-tooltip
                                    >&nbsp;
                                    <mdui-tooltip content="Umami">
                                        <mdui-chip>
                                            Website Analysis
                                            <mdui-icon
                                                slot="icon"
                                                src="https://simpleicons.org/icons/umami.svg"
                                            ></mdui-icon> </mdui-chip></mdui-tooltip
                                    >&nbsp;
                                </mdui-tab-panel>
                            </mdui-tabs>
                        </div>
                    </div>
                </mdui-card>
                <mdui-card
                    variant="elevated"
                    class="hover me-with-img"
                    style="margin: 0px 5px 20px 5%; width: 95%"
                >
                    <img src="/images/me/1716555101.jpg" />
                    <div class="me-nr">
                        <div class="me-body" style="margin-top: 16px;">
                            <blockquote cite="https://t.me/taraneko_what_happen/12947">
                                <p>建议下次写功能之前和我一样先想清楚干什么.jpg</p>
                                <footer>— huige</footer>
                            </blockquote>
                            <p>成分有待复杂，想到什么就添加什么吧</p>
                            <mdui-chip v-on:click="SeeSeeYourB50()">
                                舞萌 DX
                                <mdui-avatar
                                    slot="icon"
                                    src="https://images.weserv.nl/?url=https://imgsrc.baidu.com/forum/pic/item/fc1f4134970a304eeba8363e94c8a786c8175c68.jpg&output=webp"
                                ></mdui-avatar> </mdui-chip
                            >&nbsp;
                            <mdui-chip v-on:click="MaiMen()">
                                麦门信徒
                                <mdui-icon
                                    slot="icon"
                                    src="https://simpleicons.org/icons/mcdonalds.svg"
                                ></mdui-icon> </mdui-chip
                            >&nbsp;
                            <mdui-chip v-on:click="LagTrain()">
                                追公交.jpg
                                <mdui-icon slot="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ionicon"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M400 32H112a48 48 0 00-48 48v320a47.91 47.91 0 0016 35.74V454a26 26 0 0026 26h28a26 26 0 0026-26v-6h192v6a26 26 0 0026 26h28a26 26 0 0026-26v-18.26A47.91 47.91 0 00448 400V80a48 48 0 00-48-48zM147.47 399.82a32 32 0 1128.35-28.35 32 32 0 01-28.35 28.35zM236 288H112a16 16 0 01-16-16V144a16 16 0 0116-16h124a4 4 0 014 4v152a4 4 0 01-4 4zm20-192H112.46c-8.6 0-16-6.6-16.44-15.19A16 16 0 01112 64h287.54c8.6 0 16 6.6 16.44 15.19A16 16 0 01400 96H256zm20 32h124a16 16 0 0116 16v128a16 16 0 01-16 16H276a4 4 0 01-4-4V132a4 4 0 014-4zm60.18 243.47a32 32 0 1128.35 28.35 32 32 0 01-28.35-28.35z"
                                        />
                                    </svg>
                                </mdui-icon> </mdui-chip
                            >&nbsp;
                            <mdui-chip v-on:click="SeeSeeMyListening()">
                                Listen Music
                                <mdui-icon slot="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z"/></svg>
                                </mdui-icon>
                                </mdui-chip
                            >&nbsp;
                        </div>
                    </div>
                </mdui-card>
            </div>
            <div class="thanks-body">
                <mdui-card
                    variant="elevated"
                    class="hover me-with-img"
                    style="margin: 0px 5px 20px 5%; width: 95%"
                >
                    <img src="/images/me/Snipaste_2024-04-26_00-40-12.png" />
                    <div class="me-nr">
                        <div class="me-body">
                        </div>
                    </div>
                </mdui-card>
                <mdui-card
                    variant="elevated"
                    class="hover me-with-img"
                    style="margin: 0px 5px 20px 5%; width: 95%"
                >
                    <img src="/images/me/Snipaste_2024-04-26_00-40-12.png" />
                    <div class="me-nr">
                        <div class="me-body">
                            <p>既然都看到这里了，那想要怎么抓到千畔呢</p>
                            <p>很简单，隔壁 Links 选项卡里就有关于千畔的链接</p>
                            <p>只要在那边耐心捕捉，总会找到千畔的不是吗</p>
                            <p>当然，由于千畔手机常年开免打扰</p>
                            <p>如通过隔壁提供的联系途径寻找千畔但超过三个小时未回复</p>
                            <p>自求多福吧（被打</p>
                        </div>
                    </div>
                </mdui-card>
            </div>
        </div>
    </div>
    <div class="KnowOld" style="display: none">
        <KnowMe />
    </div>
</template>

<script setup lang="ts">
import { $ } from 'mdui/jq.js'
import { dialog } from 'mdui/functions/dialog.js'
import { ref, onBeforeMount } from 'vue'
import KnowMe from './KnowMe.vue'


function showKnow() {
    $('.KnowOld').removeAttr('style')
    $('.KnowNew').attr({
        style: 'display: none;'
    })
}
function showKnowNew() {
    $('.NewNew').removeAttr('style')
    $('.waring').attr({
        style: 'display: none;'
    })
}

interface Track {
  artist_name: string;
  track_name: string;
  album_name: string;
  url: string;
  now_playing: boolean;
  image: string;
}

const tracks = ref<Track[]>([]);
const listening = ref<number>(0)
const a111 = ref()

async function fetchListData() {
  try {
    const response = await fetch('https://api.nekoq.top/lastfm'); // Replace with your backend URL
    const data = await response.json();
    tracks.value = data;
    a111.value = '<div style="margin: 20px">';
    tracks.value.forEach(track => {
        a111.value += `
        <a href="${track.url}" target="_blank">
            <mdui-card variant="elevated" style="margin-bottom: 20px;" class="song">
                <img src="${track.image}">
                <div class="song-info">
                    <p class="song-name">${track.track_name} - ${track.artist_name} ${track.now_playing ? '<i>(Now Playing)</i>' : ''}</p>
                    <span class="song-album">${track.album_name}</span>
                </div>
            </mdui-card>
        </a>
        `;
    });
    a111.value += '</div><a href="https://www.last.fm/zh/user/taranakineko">如欲了解更多，请点这里</a>';
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

async function SeeSeeMyListening() {
    // 看看你的
    if (listening.value != 0) {
        dialog({
            body: '<div style="display: flex;justify-content: center;align-items: center;"><mdui-circular-progress style="scale: 80%"></mdui-circular-progress></div>',
            closeOnEsc: true,
            closeOnOverlayClick: true
        })
        await fetchListData()
        $('mdui-dialog').prop('open', false)
        dialog({
            headline: '我知道你想看什么......',
            body: a111.value,
            actions: [{ text: 'Next' }],
            closeOnEsc: true,
            closeOnOverlayClick: true
        })
    } else {
        dialog({
            headline: '我知道你想看什么......',
            body: '<p>你能找到千畔再说嘛！</p><p>或者再找找其他地方...？或许千畔已经塞了一些东西进去了~</p>',
            actions: [{ text: 'Next' }],
            closeOnEsc: true,
            closeOnOverlayClick: true
        })
        listening.value++
    }
}

const reply = ref()
const seeb50 = ref<number>(0)

async function GetRating() {
    const who = 'https://api.nekoq.top'
    let url

    if (localStorage.getItem('tara') == 'true') {
        url = who + '/kano'
    } else {
        url = who + '/kano?see=tara'
    }

    const resp = await fetch(url, { method: 'get' })
    if (resp.ok) {
        const data = await resp.json()
        DXRating = data.rating
        SRat = data.standard_total
        DRat = data.dx_total
        UpdateTime = data.update_time
        reply.value =
            '<p>DX Rating: ' +
            DXRating +
            '（' +
            SRat +
            ' + ' +
            DRat +
            '）</p><p>更新时间：' +
            UpdateTime +
            '</p>'
    } else {
        console.log('error')
    }
}
let DXRating: string
let UpdateTime: string
let SRat: string
let DRat: string

// 召唤 Dialog
async function SeeSeeYourB50() {
    // 看看你的
    if (seeb50.value != 0) {
        dialog({
            body: '<div style="display: flex;justify-content: center;align-items: center;"><mdui-circular-progress style="scale: 80%"></mdui-circular-progress></div>',
            closeOnEsc: true,
            closeOnOverlayClick: true
        })
        await GetRating()
        $('mdui-dialog').prop('open', false)
        dialog({
            headline: '我知道你想看什么......',
            body: reply.value,
            actions: [{ text: 'Next' }],
            closeOnEsc: true,
            closeOnOverlayClick: true
        })
    } else {
        dialog({
            headline: '我知道你想看什么......',
            body: '<p>你能找到千畔再说嘛！</p><p>或者再找找其他地方...？或许千畔已经塞了一些东西进去了~</p>',
            actions: [{ text: 'Next' }],
            closeOnEsc: true,
            closeOnOverlayClick: true
        })
        seeb50.value++
    }
}
function MaiMen() {
    // Amen 的变体
    dialog({
        headline: '为什么是「麦门信徒」？',
        body: '<p>外出吃饭首先想到的就是去麦当劳吃</p><p>在哪会面也是会先说「在麦当劳见」</p>',
        actions: [{ text: 'sodayo' }],
        closeOnEsc: true,
        closeOnOverlayClick: true
    })
}
function LagTrain() {
    // 稻叶昙的歌曲
    dialog({
        headline: '为什么是「追公交」？',
        body: '<p>千畔每个月出门，总有一次是在追公交的</p><p>如果不是追公交，那就是追绿灯追地铁追...</p>',
        actions: [{ text: '勇敢的去追吧~' }],
        closeOnEsc: true,
        closeOnOverlayClick: true
    })
}

// defineExpose({ fetchData })
</script>

<style lang="sass">
.thanks-body
    margin-right: 1%
.me-with-img
    display: flex
    // align-items: center
    flex-direction: column
    width: fit-content

    img
        max-width: 100%
        height: auto
        margin-bottom: 0px

    .me-nr
        padding: 20px
        padding-top: 0px

        h2
             padding-top: 20px

.me-no-img
    .me-nr
        padding: 20px

.song
    display: flex
    align-items: center // 垂直居中对齐

    img
        height: 100% // 图片高度占满容器
        width: 15% // 图片宽度为容器宽度的 15%
        margin-bottom: 0px

    .song-info
        flex: 1 // 剩余空间填充
        padding-left: 20px // 左边距
        
        .song-name
            margin: 0

        .song-album
            font-size: smaller
            color: gray

</style>

<!--
    感谢 Moe 起的名
-->
