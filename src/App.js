// 框架区域
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
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
// 常量区域


// 样式区域
import './App.css';

const Content = Layout.Content;



const useDidMount = () => {
  useEffect(() => {
    // 设置黑暗主题
    // document.body.setAttribute('arco-theme', 'dark')
    console.log('挂载')
  }, [])
}



function App() {
  const [curNavItem, setCurNavItem] = useState('0')

  useDidMount()

  const memoHeader = useMemo(() => {
    return <MyHeader showWhichItem={curNavItem}></MyHeader>
  }, [curNavItem])

  return (
    <Fragment>
      <Layout style={{ height: '100%' }}>
        {
          memoHeader
        }
        <Content>
          {/* <Routes>
            <Route path='home' element={<H/>}></Route>
          </Routes> */}
          
          <Routes>
            <Route path='/' element={<Home setCur={setCurNavItem}/>}></Route>
            <Route path='jl' element={<JL setCur={setCurNavItem}/>}></Route>
            <Route path='blog' element={<Blog setCur={setCurNavItem}/>}>
              <Route index element={<div>default</div>}></Route>
              <Route path="1" element={<div>111111111111111111</div>}></Route>
              <Route path="2" element={<div>222222222222222222</div>}></Route>
            </Route>
            <Route path='tool' element={<Tool setCur={setCurNavItem}/>}></Route>
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
