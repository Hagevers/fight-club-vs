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
            url: 'https://powerful-anchorage-21815.herokuapp.com/login',
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
    //     <form className={"active All-Login" } onSubmit = {clickLogin}>
    //         <div className="Login-Header">
    //             <a href="/"><img src={Logo} name="Logo"/></a>
    //         </div>
    //         <div className="Login-Form">
    //             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    //             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
    //             <input type="submit" value="Login" />
    //         </div>
    //   </form>
        <div className="fightclub__login section__padding">
            <div className="fightclub__login-content__title">
                <h1>SIGN IN</h1>
            </div>
            <div className="fightclub__login-content">
                <div className="fightclub__login-content__form">
                    <span>SIGN IN WITH EMAIL</span>
                    <input type="text" />
                    <span>PASSWORD</span>
                    <input type="password" />
                    <div className="fightclub__login-content__form-submit">
                        <input type="submit" />
                    </div>
                    <div className="fightclub__login-content__form-error">
                        
                    </div>
                    <a href="#nothing" className="fightclub__login-content__form-forgot">Cannot sign in</a>
                </div>
                <div className="fightclub__login-social">
                    asdasd
                </div>
            </div>

        </div>
    );
}

export default LoginPage;