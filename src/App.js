// 框架区域
import { Fragment, useEffect, useMemo, useState } from 'react';
import { Route, Link, Routes, Outlet } from 'react-router-dom'
// 组件区域
import {
  Layout,
  Menu,
  Skeleton,
  Typography,
  Image
} from '@arco-design/web-react'
import {
  IconMenu,
  IconDriveFile,
  IconBook,
  IconTool
} from '@arco-design/web-react/icon'
import Footer from '@/components/footer'
import Home from './pages/Home'
import H from './pages/main/h'
import B from './pages/sub/b'
// 常量区域
import {
  headerItems,
  firstPageItems,
} from '@/constants/config'

// 样式区域
import './App.css';
import pics from '@/static/pics'

const Header = Layout.Header;
const Content = Layout.Content;

const MenuItem = Menu.Item

const headerItemIcoArr = [<IconMenu/>, <IconDriveFile/>, <IconBook/>, <IconTool/>]

const contentPath = ['/', 'home', 'b', 'c']

const contentComp = [<Home/>, <H/>, <B/>]

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

  const headerItemsIco = useMemo(() => {
    return headerItemIcoArr.map((ele, idx) => ({
      path: contentPath[idx],
      ico: ele
    }))
  }, [])

  const mainContent = useMemo(() => {
    return contentComp.map((ele, idx) => ({
      path: contentPath[idx+1],
      comp: ele
    }))
  }, [])
console.log(mainContent)
  return (
    <Fragment>
      <Layout style={{ height: '100%' }}>
        <Header>
          {
           <Menu mode={'horizontal'} defaultSelectedKeys={['0']} >
            {
              headerItems.map((ele, idx) => <MenuItem key={String(idx)}> 
                <Link to={headerItemsIco[idx].path}> {headerItemsIco[idx].ico} {ele}</Link>
              </MenuItem>)
            }
          </Menu>
          }
        </Header>
        <Content onClick={changeTheme}>
          {/* <Routes>
            <Route path='home' element={<H/>}></Route>
          </Routes> */}
          <div>嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻</div>
          <Outlet/>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
