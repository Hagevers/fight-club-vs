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
  const handleOnSubmit = async (e) => {
    props.showLoader()
    const registerDetails = {
      NickName: NickName,
      Email: Email,
      password: password
    }
    e.preventDefault()
    const res = await axios ({
      method: 'POST',
      headers:{ 'Content-Type': 'application/json'},
      url: 'api/reg',
      data: JSON.stringify(registerDetails),
      });
      if (res.status === 200){
        alert('User Registerd!');
        props.stopLoader();
        window.location.reload();
        console.log(res);
      }
      else{
        alert('User is already exist!')
        props.stopLoader();
        window.location.reload();
      }
      setNickName('');
      setEmail('');
      setPassword('');
      }
  return(
    <form className="All-Register" onSubmit={handleOnSubmit}>
      <div className="Register-Header">
        <img src={Logo} name="Logo" onClick={props.onClick}/>
      </div>
      <div className="Register-Form">
        <input type="text" value={NickName} onChange={(e) => setNickName(e.target.value)} placeholder="Nickname" />
        <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="submit" value="Register"/>
      </div>
      <div className="Forgot">
        <span>Forgot password</span>
      </div>
    </form>
  )
}
export default RegisterPage;