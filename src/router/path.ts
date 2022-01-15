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
    createBlogMenuItem(SubMenu, '1', 'translate', [
      createBlogMenuItem(SubMenu, '1_0', 'webrix', [
        createBlogMenuItem(MenuItemGroup, '1_0_0', 'comp', [
          createBlogMenuItem(Link, '/', '', [
            createBlogMenuItem(MenuItem, '1_0_0_0', 'c1', null)
          ]),
          createBlogMenuItem(Link, '/jl', '', [
            createBlogMenuItem(MenuItem, '1_0_0_1', 'c2', null)    
          ])
        ])
      ]),
      createBlogMenuItem(SubMenu, '1_1', 'axios', [
        createBlogMenuItem(MenuItemGroup, '1_1_0', 'main', [
          createBlogMenuItem(Link, '/blog/1', '', [
            createBlogMenuItem(MenuItem, '1_1_0_0', 'm1', null)
          ]),
          createBlogMenuItem(Link, '/blog/2', '', [
            createBlogMenuItem(MenuItem, '1_1_0_1', 'm2', null)    
          ])
        ])
      ])
    ], IconBulb)
  ]
}