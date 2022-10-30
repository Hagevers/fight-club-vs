import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './Components/Dashboard';
import App from './App';
import LoginPage from './Components/LoginPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      {/* <HomeMenu />
      <Dashboard /> */}
      
      <BrowserRouter>
        <Routes>
          <Route path='' element={<App />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
