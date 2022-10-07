import React, {useState, useEffect} from "react";
import '../Styling/LoginPage.css'
import Logo from '../Styling/logo.png'

function LoginPage (props){
    const axios = require('axios')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickName, setNickName] = useState([])
    const clickLogin = async (e) => {
        props.showLoader();
        const registerDetails = {
          'Email': email,
          'password': password
        };
        e.preventDefault();
        const res = await axios ({
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            url: 'api/login',
            data: JSON.stringify(registerDetails),
        });
        if (res.status === 200){
            alert('Welcome !')
            props.stopLoader();
            window.location.reload();
            const d = new Date()
            d.setTime(d.getTime() + 1800000);
            console.log(res);
            let expires = "expires="+ d.toUTCString();
            document.cookie = "token=" + res.data.token + ";" + expires;
        }
        else{
            alert('Details provided are wrong!');
            props.stopLoader();
            window.location.reload();
        }
        setNickName('');
        setEmail('');
        setPassword('');
      };
    return(
        <form className={"active All-Login" } onSubmit = {clickLogin}>
            <div className="Login-Header">
                <img src={Logo} name="Logo" onClick={props.onClick}/>
            </div>
            <div className="Login-Form">
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="submit" value="Login" />
            </div>
      </form>
    );
}

export default LoginPage;