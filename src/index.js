import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginPage from './Components/LoginPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      {/* <HomeMenu />
      <Dashboard /> */}
      
      <BrowserRouter>
        <Routes>
          <Route path='' element={<App />} />
          <Route path='login' element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
