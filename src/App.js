// 框架区域
import { Fragment } from 'react';

// 组件区域
import {
  Layout
} from '@arco-design/web-react'

// 常量区域
import {
  headerItems
} from '@/constants/config'

// 样式区域
import './App.css';

const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function App() {
  return ( 
    <Fragment>
      <div className='layout-basic-demo'>
      <Layout style={{height: '100%'}}>
        <Header>
          {
            headerItems.map((ele, idx) => {
              return (
                <div key={ele}>{ele}</div>
              )
            })
          }
        </Header>
        <Content>
          Content
          {
            Array(100).fill(0).map((ele, idx) => {
              return <div key={idx}>{ele}</div>
            })
          }
        </Content>
        <Footer>Footer</Footer>
      </Layout>
      </div>
    </Fragment>
  );
}

export default App;
