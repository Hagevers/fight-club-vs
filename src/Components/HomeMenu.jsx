import React, {useState, useRef} from "react";
import '../Styling/HomeMenu.css';
import logo from '../Styling/smallLogo.PNG';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => (
  <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#Join">About</a></p>
    <p><a href="#Prizes">Prizes</a></p>
    <p><a href="#Contact">Contact</a></p>
  </>
)

function HomeMenu (){
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
      <div className="fightclub__navbar">
        <div className="fightclub__navbar-links">
          <div className="fightclub__navbar-links_logo">
            <img src={logo} alt= "logo" />
          </div>
          <div className="fightclub__navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className="fightclub__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
        <div className="fightclub__navbar-menu">
          {toggleMenu 
          ? <CloseIcon color="#fff" size={"27px"} onClick={() => setToggleMenu(false)}/>
          : <MenuIcon color="#fff" size={"27px"} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="fightclub__navbar-menu_container scale-up-center">
            <div className="fightclub__navbar-menu_container-links">
              <Menu />
              <div className="fightclub__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
  );
}
export default HomeMenu;