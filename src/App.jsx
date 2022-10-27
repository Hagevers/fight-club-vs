import React, {useState, useEffect, useRef } from 'react';
import HomeMenu from './Components/HomeMenu';
import Dashboard from './Components/Dashboard';
import './App.css';
import LoginPage from './Components/LoginPage';
import LandingOpener from './Components/LandingOpener';
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";
import About from './Components/About';
import Prizes from './Components/Prizes';

function App() {
  const axios = require('axios');
  const [user, setUser] = useState(false);
  useEffect(() => {
    const res = axios
    .get('https://powerful-anchorage-21815.herokuapp.com/getCookie',{withCredentials: 'include'})
    .then(result=>{
        setUser(true)
    })
    .catch(err => console.log(err))
    // const loggedInUser = document.cookie && document.cookie.split('=')[1];
    // if (loggedInUser) {
    //   setUser(loggedInUser);
    // }
  }, []);
  return (
    <div>
      {!user ?
        <div>
            <div className='gradient__bg'>
              <HomeMenu />
              <LandingOpener />
            </div>
            <About  />
            <Prizes />
        </div>
      :
      <div>
        <Dashboard />
      </div>
      }
    </div>

  );
}

export default App;
