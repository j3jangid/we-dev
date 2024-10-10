import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CommonContextProvider } from './Context/StartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CommonContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CommonContextProvider>
);

