import React, {useState, useRef} from 'react';
import '../Styling/RegisterButton.css';
import RegisterPage from './RegisterPage';
import { CSSTransition } from "react-transition-group";

function RegisterButton(props){
  return(
    <div>
      <div className="HomeWrapper">
        <div className="para">
          <p>Build the strongest army</p>
          <p>And join the Fight Club</p>
        </div>
        <div className="div-btn">
          <button className="Reg-Btn" onClick={props.onClick}>Start Now</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterButton;
