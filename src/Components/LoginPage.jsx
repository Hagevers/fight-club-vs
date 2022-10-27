import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, {useState, useEffect} from "react";
import '../Styling/LoginPage.css'
import toast, { Toaster } from 'react-hot-toast';

function LoginPage (props){
    var submitButton = document.getElementById('submit-button');
    const axios = require('axios');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [isChecked, setisChecked] = useState(false);
    const clickLogin = async (e) => {
        e.preventDefault();
        if(password.length < 8){
            setErrorMsg('PASSWORD MUST CONTAIN ATLEAST 8 DIGITS!');
            console.log(errorMsg);
            return;
        }else if(!email.includes('@') || !email.includes('.')){
            setErrorMsg('EMAIL IS NOT VALID!');
            console.log(errorMsg);
            console.log(email);
            return;
        }
        
        submitButton.setAttribute('disabled', '')
        const toastId = toast.loading('Loading...');
        const registerDetails = {
          'Email': email,
          'password': password
        };
        const res = await axios ({
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            url: 'https://powerful-anchorage-21815.herokuapp.com/login',
            data: JSON.stringify(registerDetails),
        });
        if (res.status === 200){
            if(res.data.msg){
                toast.error('Details provided are wrong!',{id: toastId});
                submitButton.removeAttribute('disabled');
                return;
            }
            const d = new Date()
            d.setTime(d.getTime() + 1800000);
            console.log(res);
            let expires = "expires="+ d.toUTCString();
            document.cookie = "token=Bearer " + res.data + ";" + expires;
            toast.success('Welcome!',{id: toastId});
            submitButton.removeAttribute('disabled');
            setEmail('');
            setPassword('');
            return window.location.href = '/';
        }
        else{
            toast.error('Details provided are wrong!',{id: toastId});
            submitButton.removeAttribute('disabled');
        }
      };
    return(
        <div className="fightclub__login">
            <Toaster />
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
                                <input type="text" onChange= {(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="fightclub__form-content_input-form__password">
                                <span>PASSWORD</span>
                                <input type="password" onChange= {(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div className="fightclub__form-content_input-form__remember">
                                <FormGroup>
                                    <FormControlLabel sx={{color:"rgb(156, 156, 156)"}} control={<Checkbox sx={{color: "#06BFFF",'&.Mui-checked': {color: "#06BFFF",}}}/>} label="Remember me" />
                                </FormGroup>
                                
                            </div>
                            <div className="fightclub__form-content_input-form__error">
                                {errorMsg}
                            </div>
                            <div className="fightclub__form-content_input-form__submit">
                                <input id="submit-button" type="submit" value="Login" onClick={clickLogin} />
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