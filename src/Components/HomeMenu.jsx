import React, {useState, useRef} from "react";
import '../Styling/HomeMenu.css';
import logo from '../Styling/smallLogo.PNG';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#prizes">Prizes</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)

function HomeMenu (){
  const [current, setCurrent] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
      <div className="fightclub__navbar">
        <div className="fightclub__navbar-links">
          <div className="fightclub__navbar-links_logo">
            <img src={logo} alt= "logo" />
          </div>
          <div className="fightclub__navbar-links_container">
            <Menu/>
          </div>
        </div>
        <div className="fightclub__navbar-sign">
          <p><a href="/login">Sign in</a></p>
          <a href="/register"><button type="button">Sign up</button></a>
        </div>
        <div className="fightclub__navbar-menu">
          {toggleMenu 
          ? <CloseIcon sx={{color:"#fff"}} size={"27px"} onClick={() => setToggleMenu(false)}/>
          : <MenuIcon sx={{color:"#fff"}} size={"27px"} onClick={() => setToggleMenu(true)} />
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