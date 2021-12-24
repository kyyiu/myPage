import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

// 组件区域
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// 样式区域
import './index.css';
import '@arco-design/web-react/dist/css/arco.css';
// import '@arco-design/web-react/dist/css/index.less'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
