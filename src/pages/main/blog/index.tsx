import React, { useEffect, useState } from "react";
import { Layout } from '@arco-design/web-react';
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';

import BlogSider from "../../../components/blogSider";

import ht from '../../sub/x1'

import './index.scss'

const Sider = Layout.Sider;
const Content = Layout.Content

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
    <Content>
      {
        1 ?
        <div style={{height: 500, overflow: 'hidden'}} dangerouslySetInnerHTML={{__html:  ht}}></div>
        :
        <iframe style={{overflow: 'hidden'}} srcDoc={ht} width={'100%'} height={'100%'}></iframe>
      }
      
    </Content>
  </Layout>
}
export default BlogPage