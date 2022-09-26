import React, {useState, useRef} from 'react';
import '../Styling/RegisterButton.css';
import RegisterPage from './RegisterPage';
import { CSSTransition } from "react-transition-group";

function RegisterButton(props){
  return(
    <div>
      <div className="HomeWrapper">
        <div className="para">
          <p>הרכיבו את הצבא החזק ביותר</p>
          <p>והצטרפו למועדון הקרב</p>
        </div>
        <div className="div-btn">
          <button className="Reg-Btn" onClick={props.onClick}>התחילו עכשיו</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterButton;
