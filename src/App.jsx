import React, {useState, useEffect, useRef } from 'react';
import HomeMenu from './Components/HomeMenu';
import Dashboard from './Components/Dashboard';
import './App.css';
import LandingOpener from './Components/LandingOpener';
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";
import About from './Components/About';
import Prizes from './Components/Prizes';

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = document.cookie && document.cookie.split('=')[1];
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);
  return (
    <div>
      <div className='gradient__bg'>
        <HomeMenu />
        <LandingOpener />
      </div>
      <About  />
      <Prizes />
      {/* <BrowserRouter>
        <Routes>
          {user ? <Route exact path="/" element={<Dashboard/>}/> : <Route exact path="/" element={<HomeMenu/>}/>}
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
