import React from 'react';

import { Menu } from '@arco-design/web-react';
import { useParams } from 'react-router-dom';

function createBlogMenu(c: any): any {

  if (!Array.isArray(c.children)) {
    return c.title && c.title || ''
  }
  return c.children.map((cEle: any) => {
    console.log("WWW", cEle)
    return React.createElement(
      cEle.compName, 
      {
        key: cEle.idx, 
        title: cEle.icoName ? React.createElement(React.Fragment, null, React.createElement(cEle.icoName, null), cEle.title) : cEle.title,
        ...cEle.config
      },
      ...createBlogMenu(cEle))
  })
}


function BlogSider(props: {pathRoute: any}) { 
  const {id} = useParams()
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
    defaultSelectedKeys={[String(id)]}
  >
    {
      createBlogMenu(pathRoute)
    }
  </Menu>
</div>
}

export default BlogSider