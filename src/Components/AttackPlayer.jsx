import React from 'react'
import '../Styling/AttackPlayer.css';
import { useLocation } from 'react-router-dom';

function AttackPlayer() {
    const { data } = useLocation().data;
  return (
    <div className='player__attack'>
        <div className='player__attack__container'>
            <div className='player__attack-title'>
                <div className='player__attack-result'>
                    Attack Successfull
                </div>
            </div>
            <div className='player__attack-content'>
                <div className='player__attack-content__report'>
                    <div className='player__attack-content__resources'>
                        <p>
                            <span>Gold: </span>
                            <span>Number</span>
                        </p>
                    </div>
                    <div className='player__attack-content__resources'>
                        <p>
                            <span>Solfour: </span>
                            <span>Number</span>
                        </p>
                    </div>
                    <div className='player__attack-content__resources'>
                        <p>
                            <span>Marble: </span>
                            <span>Number</span>
                        </p>
                    </div>
                    <div className='player__attack-content__resources'>
                        <p>
                            <span>Food: </span>
                            <span>Number</span>
                        </p>
                    </div>
                </div>
                <div className='player__attack-content__again'>
                    <div className='player__attack-content__resources'>
                        <span>NickName:</span>
                        <span>{data.NickName}</span>
                    </div>
                    <div className='player__attack-content__resources'>
                        <span>Alliance:</span>
                        <span>{data.Alliance}</span>
                    </div>
                    <div className='player__attack-content__resources'>
                        <span>Soldiers died:</span>
                        <span>{data.soldiers}</span>
                    </div>
                    <div className='player__attack-content__resources btn'>
                        <button>Attack again</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AttackPlayer