<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import { ref } from "vue"
    import { marked } from 'marked'
    import hljs from 'highlight.js';
    import 'highlight.js/styles/monokai-sublime.css'
    const title = ref('')
    const textAreaConten = ref('')
    const vHtml = ref('')
    const type = ref('')
    const dateVal = ref(new Date())

    const vHtmlStyle = {
        width: '50%',
        height: '100%',
        overflow: 'auto'
    }

    const areaInput = function (e) {
        vHtml.value = marked(e)
        console.log(type.value)
    }

    const renderer = new marked.Renderer()
    // 配置marked
    marked.setOptions({
        renderer,
        // 启动类似github的样式
        gfm: true,
        // 是否严格markdown，false会进行错误的markdown写法调整
        pedantic: false,
        // 是否忽略html
        sanitize: false,
        // 是否允许输出表格，github的样式(需要开启gfm)
        tables: true,
        // 是否支持github的换行符(需要开启gfm)
        breaks: false,
        // 自动渲染列表
        smartLists: true,
        // 如何进行代码高亮
        highlight: function (code: any) {
            return hljs.highlightAuto(code).value
        }
    })


    const options = [
        {
            value: '1',
            label: '博客',
        },
        {
            value: '2',
            label: '读书',
        },
    ]

    console.log('render')
</script>

<template>
    <el-row class="df h100">

        <el-row class="df f1 fdc">
            <el-input v-model="title" placeholder="输入标题" />

            <el-row class="f1 oh">
                <el-input class="f1 h100" @input="areaInput" v-model="textAreaConten" type="textarea"
                    :input-style="{height: '100%'}" placeholder="Please input" />

                <div v-html="vHtml" class="vhtml_border" :style="vHtmlStyle"></div>

            </el-row>
            
        </el-row>

        <el-row class="df fdc">

            <el-select v-model="type" class="m-2" placeholder="Select" size="large">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <el-date-picker 
                v-model="dateVal" 
                type="date" 
                placeholder="Pick a day"
                :default-value="new Date()">
            </el-date-picker>

            <el-button>完成</el-button>
        </el-row>
    </el-row>
</template>

<style scoped>
    .vhtml_border {
        box-sizing: border-box;
        border: 1px solid blueviolet;
    }
</style>