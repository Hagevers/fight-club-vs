import React, {useState, useEffect} from 'react';
import HomeMenu from './Components/HomeMenu';
import Dashboard from './Components/Dashboard';
import './App.css';
import LandingOpener from './Components/LandingOpener';
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";
import About from './Components/About';
import Prizes from './Components/Prizes';

function App() {
  const [user, setUser] = useState(false);
  const getCookie = (cname) =>{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  useEffect(()=>{
    if(getCookie('token')){
      setUser(true)
    }else{
      setUser(false)
    }
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
