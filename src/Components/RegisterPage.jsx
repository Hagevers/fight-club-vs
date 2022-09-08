import React, {Component, useState, setState} from 'react';
import Logo from '../Styling/logo.png'
import '../Styling/RegisterPage.css'
//import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
//import {fontAwesomeIcon} from '@fortawesome/react-fontawesome'

function RegisterPage (props){
    return(
      <form className="All-Register">
        <div className="Register-Header">
          <img src={Logo} name="Logo" onClick={props.isOpen}/>
        </div>
        <div className="Register-Form">
          <input type="text" placeholder="כינוי" />
          <input type="text" placeholder="אימייל" />
          <input type="password" placeholder="סיסמא" />
          <input type="submit" value="הרשם" />
        </div>
        <div className="Forgot">
          <span>שכחתי סיסמא</span>
        </div>
      </form>
    )
}
export default RegisterPage;