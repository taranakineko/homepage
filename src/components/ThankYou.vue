<template>
    <div class="miao">
        <mdui-card
            variant="elevated"
            class="hover"
            style="margin: 20px 5px 0px 5px; width: 98%; padding: 20px"
        >
            <h2>其他内容（或许是感谢？）</h2>
            <div class="me-body">
                <p>等...！这一部分目前还在施工！</p>
                <p>
                    但是你可以到
                    <a href="https://github.com/taranakineko/homepage/blob/main/README.md">这里</a>
                    查看，以后千畔将会把那边的内容 copy 一份到这里的
                    <del>，或者是重写这一部分</del>
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
import TXT from '../config/txt.json'
const OpenTheSnackbar = ref<any>(null)
const TheSnackbar = ref<any>(null)
onMounted(() => {
    var txt = TXT as String[]
    OpenTheSnackbar.value.addEventListener('click', () => {
        TheSnackbar.value.open = true
        const rnd = Math.floor(Math.random() * txt.length)
        TheSnackbar.value.innerHTML = txt[rnd]
    })
})
</script>
