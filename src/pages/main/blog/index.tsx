import React, { Fragment, useEffect } from "react";
import {
  Layout
} from '@arco-design/web-react'

const Sider = Layout.Sider

const useDidMount = (setCur: any) => {
  useEffect(() => {
    setCur('2')
  }, [])
}

function BlogPage(props: any) {
  useDidMount(props.func)
  return <Fragment>
    <Sider style={{height: '100%'}} collapsible>2222</Sider>
  </Fragment>
}

export default BlogPage