import React, {Component, useState, setState} from 'react';
import '../Styling/RegisterPage.css';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../Styling/fight_club_l.png';

function RegisterPage (){
  const axios = require('axios');
  const [NickName, setNickName] = useState('');
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [stage, setStage] = useState(1);
  const handleNext = (e) => {
    e.preventDefault();
    setStage(stage+1);
  }
  const handleOnSubmit = async (e) => {
    const registerDetails = {
      NickName: NickName,
      Email: Email,
      password: password
    }
    e.preventDefault()
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
        toast.error('User already exist',{id: toastId});
      }
      setNickName('');
      setEmail('');
      setPassword('');
  }
  const loadStage = (stage) =>{
      switch(stage){
        case 1: {
          return(
            <div className="fightclub__form-content_input-form__email">
              <span>ENTER YOUR EMAIL</span>
              <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
          )
        }
        case 2: {
          return (
            <div>
              <div className="fightclub__form-content_input-form__password">
                  <span>PASSWORD</span>
                  <input type="password" onChange= {(e)=>setPassword(e.target.value)}/>
              </div>
              <div className="fightclub__form-content_input-form__password">
                    <span>CONFIRM PASSWORD</span>
                    <input type="password" onChange= {(e)=>setConfirmPassword(e.target.value)}/>
              </div>
            </div>
          )
        }
        case 3: {
          return (
            <div>
              <div className="fightclub__form-content_input-form__nickname">
                  <span>AVATAR</span>
                  <input type="password" onChange= {(e)=>setNickName(e.target.value)}/>
              </div>
              <div className="fightclub__form-content_input-form__nickname">
                  <span>NICK NAME</span>
                  <input type="password" onChange= {(e)=>setNickName(e.target.value)}/>
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
                <div className='fightclub__form-content_input-form__submit'>
                  <button onClick={handleNext}>Next</button>
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