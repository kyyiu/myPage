import { Menu } from '@arco-design/web-react';
import { IconApps, IconBulb } from '@arco-design/web-react/icon';
import { Link } from 'react-router-dom';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup

function createBlogMenuItem(compName: any, idx: string, title: string, children: any, icoName?: any,) {
  return {
    compName,
    idx,
    icoName,
    title,
    children
  }
}

export default {
  children: [
    createBlogMenuItem(SubMenu, '0', 'dataStruct', [
      createBlogMenuItem(MenuItem, '0_0', 'base', null),
      createBlogMenuItem(MenuItem, '0_1', 'application', null)
    ], IconApps),
    createBlogMenuItem(SubMenu, '1', 'Mx', [
      createBlogMenuItem(SubMenu, '1_0', 'Mx1', [
        createBlogMenuItem(MenuItemGroup, '1_0_0', 'Mx11', [
          createBlogMenuItem(Link, '/', '', [
            createBlogMenuItem(MenuItem, '1_0_0_0', 'Mx111', null)
          ]),
          createBlogMenuItem(Link, '/jl', '', [
            createBlogMenuItem(MenuItem, '1_0_0_1', 'Mx112', null)    
          ])
        ])
      ]),
      createBlogMenuItem(SubMenu, '1_1', 'Mx2', [
        createBlogMenuItem(MenuItemGroup, '1_1_0', 'Mx22', [
          createBlogMenuItem(Link, '/blog', '', [
            createBlogMenuItem(MenuItem, '1_1_0_0', 'Mx222', null)
          ]),
          createBlogMenuItem(Link, '/tool', '', [
            createBlogMenuItem(MenuItem, '1_1_0_1', 'Mx223', null)    
          ])
        ])
      ])
    ], IconBulb)
  ]
}