import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Layout, Menu, Message, Breadcrumb, } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft, IconApps, IconBulb, IconBug } from '@arco-design/web-react/icon';

import BlogSider from "../../../components/blogSider";

import './index.scss'

const Sider = Layout.Sider;

const useDidMount = (setCur: any) => {
  useEffect(() => {
    setCur('2')
  }, [])
}

function BlogPage(props: any) {

  const [collapsed, setCollapsed] = useState(true)

  useDidMount(props.func)

  const handleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return <Layout>
    <Sider collapsed={collapsed} 
    onCollapse={handleCollapsed} 
    collapsible 
    trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}>
      <BlogSider/>
    </Sider>
  </Layout>
}
export default BlogPage