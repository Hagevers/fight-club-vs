import React, {useEffect, useState} from 'react'
import '../Styling/Attack.css'

function Attack() {
    const axios = require('axios');
    const i = 1;
    const [members, setMembers] = useState('');
    const getTableMembers = (result) =>{
        const members = result.map(
            member =>
            <tr>
                <td>1</td>
                <td>{member.NickName}</td>
                <td>Alliance</td>
                <td>Status</td>
                <td>Attack</td>
            </tr>
        )
        setMembers(members);
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
    },[])
  return (
    <div className='table__content'>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>NickName</th>
                    <th>Alliance</th>
                    <th>Satus</th>
                    <th>Attack</th>
                </tr>
            </thead>
            <tbody>
                {members}
            </tbody>
        </table>
    </div>
  )
}

export default Attack