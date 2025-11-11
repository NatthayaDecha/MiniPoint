import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <App />   {/* ✅ ต้องใส่ตรงนี้ */}
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
);
