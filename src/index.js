import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomeMenu from './Components/HomeMenu';
import RegisterButton from './Components/RegisterButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <HomeMenu />
  </React.StrictMode>
);
