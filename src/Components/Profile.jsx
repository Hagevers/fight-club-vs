import { Avatar } from '@mui/material';
import React from 'react';
import '../Styling/Profile.css';
import CloseIcon from '@mui/icons-material/Close';

function Profile(props) {
  return (
    <div className='profile__container'>
        <div className='profile__wrapper'>
            <div className='profile__header'>
                <div className='close-btn-div' onClick={()=>props.setShow(undefined)}>
                    <CloseIcon className='close-btn' sx={{width:34, height:34}} />
                </div>
                <Avatar alt="Remy Sharp" src={props.Avatar} sx={{color:"#bdbec7", width:96, height:96}}/>
                <span>{props.user.NickName}</span>
            </div>
            <div className='profile__content'>
                <div className='profile__content-para'>
                    <span>Rank:</span>
                    <span>Alliance: {props.user.alliance}</span>
                    <span>Gold: {Math.ceil(props.user.Resources.Gold)}</span>
                    <span>Soldiers: {props.user.Power.Soldiers.Ammount}</span>
                </div>
                <div className='profile__content-para'>
                    <span>Somthing</span>
                    <span>Somthing</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile