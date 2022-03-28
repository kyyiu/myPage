<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import { ref, getCurrentInstance } from "vue"
    import { marked } from 'marked'
    import hljs from 'highlight.js';
    import 'highlight.js/styles/monokai-sublime.css'

    const { proxy } = getCurrentInstance();  //来获取全局 globalProperties 中配置的信息

    const title = ref('')
    const textAreaConten = ref('')
    const introduce = ref('')
    const vHtml = ref('')
    const type = ref('')
    const dateVal = ref(new Date())
    const selectLevel = ref([])

    const isShowCascader = ref(false)

    const blogLevel = 4
    // 博客粒度
    const levelNum = 10

    interface cascader_child_item {
        label: string;
        value: string;
    }

    interface cascader_item extends cascader_child_item {
        children?: Array<cascader_child_item>
    }

    const vHtmlStyle = {
        height: '100%',
        overflow: 'auto'
    }

    const areaInput = function (e: any) {
        vHtml.value = marked(e)
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

    // 大体分类
    const options = [
        {
            value: 0,
            label: '数据结构',
        },
        {
            value: 1,
            label: '翻译',
        },
        {
            value: 2,
            label: '读书',
        },
        {
            value: 3,
            label: '博客',
        },
    ]

    const cascader_options: cascader_item[] = []

    const generateCascaderItem = (prefix: string, cur: number | string, child: cascader_item[], needChild = true) => {
        const finalStr = `${prefix}${cur}`
        const obj: cascader_item = {
            label: finalStr,
            value: finalStr
        }
        needChild && (obj.children = []);
        child.push(obj)
        return {
            children: obj.children,
            finalStr
        }
    }

    const generateCascader = function(curLevel: number, child: cascader_item[], item?: string) {
        const str = item ? item + '_' : ''
        if (curLevel >= blogLevel) {
          for (let i = 0; i < levelNum; i++) {
            generateCascaderItem(str, i, child, false)
          }
          return
        }
        for (let i = 0; i < levelNum; i++) {
            const obj = generateCascaderItem(str, i, child)
            generateCascader(curLevel + 1, obj.children, obj.finalStr)
        }
    }

    generateCascader(0, cascader_options)

    isShowCascader.value = true

    const finish = () => {
        // selectLevel.value[0] 为type，selectLevel.value.length为level, selectLevel.value[len-1]为父id
        const selectLevelLen = selectLevel.value.length - 1
        if (selectLevelLen < 0 || title.value.length < 1 || textAreaConten.value.length < 1 || introduce.value.length < 1) {
            proxy.$message.error('需要完整内容')
            return
        }

        const cascaderVal = selectLevel.value

        const now = new Date(dateVal.value)
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const day  = now.getDate()
        
        const paramsData: any = {}
        
        paramsData.title = title.value
        paramsData.type_id = +cascaderVal[0]
        paramsData.article_content = textAreaConten.value
        paramsData.introduce = introduce.value
        paramsData.addTime = `${year}-${month}-${day}`
        paramsData.view_count = 0
        paramsData.father_id = cascaderVal[selectLevelLen]
        // paramsData.self_id = 
        paramsData.level = selectLevelLen
        console.log(paramsData)
        proxy.$axios.post('/admin/addArticle', paramsData).then(() => {
            proxy.$message.success('完成')
        })
        
    }

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

            <el-select v-model="type" class="m-2" placeholder="Select" size="large" v-if="false">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>

            <el-cascader v-model="selectLevel" 
            :options="cascader_options" 
            @change="selectCascader"
            :show-all-levels="false"
            :props="{
                checkStrictly: true
            }"
            v-if="isShowCascader"
            placeholder="选择章节位置" />

            <el-date-picker 
                v-model="dateVal" 
                type="date" 
                placeholder="Pick a day"
                :default-value="new Date()">
            </el-date-picker>

            <el-input class="f1" v-model="introduce" type="textarea" placeholder="介绍" />

            <el-button @click="finish">完成</el-button>
        </el-row>
    </el-row>
</template>

<style scoped>
    .vhtml_border {
        box-sizing: border-box;
        border: 1px solid blueviolet;
    }
</style>