<template>
    <div class="miao-fof">
        <br><br>    
        <mdui-circular-progress></mdui-circular-progress>
        <h1 v-html="h1"></h1>
        <p v-html="p1"></p>
        <p v-html="p2"></p>
        <!-- 
            分多个 p 写是因为
            如果是 <div v-html="p1"> 的话
            会导致元素排序错误（<div slot='content'> 在 <mdui-tooltip> 外）
            从而导致 <mdui-tooltip> 无法显示
            期待有新的解决方案...
            千畔 2023.11.25
        -->
    </div>
</template>

<script setup lang="ts">
import fof from '../config/404.json'
const rnd = Math.floor(Math.random() * fof.length)
const h1 = fof[rnd][0]
const p1 = fof[rnd][1]
const p2 = fof[rnd][2]
</script>

<style lang="sass">
mdui-circular-progress
    scale: 150%
    margin-bottom: 3.14159%
    margin-left: 1.5%

.miao-fof
    max-width: 667px
    min-width: 360px
    padding-right: 0px
    padding-left: 0px
    padding-bottom: 1%
    padding-top: 1%
    // text-align: center
    position: absolute
    margin: auto
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 60%
    height: 50%

.top
    flex-grow: 1

.bottom
    flex-grow: 2
</style>
