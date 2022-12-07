import { ShowerRounded } from '@mui/icons-material';
import React, {useEffect, useState} from 'react';
// import '../Styling/Attack.css';
import '../Styling/Dashboard.css';

function Attack() {
    const axios = require('axios');
    const [members, setMembers] = useState('');
    const [attackDetails, setAttackDetails] = useState('');
    const [alreadyShown, setAlreadyShown] = useState(false);
    const [lastMember, setLastMember] = useState();
    const {getCookie, getNickName} = require('../Backend/getNickName');
    

    const attackMember = async (member) =>{
        const attackerId = getNickName(getCookie);
        const res = await axios({
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            url: `https://powerful-anchorage-21815.herokuapp.com/${member._id}`,
            data: JSON.stringify({attacker: attackerId})
        });
        console.log(res);
    }
    const getTableMembers = (result) =>{
        let i = 1
        const members = result.map((member, key) =>{
            return(
                <tr key= {key} className='table__content-table__row' onClick={() => showAttackOptions(member)}>
                    <td>{i++}</td>
                    <td>{member.NickName}</td>
                    <td>{member.Power.Soldiers.Ammount}</td>
                    <td>{member.alliance}</td>
                    <td>Status</td>
                </tr>
            )})
        setMembers(members);
    }
    const showAttackOptions = (prop) => {
        if(alreadyShown) {
            if(lastMember === prop.NickName) return setAlreadyShown(false)
        }else setAlreadyShown(true)
        const res = 
        <div className='attack__sidebar-content'>
            <h1>{prop.NickName}</h1>
            <div className='attack__sidebar-content__inner'>
                <p>Soldiers: {prop.Power.Soldiers.Ammount}</p>
                <p>Gold : </p>
                <button className='attack__sidebar-content__inner-spy'>Spy</button>
                <button className='attack__sidebar-content__inner-attack' onClick={()=>attackMember(prop)}>Attack</button>
            </div>
        </div>
        setAttackDetails(res);
        setLastMember(prop.NickName);
    }
    useEffect(()=>{
        axios.get('https://powerful-anchorage-21815.herokuapp.com/getMembers',
        {headers:{'Authorization': getCookie('token')}})
        .then(result => {
            getTableMembers(result.data);
        })
    },[alreadyShown, lastMember])
  return (
    <div className='table__content'>
        <table className='table__content-table'>
            <tr className='table__content-table__row'>
                <th>Rank</th>
                <th>NickName</th>
                <th>Soldiers</th>
                <th>Alliance</th>
                <th>Satus</th>
            </tr>
            {members}
        </table>
        <div className={alreadyShown ? 'attack__sidebar show' : 'attack__sidebar'}>
            {alreadyShown && attackDetails}
        </div>
    </div>
  )
}

export default Attack