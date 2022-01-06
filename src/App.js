// 框架区域
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
// 组件区域
import {
  Layout
} from '@arco-design/web-react'

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

  useDidMount()

  return (
    <Fragment>
      <Layout style={{ height: '100%' }}>
        <Content>
          {/* <Routes>
            <Route path='home' element={<H/>}></Route>
          </Routes> */}
          
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='jl' element={<JL />}></Route>
            <Route path='blog' element={<Blog />}>
              <Route index element={<div>default</div>}></Route>
              <Route path="1" element={<div>111111111111111111</div>}></Route>
              <Route path="2" element={<div>222222222222222222</div>}></Route>
            </Route>
            <Route path='tool' element={<Tool />}></Route>
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Fragment>
  );
}

export default App;
