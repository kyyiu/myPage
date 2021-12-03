// 框架区域
import { Fragment, useEffect, useState } from 'react';

// 组件区域
import {
  Layout,
  Menu,
  Skeleton,
  Typography,
  Image
} from '@arco-design/web-react'
import {
  IconTiktokColor
} from '@arco-design/web-react/icon'
import Footer from '@/components/footer'

// 常量区域
import {
  headerItems,
  firstPageItems,
} from '@/constants/config'

// 样式区域
import './App.css';

const Header = Layout.Header;
const Content = Layout.Content;

const MenuItem = Menu.Item

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 设置黑暗主题
    // document.body.setAttribute('arco-theme', 'dark')
  }, [])

  const changeTheme = () => {
    setIsLoading(!isLoading)
    // document.body.setAttribute('arco-theme', 'dark')
  }

  return (
    <Fragment>
      <Layout style={{ height: '100%' }}>
        <Header>
          <Menu mode={'horizontal'} defaultSelectedKeys={['0']} >
            {
              headerItems.map((ele, idx) => <MenuItem key={String(idx)}> <IconTiktokColor /> {ele} </MenuItem>)
            }
          </Menu>
        </Header>
        <Content onClick={changeTheme}>

        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
