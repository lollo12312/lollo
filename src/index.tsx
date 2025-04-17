import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';

// 导入daisyUI的主题样式
// import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from './store/useThemeStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);