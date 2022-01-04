import React, { Fragment, useEffect, useState } from "react";
import { Layout, Menu, Message, Breadcrumb,  } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft, IconApps, IconBulb, IconBug } from '@arco-design/web-react/icon';

import './index.scss'

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const useDidMount = (setCur: any) => {
  useEffect(() => {
    setCur('2')
  }, [])
}

function BlogPage(props: any) {

  const [collapsed, setcollapsed] = useState(true)

  useDidMount(props.func)

  const handleCollapsed = () => {
    setcollapsed(!collapsed)
  };

  return <div
  className='menu-demo'
  style={{
    height: 600,
  }}
>
  <Menu
    mode="vertical"
    style={{ width: 200, height: '100%' }}
    hasCollapseButton
    defaultOpenKeys={['0']}
    defaultSelectedKeys={['0_1']}
  >
    <SubMenu
      key='0'
      title={
        <>
          <IconApps /> Navigation 1
        </>
      }
    >
      <MenuItem key='0_0'>Menu 1</MenuItem>
      <MenuItem key='0_1'>Menu 2</MenuItem>
      <MenuItem key='0_2' disabled>
        Menu 3
      </MenuItem>
    </SubMenu>
    <SubMenu
      key='1'
      title={
        <>
          <IconBug /> Navigation 2
        </>
      }
    >
      <MenuItem key='1_0'>Menu 1</MenuItem>
      <MenuItem key='1_1'>Menu 2</MenuItem>
      <MenuItem key='1_2'>Menu 3</MenuItem>
    </SubMenu>
    <SubMenu
      key='2'
      title={
        <>
          <IconBulb /> Navigation 3
        </>
      }
    >
      <MenuItemGroup key='2_0' title='Menu Group 1'>
        <MenuItem key='2_0_0'>Menu 1</MenuItem>
        <MenuItem key='2_0_1'>Menu 2</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup key='2_1' title='Menu Group 1'>
        <MenuItem key='2_1_0'>Menu 3</MenuItem>
        <MenuItem key='2_1_1'>Menu 4</MenuItem>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
</div> 
}
export default BlogPage