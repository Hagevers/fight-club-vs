import React, {useState} from "react";
import '../Styling/HomeMenu.css';
import LoginPage from './LoginPage'
import RegisterButton from "./RegisterButton";
import SmallLogo from '../Styling/smallLogo.PNG'

function HomeMenu (){
  const [seen, setSeen] = useState(false);
  return (
      <div>
          <div>
          <ul> 
              <li onClick={() => setSeen(!seen)}><a href='#'><span>התחבר</span></a></li>
              <li><a href="#HOME">הוראות</a></li>
              <li><a href="#HOME">תמיכה</a></li>
              <li><a href="#HOME">פרסים</a></li>
              <li><a href="#HOME">FaceBook</a></li>
              <li><a href="#HOME">IG</a></li>
              <li className='left'><img src={SmallLogo} /></li>
          </ul>
          </div>
          <div>
            {seen ? <LoginPage onLogoClick={() => setSeen(!seen)}/> : <RegisterButton />}
          </div>
      </div>
  );
}
export default HomeMenu;