import React from 'react';

import { Menu } from '@arco-design/web-react';

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
        ...cEle.config
      },
      ...createBlogMenu(cEle))
  })
}


function BlogSider(props: {pathRoute: any}) { 

  const {
    pathRoute
  } = props
  console.log('blogsider_render')
  return <div
  style={{
    height: '100%'
  }}
>
  <Menu
    style={{ width: 200, height: '100%' }}
  >
    {
      createBlogMenu(pathRoute)
    }
  </Menu>
</div>
}

export default BlogSider