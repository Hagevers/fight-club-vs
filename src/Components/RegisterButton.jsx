import React, {useState, useRef} from 'react';
import '../Styling/RegisterButton.css';
import RegisterPage from './RegisterPage';
import { CSSTransition } from "react-transition-group";

function RegisterButton(){
  const [isOpen, setIsOpen] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const nodeRef = useRef(null);
  return(
    <div>
      <CSSTransition
        onEnter={() => setShowHome(false)}
        onExited={() => setShowHome(true)}
        unmountOnExit
        nodeRef={nodeRef}
        in={isOpen}
        timeout={300}
        classNames="my-node">
          <RegisterPage
            ref={nodeRef}
            onClose={() => setIsOpen(false)}
            dismissible
            isOpen = {() => setIsOpen(false)} />
      </CSSTransition>
      {/* {isOpen ? <RegisterPage isOpen = {() => setIsOpen(!isOpen)} /> : */}
      {showHome && (<div className="HomeWrapper">
        <div className="para">
          <p>הרכיבו את הצבא החזק ביותר</p>
          <p>והצטרפו למועדון הקרב</p>
        </div>
        <div className="div-btn">
          <button className="Reg-Btn" onClick={() => setIsOpen(true)}>התחילו עכשיו</button>
        </div>
      </div>)}
    {/* } */}
    </div>
  );
}

export default RegisterButton;
