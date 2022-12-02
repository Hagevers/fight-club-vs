import React from 'react';
import '../Styling/Confirm.css';

function Confirm() {
    return (
        <div className='confirm-wrraper'>
            <div className='confirm-outer'>
                <div className='confirm-header'>
                    <h1>Your account has been verified, start play now!</h1>
                </div>
                <div className='confirm-content'>
                    <a href="/login"><button>Login</button></a>
                </div>
            </div>
        </div>
    )
}

export default Confirm