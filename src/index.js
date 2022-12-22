import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dashboard from './Components/Dashboard';
import App from './App';
import RegisterPage from './Components/RegisterPage';
import LoginPage from './Components/LoginPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Confirm from './Components/Confirm';
import AttackPlayer from './Components/AttackPlayer';
import { QueryClient, QueryClientProvider } from 'react-query';
import Card from './Components/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<App />} />
          <Route path='confirm' element={<Confirm />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='report/:id' element={<AttackPlayer />} />
          <Route path='card' element={<Card />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
  // </React.StrictMode>
);
