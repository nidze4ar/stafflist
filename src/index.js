import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <ConfigProvider locale={ruRU}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
