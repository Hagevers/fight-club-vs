import React, {useState, useEffect} from 'react';
import HomeMenu from './Components/HomeMenu';
import Dashboard from './Components/Dashboard';
import './App.css';
import LandingOpener from './Components/LandingOpener';
import About from './Components/About';
import Prizes from './Components/Prizes';
import VideoOpener from './Components/VideoOpener';

function App() {
  const [user, setUser] = useState(false);
  const {getCookie} = require('./Backend/getNickName');
  useEffect(()=>{
    if(getCookie('token')){
      setUser(true)
    }else{
      setUser(false)
    }
  }, [user]);
  return (
    <div>
      {!user ?
        <div>
            <div className='gradient__bg'>
              <VideoOpener />
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
