<template>
    <div class="miao">
        <div class="fof">
            <div class="top"></div>
            <div class="title">404</div>
            <div class="sub">这个页面不见了</div>
            <div class="bottom"></div>
        </div>
    </div>
</template>

<style lang="sass">
.fof
    display: flex
    flex-direction: column
    gap: 5px
    height: 50vh

.top
    flex-grow: 1

.title
    font-size: min(15em, 40vw)
    color: transparent
    background-color: rgb(68 140 188 / 50%)
    -webkit-background-clip: text
    text-shadow: rgba(255, 255, 255, 0.5) 0 5px 6px
    text-align: center

.sub
    color: rgba(0, 0, 0, 0.33)
    font-size: 1.2em
    text-align: center

.bottom
    flex-grow: 2
</style>
