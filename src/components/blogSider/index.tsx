import React from 'react';

import { Menu } from '@arco-design/web-react';

import blogMenu from '../../router/path'

function createBlogMenu(c: any): any {

  if (!Array.isArray(c.children)) {
    return c.title && c.title || ''
  }
  return c.children.map((cEle: any) => {
    return React.createElement(
      cEle.compName, 
      {
        key: cEle.idx, 
        title: React.createElement(React.Fragment, null, cEle.icoName ? React.createElement(cEle.icoName, null) : '', cEle.title),
        to: cEle.title ? null : cEle.idx
      },
      ...createBlogMenu(cEle))
  })
}


function BlogSider(props: any) { 

  return <div
  style={{
    height: 600
  }}
>
  <Menu
    style={{ width: 200, height: '100%' }}
  >
    {
      createBlogMenu(blogMenu)
    }
  </Menu>
</div>
}

export default BlogSider