import React, { useState, useEffect }from 'react'
import '../Styling/AttackPlayer.css';
import { useParams } from 'react-router-dom';
import { attackMember } from '../Backend/attackMember';
import SimpleLoader from './SimpleLoader';

function AttackPlayer() {
    const axios = require('axios');
    const {getCookie, getUserParam} = require('../Backend/getNickName');
    const [userData, setUserData] = useState('');
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    const fetchReportData = async (id) =>{
        const res = await axios({
            method: 'get',
            headers:{ 'Content-Type': 'application/json', 'Authorization': getCookie('token')},
            url: `https://powerful-anchorage-21815.herokuapp.com/report/${id}`
        })
        if (res.status === 200){
            setUserData(res.data);
            setLoading(false);
        } 
    }
    useEffect(()=>{
        fetchReportData(id);
    },[])
  return (
    <div className='player__attack'>
        <div className='player__attack__container'>
            {loading ? <SimpleLoader /> : 
            <div>
            <div className='player__attack-title'>
                <div className='player__attack-result'>
                    {userData.HaveWon ? 'Attack Successfull': 'Attack Failed'}
                </div>
            </div>
            <div className='player__attack-content'>
                <div className='player__attack-content__report'>
                    <div className='player__attack-content__resources'>
                        <p>
                            <span>Gold: </span>
                            <span>{userData.Gold}</span>
                        </p>
                    </div>
                    <div className='player__attack-content__resources'>
                        <p>
                            <span>Solfour: </span>
                            <span>{userData.Solfour}</span>
                        </p>
                    </div>
                    <div className='player__attack-content__resources'>
                        <p>
                            <span>Marble: </span>
                            <span>{userData.Marble}</span>
                        </p>
                    </div>
                    <div className='player__attack-content__resources'>
                        <p>
                            <span>Food: </span>
                            <span>{userData.Food}</span>
                        </p>
                    </div>
                </div>
                <div className='player__attack-content__again'>
                    <div className='player__attack-content__resources'>
                        <span>NickName:</span>
                        <span>{userData.Defender}</span>
                    </div>
                    <div className='player__attack-content__resources'>
                        <span>Alliance:</span>
                        <span>{userData.alliance}</span>
                    </div>
                    <div className='player__attack-content__resources'>
                        <span>Soldiers died:</span>
                        <span>{userData.SoldiersDied}</span>
                    </div>
                    <div className='player__attack-content__resources btn'>
                        <button onClick={() => attackMember(userData.Defender_Id)}>Attack again</button>
                    </div>
                </div>
            </div>
            </div>
            }
        </div>
    </div>
  )
}

export default AttackPlayer