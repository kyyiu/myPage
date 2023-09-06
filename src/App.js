// 框架区域
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
// 组件区域
import {
  Layout
} from '@arco-design/web-react'

import MyHeader from './components/header';
import Footer from '@/components/footer'
import Home from './pages/Home'
import JL from '@/pages/main/jl'
import Blog from '@/pages/main/blog'
import Tool from '@/pages/main/tool'

import BlogPanel from '@/components/blogPanel'
import MovableBase from '@/components/webrix_exp/movable/base';
import WebrixPage from './pages/main/webrixPage';
import WritePage from './pages/main/writePage';
// 常量区域


// 样式区域
import './App.css';

const Content = Layout.Content;

const baseItemUrlName = ['/jl', '/blog', '/tool']


function App() {
  const [curNavItem, setCurNavItem] = useState('0')

  useEffect(() => {
    // 设置黑暗主题
    // document.body.setAttribute('arco-theme', 'dark')
    console.log('挂载')
  }, [])

  let {
    pathname 
  } = useLocation()
  pathname = pathname.slice(0, 5)

  const memoHeader = useMemo(() => {
    return <MyHeader showWhichItem={curNavItem}></MyHeader>
  }, [curNavItem])

  return (
    <Fragment>
      <Layout style={{ height: '100%' }}>
        {
          pathname === '/' || baseItemUrlName.find(ele => {
            return pathname.indexOf(ele) > -1
          }) ? 
          memoHeader
          :
          null
        }
        <Content>
          {/* <Routes>
            <Route path='home' element={<H/>}></Route>
          </Routes> */}
          
          <Routes>
            <Route path='/' element={<Home setCur={setCurNavItem}/>}></Route>
            {/* <Route path='jl' element={<JL setCur={setCurNavItem}/>}></Route> */}
            <Route path='blog' element={<Blog setCur={setCurNavItem}/>}>
              <Route index element={<div>服务器已过期</div>}></Route>
              <Route path=":id" element={<BlogPanel key={Math.random()}/>}></Route>
              <Route path=":id/:pages" element={<BlogPanel key={Math.random()}/>}></Route>
            </Route>
            <Route path='tool' element={<Tool setCur={setCurNavItem}/>}></Route>
            {
              // <Route path='webrix' element={<WebrixPage/>}>
              //   <Route index element={<div>在线尝鲜webrix</div>}></Route>
              //   <Route path="movable/base" element={<MovableBase/>}></Route>
              // </Route>
            }
            <Route path='write' element={<WritePage/>}>
            </Route>
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
