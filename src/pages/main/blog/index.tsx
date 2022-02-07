import React, { useEffect, useState } from "react";
import { Layout } from '@arco-design/web-react';
import { useRequest } from "ahooks";
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import { Routes, Route, Outlet } from "react-router-dom";

import blogmenu from '@/router/path'
import BlogSider from "@/components/blogSider";

import ht from '../../sub/x1'

import './index.scss'

// import marked from 'marked'
// import hljs from 'highlight.js'
// import 'highlight.js/styles/monokai-sublime.css'

// const renderer = new marked.Renderer()
// // 配置marked
// marked.setOptions({
//   renderer,
//   // 启动类似github的样式
//   gfm: true,
//   // 是否严格markdown，false会进行错误的markdown写法调整
//   pedantic: false,
//   // 是否忽略html
//   sanitize: false,
//   // 是否允许输出表格，github的样式(需要开启gfm)
//   tables: true,
//   // 是否支持github的换行符(需要开启gfm)
//   breaks: false,
//   // 自动渲染列表
//   smartLists: true,
//   // 如何进行代码高亮
//   highlight: function(code) {
//     return hljs.highlightAuto(code).value
//   }
// })

// const html = marked('markdown_code')

const Sider = Layout.Sider;
const Content = Layout.Content
const Header = Layout.Header

const useDidMount = (setCur: Function, getData: Function) => {
  useEffect(() => {
    setCur('2')
    getData()
  }, [])
}

const req = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('成功');
      } else {
        reject(new Error('失败'));
      }
    }, 1000);
  } )
}

function BlogPage(props: any) {
  
  const { loading, run } = useRequest(req, {
    manual: true,
    onSuccess: res => {
      console.log(res)
    },
    onError: err => {
      console.log(err)
    }
  })
  useDidMount(props.setCur, run)
  const [collapsed, setCollapsed] = useState(true)


  const handleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return <Layout className='layout-collapse-demo'>
    <Sider collapsed={collapsed}
      onCollapse={handleCollapsed}
      collapsible
      trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}>
      <BlogSider pathRoute={blogmenu}/>
    </Sider>
    
      <Layout>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
      {/*
      1 ?
      <div style={{height: 500, overflow: 'hidden'}} dangerouslySetInnerHTML={{__html:  ht}}></div>
      :
      <iframe style={{overflow: 'hidden'}} srcDoc={ht} width={'100%'} height={'100%'}></iframe>
    */}
  </Layout>
}
export default BlogPage