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
  IconStar
} from '@arco-design/web-react/icon'
import Footer from '@/components/footer'

// 常量区域
import {
  headerItems
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
      <div className='layout-basic-demo'>
        <Layout style={{ height: '100%' }}>
          <Header>
            <Menu mode={'horizontal'}  defaultSelectedKeys={['0']} >
              {
                // key 是 string，在这个组件中要是，不然menu父组件监听不到
                headerItems.map((ele, idx) => {
                  return (
                    <MenuItem key={String(idx)}>{ele}</MenuItem>
                  )
                })
              }
            </Menu>

          </Header>
          <Content onClick={changeTheme}>
            <Skeleton
              loading={isLoading}
              animation
              image
              text
              >
              <Typography.Title></Typography.Title>
              <Image></Image>
            </Skeleton>
          </Content>
          <Footer />
        </Layout>
      </div>
    </Fragment>
  );
}

export default App;
