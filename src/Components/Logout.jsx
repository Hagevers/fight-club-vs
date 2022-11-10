import React from 'react'
import toast, { Toaster , resolveValue} from 'react-hot-toast'
import LogoutIcon from '@mui/icons-material/Logout';
import '../Styling/Dashboard.css'

function Logout() {

    const logoutF = () =>{
        const d = new Date();
        d.setTime(d.getTime() - 8880);
        let expires = "expires=" + d.toUTCString();
        document.cookie = 'token' + "=" + 'loggedOut' + ";" + expires + ";path=/";
        window.location.href="/"
    }
  return (
    <div className='lgot-btn-wrapper'>
        <h1>Are you sure you want to logout?</h1>
        <button className='lgot-btn' onClick={logoutF}>Logout</button>
    </div>
  )
}

export default Logout