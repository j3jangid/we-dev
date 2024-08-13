import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CommonContextProvider from './Components/ContextDataFol/CommonContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <CommonContextProvider>
        <App />
      </CommonContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
