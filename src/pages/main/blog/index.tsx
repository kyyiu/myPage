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
  }, [])
}

function BlogPage() {

  const [collapsed, setCollapsed] = useState(true)


  const handleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return <Layout>
    <MyHeader showWhichItem="2" />
    <Layout>
      <Sider collapsed={collapsed}
        onCollapse={handleCollapsed}
        collapsible
        trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}>
        <BlogSider />
      </Sider>
      <Content>
        <Outlet></Outlet>
        {/*
        1 ?
        <div style={{height: 500, overflow: 'hidden'}} dangerouslySetInnerHTML={{__html:  ht}}></div>
        :
        <iframe style={{overflow: 'hidden'}} srcDoc={ht} width={'100%'} height={'100%'}></iframe>
      */}

      </Content>
    </Layout>
  </Layout>
}
export default BlogPage