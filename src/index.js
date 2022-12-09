import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './Components/Dashboard';
import App from './App';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Confirm from './Components/Confirm';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<App />} />
          <Route path='confirm' element={<Confirm />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  // </React.StrictMode>
);
