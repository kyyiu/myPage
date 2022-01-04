import { Layout, Menu } from '@arco-design/web-react';
import { IconApps, IconBulb, IconBug } from '@arco-design/web-react/icon';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup

function BlogSider(props: any) { 


  return <div
  className='menu-demo'
  style={{
    height: 600,
  }}
>
  <Menu
    style={{ width: 200, height: '100%' }}
    defaultOpenKeys={['0']}
    defaultSelectedKeys={['0_1']}
  >
    <SubMenu
      key='0'
      title={
        <>
          <IconApps /> 数据结构与算法
        </>
      }
    >
      <MenuItem key='0_0'>基础</MenuItem>
      <MenuItem key='0_1'>应用</MenuItem>
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
        <MenuItemGroup key='2_0_0' title="mg11">
          <MenuItem key='2_0_0_0'>Menu 1</MenuItem>
          <MenuItem key='2_0_0_1'>Menu 2</MenuItem>
        </MenuItemGroup>
        <MenuItemGroup  key='2_0_1' title="mg12">
          <MenuItem key='2_0_1_0'>Menu 1</MenuItem>
          <MenuItem key='2_0_1_1'>Menu 2</MenuItem>
        </MenuItemGroup>
      </MenuItemGroup>
      <MenuItemGroup key='2_1' title='Menu Group 1'>
        <MenuItem key='2_1_0'>Menu 3</MenuItem>
        <MenuItem key='2_1_1'>Menu 4</MenuItem>
      </MenuItemGroup>
    </SubMenu>
    <SubMenu key='3' title={
      <>
        <IconBulb /> 标题4
      </>
    }>
      <SubMenu key='3_0' title={
        <>
          <IconBulb /> 标题4_3
        </>
      }>
        <MenuItemGroup key='3_0_0' title="标题xx">
          <MenuItem key='3_0_0_0'>标题xx1</MenuItem>
          <MenuItem key='3_0_0_1'>标题xx2</MenuItem>
        </MenuItemGroup>
      </SubMenu>
    </SubMenu>
  </Menu>
</div>
}

export default BlogSider