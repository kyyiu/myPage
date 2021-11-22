// 框架区域
import { Fragment, useEffect } from 'react';

// 组件区域
import {
  Layout,
  Menu
} from '@arco-design/web-react'
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
  useEffect(() => {
    // 设置黑暗主题
    // document.body.setAttribute('arco-theme', 'dark')
  }, [])

  const changeTheme = () => {
    document.body.setAttribute('arco-theme', 'dark')
  }

  return ( 
    <Fragment>
      <div className='layout-basic-demo'>
      <Layout style={{height: '100%'}}>
        <Header>
          <Menu mode={'horizontal'} defaultOpenKeys={['0']}>
            {
            headerItems.map((ele, idx) => {
              return (
                <MenuItem key={idx}>{ele}</MenuItem>
              )
            })
          }
          </Menu>
          
        </Header>
        <Content onClick={changeTheme}>
          Content
          {
            Array(100).fill(0).map((ele, idx) => {
              return <div key={idx}>{ele}</div>
            })
          }
        </Content>
        <Footer/>
      </Layout>
      </div>
    </Fragment>
  );
}

export default App;
