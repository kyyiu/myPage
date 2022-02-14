<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue"
const title = ref('')
const textAreaConten = ref('')
const vHtml = ref('')

const vHtmlStyle = {
    width: '50%'
}

const areaInput = function(e) {
    vHtml.value = e
}
console.log('render')
</script>

<template>
    <el-input v-model="input" placeholder="输入标题" />
    <el-row class="df">
        <el-input
            class="f1"
            @input="areaInput"
            v-model="textAreaConten"
            type="textarea"
            placeholder="Please input"
        />
        <div v-html="vHtml" :style="vHtmlStyle"></div>
    </el-row>
    <el-button>完成</el-button>
</template>

<style scoped>

</style>
