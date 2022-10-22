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
        // <div className="fightclub__login section__padding">
        //     <div className="fightclub__login-content__title">
        //         <h1>SIGN IN</h1>
        //     </div>
        //     <div className="fightclub__login-content">
        //         <div className="fightclub__login-content__form">
        //             <span>SIGN IN WITH EMAIL</span>
        //             <input type="text" />
        //             <span>PASSWORD</span>
        //             <input type="password" />
        //             <div className="fightclub__login-content__form-submit">
        //                 <input type="submit" />
        //             </div>
        //             <div className="fightclub__login-content__form-error">
        //             </div>
        //             <a href="#nothing" className="fightclub__login-content__form-forgot">Cannot sign in</a>
        //         </div>
        //         <div className="fightclub__login-social">
        //             asdasd
        //         </div>
        //     </div>
        // </div>
        <div className="fightclub__login">
            <div className="fightclub__login-container">
                <div className="fightclub__login-content">
                    <div className="fightclub__form-title">
                        <div className="fightclub__form-title__text">
                            SIGN IN
                        </div>
                    </div>
                    <div className="fightclub__form-content">
                        <div className="fightclub__form-content_input-form">
                            <div className="fightclub__form-content_input-form__email">
                                <span>LOGIN WITH EMAIL</span>
                                <input type="text" />
                            </div>
                            <div className="fightclub__form-content_input-form__password">
                                <span>PASSWORD</span>
                                <input type="password" />
                            </div>
                            <div className="fightclub__form-content_input-form__error">
                                ERROR!
                            </div>
                            <div className="fightclub__form-content_input-form__submit">
                                <input type="submit" value="Login" />
                            </div>
                            <div className="fightclub__form-content_input-form__forgot">
                                <a href="#forgot">FORGOT PASSWORD</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;