// 框架区域
import { Fragment, useCallback, useEffect, useMemo, useState, Suspense } from 'react';
import { Route, Routes, useLocation, useParams, Navigate } from 'react-router-dom'
// 组件区域
import {
  Layout,
  BackTop
} from '@arco-design/web-react'

import MyHeader from './components/header';
import Footer from '@/components/footer'
import Home from './pages/Home'
import JL from '@/pages/main/jl'
import Blog from '@/pages/main/blog'
import Tool from '@/pages/main/tool'
import MyTimeLine from './pages/main/timeLine';

// import BlogPanel from '@/components/blogPanel'
import BlogPanelTemp from '@/components/blogPanelTemp'
import MovableBase from '@/components/webrix_exp/movable/base';
import WebrixPage from './pages/main/webrixPage';
import WritePage from './pages/main/writePage';
// 常量区域


// 样式区域
import './App.css';
import MyLoading from './components/loading';

const Content = Layout.Content;

const baseItemUrlName = ['/jl', '/blog', '/tool', '/time_line']

function TemporaryLoading() {
  const [cur, setC] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setC(!cur)
    }, 1500)
  }, [])
  if (cur) {
    return <MyLoading />
  }
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: '14px' }}>
    <div className='typing_cn'>
      查看左侧内容——
      <a href='https://blog.csdn.net/kyyius'>点击这里看看别的</a>
    </div>
  </div>
}


function App() {
  const [curNavItem, setCurNavItem] = useState('0')

  useEffect(() => {
    // 设置黑暗主题
    // document.body.setAttribute('arco-theme', 'dark')
    // 每隔一天（24小时）刷新页面
    function refreshEveryOtherDay() {
      const LAST_REFRESH_KEY = 'lastRefreshDate';
      const ONE_DAY = 24 * 60 * 60 * 1000; // 24小时毫秒数

      // 获取上次刷新日期
      let lastRefresh = localStorage.getItem(LAST_REFRESH_KEY);
      const now = Date.now();

      if (!lastRefresh) {
        // 第一次访问，记录时间并刷新（可选）
        localStorage.setItem(LAST_REFRESH_KEY, now);
        // location.reload(); // 如需立即刷新取消注释
      } else {
        // 判断是否超过24小时
        if (now - parseInt(lastRefresh) >= ONE_DAY) {
          localStorage.setItem(LAST_REFRESH_KEY, now);
          window.location.reload();
        }
      }
    }

    // 执行
    refreshEveryOtherDay();
  }, [])

  let {
    pathname
  } = useLocation()
  pathname = pathname.slice()

  const memoHeader = useMemo(() => {
    return <MyHeader showWhichItem={curNavItem}></MyHeader>
  }, [curNavItem])

  return (
    <Fragment>
      <Layout style={{ height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }} className={'main_app'}>
        <BackTop
          visibleHeight={30}
          target={() => document.querySelector('.main_app')}
        />
        {
          pathname === '/' || baseItemUrlName.find(ele => {
            return pathname.indexOf(ele) > -1
          }) ?
            memoHeader
            :
            null
        }
        <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
          <Content className={'main_content'}>
            {/* <Routes>
            <Route path='home' element={<H/>}></Route>
          </Routes> */}

            <Routes>
              <Route path='/' element={<Home setCur={setCurNavItem} />}></Route>
              <Route path='jl' element={<JL setCur={setCurNavItem} />}></Route>
              <Route path='blog' element={<Blog setCur={setCurNavItem} />}>
                <Route index element={<TemporaryLoading />}></Route>
                <Route path=":id" element={<BlogPanelTemp key={Math.random()} />}></Route>
                {/* <Route path=":id" element={<BlogPanel key={Math.random()}/>}></Route>
              <Route path=":id/:pages" element={<BlogPanel key={Math.random()}/>}></Route> */}
              </Route>
              <Route path='tool' element={<Tool setCur={setCurNavItem} />}></Route>
              <Route path='time_line' element={<MyTimeLine setCur={setCurNavItem} />}></Route>
              {
                // <Route path='webrix' element={<WebrixPage/>}>
                //   <Route index element={<div>在线尝鲜webrix</div>}></Route>
                //   <Route path="movable/base" element={<MovableBase/>}></Route>
                // </Route>
              }
              <Route path='write' element={<WritePage />}>
              </Route>
              <Route path='test' element={<T />}>
              </Route>
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Routes>
          </Content>
          <Footer />
        </div>
      </Layout>
    </Fragment>
  );
}

function T() {
  const [t, st] = useState([{ id: 1 }, { id: 1 }])
  function c() {
    const m = Math.random()
    st([{ id: m }, { id: m }])
  }
  return <>
    <div onClick={c}>测试</div>
    {
      t.map(e => {
        return <div key={e.id}>{e.id}</div>
      })
    }
  </>
}

export default App;
