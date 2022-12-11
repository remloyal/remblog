import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './assets/css/index.less';
import './assets/font/iconfont.css';
import { startSakura } from './components/fullScreenFlower';
import {
  RecoilRoot,
} from 'recoil';
startSakura();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
