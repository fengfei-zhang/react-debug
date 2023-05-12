/*
 * @Author: zhangfengfei
 * @Date: 2023-05-12 16:01:42
 * @LastEditTime: 2023-05-12 16:45:40
 * @LastEditors: zhangfengfei
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

// ReactDOM.unstable_createRoot(root).render(<App />); // concurrent mode
