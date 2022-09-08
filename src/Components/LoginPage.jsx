import React from "react";
import '../Styling/LoginPage.css'
import Logo from '../Styling/logo.png'

function LoginPage (props){
    return(
        <form className={"active All-Login"}>
            <div className="Login-Header">
                <img src={Logo} name="Logo" onClick={props.onLogoClick}/>
            </div>
            <div className="Login-Form">
                <input type="text" placeholder="שם משתמש" />
                <input type="password" placeholder="סיסמא" />
                <input type="submit" value="התחבר" />
            </div>
            <div className="Forgot">
                <span>שכחתי סיסמא</span>
            </div>
      </form>
    );
}

export default LoginPage;