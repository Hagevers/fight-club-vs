import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeMenu from './Components/HomeMenu';
import Dashboard from './Components/Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <HomeMenu />
      <Dashboard />
  </React.StrictMode>
);
