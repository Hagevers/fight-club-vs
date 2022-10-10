import React, {useState, useEffect} from 'react';
import HomeMenu from './Components/HomeMenu';
import Dashboard from './Components/Dashboard';
import './App.css';
import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom";

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
      <BrowserRouter>
        <Routes>
          {user ? <Route exact path="/" element={<Dashboard/>}/> : <Route exact path="/" element={<HomeMenu/>}/>}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
