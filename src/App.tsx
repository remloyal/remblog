import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, Space, ConfigProvider, theme, Layout } from 'antd';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
import Router from './router/index';

function App() {
   return <BrowserRouter>
    <Router />
  </BrowserRouter>
}

export default App
