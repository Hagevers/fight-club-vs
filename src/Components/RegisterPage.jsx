import React, {Component, useState, setState} from 'react';
import '../Styling/RegisterPage.css';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../Styling/fight_club_l.png';

function RegisterPage (){
  const axios = require('axios');
  const [NickName, setNickName] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [avatar, setAvatar] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [stage, setStage] = useState(1);
  const handleNext = (e) => {
    e.preventDefault();
    if(stage === 1){
      const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(res.test(String(Email).toLowerCase())){
        setStage(stage + 1);
        setErrorMsg('');
        document.getElementById('Email').style.border = '1px solid #5b627c';
        return;
      }else{
        document.getElementById('Email').focus();
        document.getElementById('Email').style.border = '1px solid #c15755';
        setErrorMsg('EMAIL IS NOT VALID!');
        return;
      }
    }else if(stage === 2){
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
      if(pattern.test(String(password))){
        if(password === confirmPassword){
          setStage(stage +1 );
          setErrorMsg('');
          document.getElementById('password').style.border = '1px solid #5b627c';
          document.getElementById('confirmPassword').style.border = '1px solid #5b627c;';
          return;
        }else{
          document.getElementById('password').style.border = '1px solid #5b627c';
          setErrorMsg('PASSWORD DO NOT MATCH!');
          document.getElementById('confirmPassword').focus();
          document.getElementById('confirmPassword').style.border = '1px solid #c15755';
          return;
        }
      }else{
        document.getElementById('password').style.border = '1px solid #c15755';
        setErrorMsg('PASSWORD IS NOT VALID!');
        document.getElementById('password').focus();
        
        return;
      }
    }
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/;
    if (pattern.test(NickName)){
      document.getElementById('NickName').style.border = '1px solid #5b627c';
      setErrorMsg('');
      const registerDetails = {
        NickName: NickName,
        Email: Email,
        password: password
      }
      const toastId = toast.loading('Loading...');
      const res = await axios ({
        method: 'POST',
        headers:{ 'Content-Type': 'application/json'},
        url: 'https://powerful-anchorage-21815.herokuapp.com/register',
        data: JSON.stringify(registerDetails),
        });
        if (res.status === 200){
          if(res.data.msg){
            toast.error('User already exist',{id: toastId});
            return;
          }
          toast.success('Welcome! glad to have you',{id: toastId});
          console.log(res);
        }
        else{
          toast.error('Somthing went wrong, please try again in few minutes',{id: toastId});
        }
        setNickName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorMsg('');
        return window.location.href = '/login';
      }else{
        document.getElementById('NickName').style.border = '1px solid #c15755';
        setErrorMsg('NICK NAME IS NOT VALID!');
        document.getElementById('NickName').focus();
        return;
      }
  }
  const loadStage = (stage) =>{
      switch(stage){
        case 1: {
          return(
            <div className="fightclub__form-content_input-form__email scale-up-center">
              <span>ENTER YOUR EMAIL</span>
              <input type="text" value={Email} id="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
          )
        }
        case 2: {
          return (
            <div>
              <div className="fightclub__form-content_input-form__password scale-up-center">
                  <span>PASSWORD</span>
                  <input id='password' type="password" value={password} onChange= {(e)=>setPassword(e.target.value)}/>
              </div>
              <div className="fightclub__form-content_input-form__password scale-up-center">
                    <span>CONFIRM PASSWORD</span>
                    <input id="confirmPassword" type="password" value={confirmPassword} onChange= {(e)=>setConfirmPassword(e.target.value)}/>
              </div>
            </div>
          )
        }
        case 3: {
          return (
            <div className='scale-up-center'>
              <div className="fightclub__form-content_input-form__nickname">
                  <span>NICK NAME</span>
                  <input id='NickName' type="text" value={NickName} onChange= {(e)=>setNickName(e.target.value)}/>
              </div>
              <div className="fightclub__form-content_input-form__nickname">
                  <span>AVATAR</span>
                  <input id='Avatar' value={avatar} type="file" onChange= {(e)=>setAvatar(e.target.value)}/>
              </div>
            </div>
          )
      }
    }
  }
  return(
    <div className='fightclub__register'>
      <Toaster />
      <div className='fightclub__register-container'>
        <div className='fightclub__register-content'>
          <div className='logo_div'>
              <a href='/'><img src={logo} alt="Logo" className='logo_back' /></a>
          </div>
          <div className="fightclub__form-title">
              <div className="fightclub__form-title__text">
                  Register
              </div>
          </div>
          <form>
            <div className='fightclub__form-content'>
              <div className='fightclub__form-content_input-form'>
                {loadStage(stage)}
                <div className="fightclub__form-content_input-form__error">
                    {errorMsg}
                </div>
                <div className='fightclub__form-content_input-form__submit'>
                  <button onClick={stage==3 ? handleOnSubmit : handleNext}>{stage==3 ? <span>Register</span> : <span>Next</span>}</button>
                </div>
              </div>
              <div className='fightclub__form-content_login'>
                  <span>Already registered? <a href="/login">Start playing!</a></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default RegisterPage;