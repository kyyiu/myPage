import logo from './logo.svg';
import './App.css';

import {
  Layout
} from '@arco-design/web-react'
import { Fragment } from 'react';

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function App() {
  return ( 
    <Fragment>
      <div className='layout-basic-demo'>
      <Layout style={{height: '100%'}}>
        <Header>Header</Header>
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
