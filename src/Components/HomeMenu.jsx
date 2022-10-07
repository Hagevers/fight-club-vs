import React, {useState, useRef} from "react";
import '../Styling/HomeMenu.css';
import LoginPage from './LoginPage'
import RegisterButton from "./RegisterButton";
import SmallLogo from '../Styling/smallLogo.PNG'
import { CSSTransition } from "react-transition-group";
import RegisterPage from "./RegisterPage";

function HomeMenu (){
  const [showReg, setShowReg] = useState(false);
  const [showRegButton, setShowButton] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const refReg = useRef(null);
  const refLog = useRef(null);
  const refLoad = useRef(null);
  const [showLoader, setShowLoader] = useState(false);
  const handleLoginClick = () =>{
    setShowLogin(!showLogin)
    if (showReg){setShowReg(false)}
  };
  const handleLoader = () => {
    setShowLoader(!showLoader);
    if (showLogin) {setShowLogin(false)}
    if (showReg) {setShowReg(false)}
    setShowButton(false);
  }
  const stopLoader = () => {
    setShowLoader(false);
    //setShowButton(true);
  }
  return (
      <div>
          <div>
            <ul> 
                <li onClick={handleLoginClick}><a href='#'><span>Login</span></a></li>
                <li><a href="#HOME">Instruction</a></li>
                <li><a href="#HOME">Support</a></li>
                <li><a href="#HOME">Prizes</a></li>
                <li><a href="#HOME">FaceBook</a></li>
                <li><a href="#HOME">IG</a></li>
                <li className='right'><img src={SmallLogo} /></li>
            </ul>
          </div>
          <div>
            {showRegButton && (<RegisterButton onClick={ () => setShowReg(true)} />) }
            {showLogin ? null : <CSSTransition
            in={showReg}
            nodeRef={refReg}
            timeout={100}
            classNames='income'
            unmountOnExit
            onEnter={()=>setShowButton(false)}
            onExited={() => setShowButton(true)}
            >
              <div ref={refReg} dismissible>
                <RegisterPage stopLoader={stopLoader} showLoader={handleLoader} onClick={ ()=> setShowReg(false) }/>
              </div>
            </CSSTransition>}
            <CSSTransition
            in={showLogin}
            nodeRef={refLog}
            timeout={100}
            classNames='logcome'
            unmountOnExit
            onEnter={()=>setShowButton(false)}
            onExited={() => setShowButton(true)}
            >
              <div ref={refLog} dismissible>
                <LoginPage stopLoader={stopLoader} showLoader={handleLoader} onClick = { handleLoginClick }/>
              </div>
            </CSSTransition>
          </div>
          <CSSTransition
            in={showLoader}
            nodeRef={refLoad}
            timeout={100}
            classNames='load'
            unmountOnExit
            onEnter={()=>setShowButton(false)}
            >
              <div ref={refLoad} dismissible  class="loader-wrap">
                <div class="loader">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
          </CSSTransition>
      </div>
  );
}
export default HomeMenu;