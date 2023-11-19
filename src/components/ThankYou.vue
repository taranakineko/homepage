<template>
    <div class="miao">
        <mdui-card variant="elevated" class="hover" style="margin: 20px 5px 0px 5px; width: 98%; padding: 20px">
            <h2>其他内容（或许是感谢？）</h2>
            <div class="me-body">
                <p>等...！这一部分目前还在施工！</p>
                <p>
                    但是你可以到
                    <a href="https://github.com/taranakineko/homepage/blob/main/README.md">这里</a>
                    查看，稍后千畔将会把那边的内容 copy 一份到这里的
                </p>
                <p>绝对不会咕咕咕的！千畔这样说道</p>
                <p>同时也要感谢陪伴在千畔身边的你</p>
                <p>祝你好运！😘</p>
            </div>
        </mdui-card>
    </div>
    <div class="fab-footer">
        <mdui-fab class="openSnackbar" ref="OpenTheSnackbar" icon="auto_awesome"></mdui-fab>
    </div>
    <mdui-snackbar
        close-on-outside-click
        class="snackbar"
        ref="TheSnackbar"
        id="say"
    ></mdui-snackbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const OpenTheSnackbar = ref<any>(null)
const TheSnackbar = ref<any>(null)
onMounted(() => {
    var len = 10,
        txt = new Array(len)
    ;(txt[0] = '还在施工中哦'),
        (txt[1] = '不要大力拍打或滑动哟'),
        (txt[2] = '当 0 或 1 都是可以的喵'),
        (txt[3] = '传来樱桃青轴般的段落感。 （（'),
        (txt[4] = '前面的区域，以后再来探索吧'),
        (txt[5] = 'nya~'),
        (txt[6] = '守られることはもうきっとないけど'),
        (txt[7] = '歌は、言語関係ないですからね。'),
        (txt[8] = '不是写出了 Bug 就是在写出 Bug 的路上'),
        (txt[9] = 'Hope...'),
        OpenTheSnackbar.value.addEventListener('click', () => {
            TheSnackbar.value.open = true
            const rnd = Math.floor(Math.random() * len)
            TheSnackbar.value.innerHTML = txt[rnd]
        })
})
</script>
