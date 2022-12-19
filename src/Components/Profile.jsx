import { Avatar } from '@mui/material';
import React from 'react';
import '../Styling/Profile.css';

function Profile(props) {
  return (
    <div className='profile__container'>
        <div className='profile__wrapper'>
            <div className='profile__header'>
                <Avatar alt="Remy Sharp" src={props.Avatar} sx={{color:"#bdbec7", width:96, height:96}}/>
                <span>Hagever</span>
            </div>
            <div className='profile__content'>
                <div className='profile__content-para'>
                    <span>Rank:</span>
                    <span>Alliance:</span>
                    <span>Gold:</span>
                    <span>Soldiers:</span>
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