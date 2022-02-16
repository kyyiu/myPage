<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import WriteNew from './components/WriteNew.vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
const isCollapse = ref(false)
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <div class="df h100">
    <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <span 
    class="menu_controller_ele"
    @click="toggleCollapse"
    >{{isCollapse ? '展':'收'}}</span>
  </el-menu>
  <div class="f1 oh">
    <WriteNew></WriteNew>
  </div>
  </div>
</template>

<style>
  html, body, #app {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .h100 {
    height: 100%;
  }

  .oh {
    overflow: hidden;
  }

  .df {
    display: flex;
  }

  .fdc{
    flex-direction: column;
  }

  .f1 {
    flex: 1;
  }

  .jcc {
    justify-content: center;
  }

  .aic {
    align-items: center;
  }

  .menu_controller_ele {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    position: absolute;
    border: 1px solid gray;
    background-color: #fff;
    border-radius: 50%;
    font-size: 2.5rem;
    right: 0;
    bottom: 30px;
    transform: translateX(50%);
    z-index: 2000;
  }

  /* 以下是markdown代码样式 */
  .bread-div {
    padding: .5rem;
    border-bottom: 1px solid #eee;
    background-color: #e1f0ff;
  }

  .detailed-title {
    font-size: 1.8rem;
    text-align: center;
    padding: 1rem;
  }

  .center {
    text-align: center;
  }

  .detailed-content {
    padding: 1.3rem;
    font-size: 1rem;
  }

  pre {
    display: block;
    background-color: #f3f3f3;
    padding: .5rem !important;
    overflow-y: auto;
    font-weight: 300;
    font-family: Menlo, monospace;
    border-radius: .3rem;
  }

  pre {
    background-color: #283646 !important;
  }

  pre>code {
    border: 0px !important;
    background-color: #283646 !important;
    color: #FFF;

  }

  code {
    display: inline-block;
    background-color: #f3f3f3;
    border: 1px solid #fdb9cc;
    border-radius: 3px;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
    color: #4f4f4f;
    margin: 0px 3px;

  }

  .title-anchor {
    color: #888 !important;
    padding: 4px !important;
    margin: 0rem !important;
    height: auto !important;
    line-height: 1.2rem !important;
    font-size: .7rem !important;
    border-bottom: 1px dashed #eee;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .active {
    color: rgb(30, 144, 255) !important;
  }

  .nav-title {
    text-align: center;
    color: #888;
    border-bottom: 1px solid rgb(30, 144, 255);

  }

  .article-menu {
    font-size: 12px;
  }

  iframe {
    height: 34rem;
  }

  .detailed-content img {
    width: 100%;
    border: 1px solid #f3f3f3;
  }

  .title-level3 {
    display: none !important;
  }
</style>