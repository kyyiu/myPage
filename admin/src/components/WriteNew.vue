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
    const selectLevel = ref([])

    const vHtmlStyle = {
        height: '100%',
        overflow: 'auto'
    }

    const areaInput = function (e: any) {
        vHtml.value = marked(e)
        console.log(type.value)
    }

    const selectCascader = (e: any) => {
        selectLevel.value = e
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

    const cascader_options = [
        {
            value: 'guide',
            label: 'Guide',
            children: [
                {
                    value:  '1',
                    label:  '2'
                }
            ]
        },{
            value: 'guide',
            label: 'Guide',
            children: [
                {
                    value:  '1',
                    label:  '2'
                }
            ]
        },{
            value: 'guide',
            label: 'Guide',
            children: [
                {
                    value:  '1',
                    label:  '2'
                }
            ]
        },{
            value: 'guide',
            label: 'Guide',
            children: [
                {
                    value:  '1',
                    label:  '2'
                }
            ]
        },
    ]



    console.log('render')
</script>

<template>
    <el-row class="df f1 oh">

        <el-row class="df f1 fdc oh h100">
            <el-input v-model="title" placeholder="输入" />

            <el-row class="df f1 oh">
                <el-input class="f1" @input="areaInput" v-model="textAreaConten" type="textarea"
                    :input-style="{height: '100%'}" placeholder="Please input" />

                <div v-html="vHtml" class="f1 vhtml_border" :style="vHtmlStyle"></div>
            </el-row>
            
        </el-row>

        <el-row class="df fdc">

            <el-select v-model="type" class="m-2" placeholder="Select" size="large">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <el-cascader v-model="selectLevel" 
            :options="cascader_options" 
            @change="selectCascader"
            :show-all-levels="false"
            placeholder="选择章节位置" />

            <el-date-picker 
                v-model="dateVal" 
                type="date" 
                placeholder="Pick a day"
                :default-value="new Date()">
            </el-date-picker>

            <el-button v-if="false">完成</el-button>
        </el-row>
    </el-row>
</template>

<style scoped>
    .vhtml_border {
        box-sizing: border-box;
        border: 1px solid blueviolet;
    }
</style>