import React, { useEffect, useState } from "react";
import { Layout } from '@arco-design/web-react';
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import { Routes, Route, Outlet } from "react-router-dom";

import MyHeader from "@/components/header";
import BlogSider from "@/components/blogSider";

import ht from '../../sub/x1'

import './index.scss'

const Sider = Layout.Sider;
const Content = Layout.Content
const Header = Layout.Header

const useDidMount = (setCur: any) => {
  useEffect(() => {
    setCur('2')
  }, [])
}

function BlogPage(props: any) {
  useDidMount(props.setCur)

  const [collapsed, setCollapsed] = useState(true)


  const handleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return <Layout className='layout-collapse-demo'>
    <Sider collapsed={collapsed}
      onCollapse={handleCollapsed}
      collapsible
      trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}>
      <BlogSider />
    </Sider>
    
      <Layout style={{ padding: '0 24px' }}>
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