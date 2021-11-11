import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Home from './pages/Home'
import H from './pages/main/h'
import B from './pages/sub/b'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/a" element={<Home/>}></Route>
        <Route path="/b" element={<H/>}></Route>
        <Route path="/c" element={<B/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
