import React, {useState} from "react";
import '../Styling/LoginPage.css'
import Logo from '../Styling/logo.png'

function LoginPage (props){
    const axios = require('axios')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLoginSubmit = function(e){
        const loginDetails = {
            Email: email,
            password: password
        }
        e.preventDefault()
        axios.post("http://localhost:5000/app/signIn", loginDetails)
        .then(response => console.log(response.data))
        setEmail('')
        setPassword('')
    }
    return(
        <form className={"active All-Login" } onSubmit = {handleLoginSubmit}>
            <div className="Login-Header">
                <img src={Logo} name="Logo" onClick={props.onLogoClick}/>
            </div>
            <div className="Login-Form">
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="שם משתמש" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="סיסמא" />
                <input type="submit" value="התחבר" />
            </div>
            <div className="Forgot">
                <span>שכחתי סיסמא</span>
            </div>
      </form>
    );
}

export default LoginPage;