import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import '../Styling/Attack.css';
import '../Styling/Dashboard.css';

function Attack() {
    const axios = require('axios');
    const [members, setMembers] = useState('');
    const [attackDetails, setAttackDetails] = useState('');
    const [alreadyShown, setAlreadyShown] = useState(false);
    const [lastMember, setLastMember] = useState();
    const {getCookie, getUserParam} = require('../Backend/getNickName');
    
    const attackMember = async (member) =>{
        const attackerId = getUserParam(getCookie, '_id');

        const res = await axios({
            method: 'POST',
            headers:{ 'Content-Type': 'application/json', 'Authorization': getCookie('token')},
            url: `https://powerful-anchorage-21815.herokuapp.com/attack/${member._id}`,
            data: JSON.stringify({attacker: attackerId}),
        });
        if(res.status === 200){
            console.log(res.data);
            return (<Link
                to={{
                    pathname: "/attack",
                    data: res.data // your data array of objects
                }}
                />)
        }
        
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
    let shown = true;
    const showAttackOptions = async (prop) => {
        if(alreadyShown) {
            if(lastMember === prop.NickName) return setAlreadyShown(false)
        }else setAlreadyShown(true)
        console.log(prop._id);

        if(prop._id === getUserParam(getCookie, '_id')) shown = false;
        else shown = true;

        const res = 
        <div className='attack__sidebar-content'>
            <h1>{prop.NickName}</h1>
            <div className='attack__sidebar-content__inner'>
                <p>Soldiers: {prop.Power.Soldiers.Ammount}</p>
                <p>Gold : </p>
                {shown ?
                <div>
                    <div>
                        <button className='attack__sidebar-content__inner-spy'>Spy</button>
                    </div>
                    <div>
                        <button className='attack__sidebar-content__inner-attack' onClick={()=>attackMember(prop)}>Attack</button> 
                    </div>
                </div>
                : null}
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
    },[shown, alreadyShown, lastMember])
  return (
    <div className='table__content'>
        <table className='table__content-table'>
            <tbody>
                <tr className='table__content-table__row'>
                    <th>Rank</th>
                    <th>NickName</th>
                    <th>Soldiers</th>
                    <th>Alliance</th>
                    <th>Satus</th>
                </tr>
                {members}
            </tbody>
        </table>
        <div className={alreadyShown ? 'attack__sidebar show' : 'attack__sidebar'}>
            {alreadyShown && attackDetails}
        </div>
    </div>
  )
}

export default Attack