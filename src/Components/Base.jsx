import React, {useState, useEffect} from 'react'
import '../Styling/Dashboard.css'
function Base() {
    const axios = require('axios');
    const [nickname, setNickName] = useState("");
    const [resource, setResource] = useState();
    const firstGetRes = (res) => {
        const resources = res.map(
            user =>
            <div className="fightclub__dashboard-content__boxes">
                <div className="fightclub__dashboard-content__boxes-box">
                    <div className="whole_box_wrraper">
                        <div className="box-content">
                            <h1>Resources</h1>
                            <div>Available Workers : {user.Workers.Available}</div>
                            <div>Gold: {user.Resources.Gold}</div>
                            <div>Solfour: {user.Resources.Solfour}</div>
                            <div>Marble: {user.Resources.Marble}</div>
                            <div>Food: {user.Resources.Food}</div>
                        </div>
                        <div className="box-content">
                            <h1>Workers</h1>
                            <div>Workers : {user.Workers.Mine + user.Workers.Mountains + user.Workers.Quary + user.Workers.Farm}</div>
                            <div>Mine: {user.Workers.Mine}</div>
                            <div>Mountains: {user.Workers.Mountains}</div>
                            <div>Quary: {user.Workers.Quary}</div>
                            <div>Farm: {user.Workers.Farm}</div>
                        </div>
                    </div>
                </div>
                <div className="fightclub__dashboard-content__boxes-box">
                    <div className="whole_box_wrraper">
                        <div className="box-content">
                            <h1>Vault</h1>
                            <div>Gold: {user.Resources.Vault.Gold}</div>
                            <div>Solfour: {user.Resources.Vault.Solfour}</div>
                            <div>Marble: {user.Resources.Vault.Marble}</div>
                            <div>Food: {user.Resources.Vault.Food}</div>
                        </div>
                        <div className="box-content">
                            <h1>Efficiency</h1>
                            <div>Mine: {user.Workers.Efficiency.Mine}</div>
                            <div>Mountains: {user.Workers.Efficiency.Mountains}</div>
                            <div>Quary: {user.Workers.Efficiency.Quary}</div>
                            <div>Farm: {user.Workers.Efficiency.Farm}</div>
                        </div>
                    </div>
                </div>
                <div className="fightclub__dashboard-content__boxes-box">
                    <div className="whole_box_wrraper">
                        <div className="box-content">
                            <h1>Soldiers</h1>
                            <div>Ammout: {user.Power.Soldiers.Ammount}</div>
                            <div>Available: {user.Power.Soldiers.Available}</div>
                            <div>Level: {user.Power.Soldiers.Level}</div>
                            <div>Spies: none</div>
                        </div>
                        <div className="box-content">
                            <h1>Power</h1>
                            <div>Land: {user.Power.Items}</div>
                            <div>Sea: {user.Power.Items}</div>
                            <div>Air: {user.Power.Items}</div>
                            <div>Spies: {user.Power.Items}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
        setResource(resources);
    
    }
    const getNickName = () => {
        const nick = getCookie('token').split(' ')[1];
        const decode = JSON.parse(Buffer.from(nick.split('.')[1], 'base64'));
        return decode.NickName
      }
    const getCookie = (cname) =>{
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
    }
    useEffect(()=>{
    setNickName(getNickName());
    axios
    .get('https://powerful-anchorage-21815.herokuapp.com/getCookie',
    {headers:{'Authorization': getCookie('token')}
    })
    .then(result=>{
    })
    axios
    .get('https://powerful-anchorage-21815.herokuapp.com/getResources',
    {headers:{'Authorization': getCookie('token')}
    })
    .then(result=>{
        firstGetRes(result.data);
    })
    }, []);
  return (
    <div className="Dashboard_content">
        <div className="fightclub__dashboard-big__box">
            <div className='fightclub__dashboard-content__boxes-box'>
                <p>NickName: {nickname}</p>
            </div>
        </div>
        {resource}
    </div>
  )
}

export default Base