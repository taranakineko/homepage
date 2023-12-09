<template>
    <div class="miao">
        <div style="text-align: center; margin: 0 auto; margin: 30px 20px 0 20px">
            <img class="avatar" width="200" height="200" src="/images/taranaki.webp" alt="头像" />
            <h1 class="name">TaranakiNeko</h1>
        </div>
        <mdui-card
            class="pane"
            variant="elevated"
            style="
                margin: 30px 5px 0px 5%;
                text-align: center;
                font-style: italic;
                line-height: 200%;
                padding: 20px;
                height: 100%;
            "
        >
            <span>A 🐱cat lying on the ⌨️keyboard.</span>
        </mdui-card>
        <mdui-card
            variant="elevated"
            class="pane"
            style="
                margin: 20px 5px 0px 5%;
                text-align: center;
                font-style: italic;
                line-height: 200%;
                padding: 20px;
                height: 100%;
            "
        >
            <span>
                🚧 Somethings are not finished yet, please wait for me to finish...!
                <br />
                有些事情还未结束哦...
            </span>
        </mdui-card>
        <mdui-card
            variant="elevated"
            class="footer pane"
            style="margin: 20px 5px 0px 5%; height: 100%"
        >
            <p>Copyright © 2022 - Now taranakiNeko</p>
            <p>
                Made with
                <a href="https://github.com/zdhxiong/mdui/" target="_blank">zdhxiong/mdui</a> |
                <a href="https://github.com/taranakineko/homepage/" target="_blank">Github Repo</a>
            </p>
        </mdui-card>
    </div>
    <div class="fab-footer">
        <mdui-fab
            class="openSnackbar"
            ref="OpenTheSnackbar"
            icon="auto_awesome"
            data-umami-event="TheIndex Snackbar"
        ></mdui-fab>
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
import TXT from '../config/txt.json'
const OpenTheSnackbar = ref<any>(null)
const TheSnackbar = ref<any>(null)
onMounted(() => {
    // console.log(OpenTheSnackbar.value);
    // console.log(TheSnackbar.value);
    // 2023.11.18 09:57:05 —— 2023.11.19 02:03:00
    // 他喵的终于搞定这玩意了
    // Refactored by Elihuso
    var txt = TXT as String[]
    OpenTheSnackbar.value.addEventListener('click', () => {
        TheSnackbar.value.open = true
        const rnd = Math.floor(Math.random() * txt.length)
        TheSnackbar.value.innerHTML = txt[rnd]
    })
})
</script>

<style lang="scss">
.avatar {
    transition: 0.5s;
    &:hover {
        rotate: 360deg;
    }
    &::before {
        rotate: 0;
    }
    &::after {
        rotate: 360deg;
    }
}

.name {
    &:hover {
        animation: shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }
}

@keyframes shake {
    10%,
    90% {
        transform: translate3d(-0.5px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(1px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-2px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(2px, 0, 0);
    }
}
</style>
