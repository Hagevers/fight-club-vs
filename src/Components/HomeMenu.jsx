import React, {useState, useRef} from "react";
import '../Styling/HomeMenu.css';
import LoginPage from './LoginPage'
import RegisterButton from "./RegisterButton";
import SmallLogo from '../Styling/smallLogo.PNG'
//import { CSSTransition } from "react-transition-group";

function HomeMenu (){
  const [seen, setSeen] = useState(true);
  const [showLogin, setShowLogin] = useState(false)
  const nodeRef = useRef(null);
  return (
      <div>
          <div>
          <ul> 
              <li onClick={() => setShowLogin(!showLogin)}><a href='#'><span>התחבר</span></a></li>
              <li><a href="#HOME">הוראות</a></li>
              <li><a href="#HOME">תמיכה</a></li>
              <li><a href="#HOME">פרסים</a></li>
              <li><a href="#HOME">FaceBook</a></li>
              <li><a href="#HOME">IG</a></li>
              <li className='left'><img src={SmallLogo} /></li>
          </ul>
          </div>
          <RegisterButton />
          {/* <div>
              <CSSTransition
                in={showLogin}
                timeout={300}
                unmountOnExit
                nodeRef={nodeRef}
                classNames='fade'
                onEnter={() => setSeen(false)}
                onExited={() => setSeen(true)}>
                <LoginPage variant="primary" dismissible ref={nodeRef} onClose={() => setShowLogin(false)} onLogoClick={() => setShowLogin(false)}/>
              </CSSTransition>
              {seen && (<RegisterButton />) }
              { <CSSTransition
                in={seen}
                timeout={300}
                classNames='RegisterPageFade'>
                
              </CSSTransition> }
          </div> */}
      </div>
  );
}
export default HomeMenu;