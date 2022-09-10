import React, {Component, useState, setState} from 'react';
import Logo from '../Styling/logo.png'
import '../Styling/RegisterPage.css'
//import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
//import {fontAwesomeIcon} from '@fortawesome/react-fontawesome'

function RegisterPage (props){
  const axios = require('axios');
  const [NickName, setNickName] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleOnSubmit = function (e){
    const registerDetails = {
      NickName: NickName,
      Email: Email,
      password: password
    }
    e.preventDefault()
    axios.post("http://localhost:5000/app/signUp", registerDetails)
      .then(response => console.log(response.data))
    setNickName('')
    setEmail('')
    setPassword('')
  }
  return(
    <form className="All-Register" onSubmit={handleOnSubmit}>
      <div className="Register-Header">
        <img src={Logo} name="Logo" onClick={props.isOpen}/>
      </div>
      <div className="Register-Form">
        <input type="text" value={NickName} onChange={(e) => setNickName(e.target.value)} placeholder="כינוי" />
        <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="אימייל" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="סיסמא" />
        <input type="submit" value="הרשם" />
      </div>
      <div className="Forgot">
        <span>שכחתי סיסמא</span>
      </div>
    </form>
  )
}
export default RegisterPage;