import { ShowerRounded } from '@mui/icons-material';
import React, {useEffect, useState} from 'react'
// import '../Styling/Attack.css'
import '../Styling/Dashboard.css'

function Attack() {
    const axios = require('axios');
    const [members, setMembers] = useState('');
    const [attackDetails, setAttackDetails] = useState('');
    const [alreadyShown, setAlreadyShown] = useState(false);
    const [lastMember, setLastMember] = useState();
    
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
        }
        const res = 
        <div className='attack__sidebar-content'>
            <h1>{prop.NickName}</h1>
        </div>
        setAttackDetails(res);
        setLastMember(prop.NickName);
        setAlreadyShown(true);
            
    }
    const getCookie = (cname) =>{
        try{
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
            }
            return "";
        }catch{
            return "";
        }
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
        <div className='attack__sidebar'>
            {alreadyShown && attackDetails}
        </div>
    </div>
  )
}

export default Attack