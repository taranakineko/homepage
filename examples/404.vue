<template>
<div class="show">
<button @click="addPop" style="padding: 5px 20px; margin: 10px auto;">显示弹窗</button>
</div>
    <bc-popbox></bc-popbox>
</template>

<script lang="ts">
import { MenuStatue } from 'packages/dist/types'
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    name: 'App',
    data () {
        return {
            popBox: getCurrentInstance()?.appContext
                .config.globalProperties.$bcui['bc-popbox'],
            menuStatue: {
                show: false,
                point: { x: 0, y: 0 }
            } as MenuStatue
        }
    },
    methods: {
        addPop() {
                const popInfo = {
                    title: 'Error！',
                    icon: 'fa-solid fa-circle-exclamation',
                    html: `<p>似乎来错了？</p>`,
                    button: [
                        {
                            text: '返回上一页',
                            master: true,
                            fun: () => window.history.back()
                        }
                    ]
                }
                this.popBox.add(popInfo)
        },
    },
    mounted:function () {   //自动触发写入的函数
            this.addPop();
        }
});
</script>

<style>
.show {
    text-align: center; /*让div内部文字居中*/
	border-radius: 20px;
	height: 1em;
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>