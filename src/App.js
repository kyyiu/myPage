// 框架区域
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Route, Link, Routes, Outlet } from 'react-router-dom'
// 组件区域
import {
  Layout,
  Menu,
  Skeleton,
  Typography,
  Image,
  Grid,
} from '@arco-design/web-react'
import {
  IconMenu,
  IconDriveFile,
  IconBook,
  IconTool
} from '@arco-design/web-react/icon'
import Footer from '@/components/footer'
import Home from './pages/Home'
import JL from '@/pages/main/jl'
import Blog from '@/pages/main/blog'
import Tool from '@/pages/main/tool'
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

const Row = Grid.Row
const Col = Grid.Col

const MenuItem = Menu.Item

const headerItemIcoArr = [<IconMenu />, <IconDriveFile />, <IconBook />, <IconTool />]

const contentPath = ['/', 'jl', 'blog', 'tool']

const useDidMount = () => {
  useEffect(() => {
    // 设置黑暗主题
    // document.body.setAttribute('arco-theme', 'dark')
    console.log('挂载')
  }, [])
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  // 1是亮背景
  const [curTheme, setCurTheme] = useState(true)


  useDidMount()

  const toggleTheme = () => {
    setCurTheme(!curTheme)
    document.body.setAttribute('arco-theme',curTheme ? 'dark' : 'lilght')
  }

  const headerItemsIco = useMemo(() => {
    return headerItemIcoArr.map((ele, idx) => ({
      path: contentPath[idx],
      ico: ele
    }))
  }, [])

  return (
    <Fragment>
      <Layout style={{ height: '100%' }}>
        <Menu mode={'horizontal'} defaultSelectedKeys={['0']} ellipsis={false}>
          <Row className={'w100'}>
            <Col span={10}>
              <MenuItem disabled className={'normal_cursor'}>
                <Image className={'normal_cursor'} style={{ height: '30px' }} src={pics.H} />
              </MenuItem>
              {
                headerItems.map((ele, idx) => <Link to={headerItemsIco[idx].path} key={String(idx)}><MenuItem key={String(idx)}>
                   {headerItemsIco[idx].ico} {ele}
                </MenuItem></Link>)
              }
            </Col>
            <Col span={0} flex='auto' className={'r2l'}>
              <MenuItem disabled className={'normal_cursor ico_row'}>
                {
                  curTheme ?
                  <IconMenu className={'normal_cursor'} onClick={toggleTheme} />
                  :
                  <IconBook className={'normal_cursor'} onClick={toggleTheme} />
                }
               </MenuItem>
            </Col>
          </Row>
        </Menu>
        <Content>
          {/* <Routes>
            <Route path='home' element={<H/>}></Route>
          </Routes> */}
          <div className='main_content'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='jl' element={<JL/>}></Route>
            <Route path='blog' element={<Blog/>}></Route>
            <Route path='tool' element={<Tool/>}></Route>
          </Routes>
          </div>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
