import React, {useState, useEffect} from 'react'
import '../Styling/Dashboard.css'
import LoadingBoxes from './LoadingBoxes';
import ork from '../Styling/ork.png';
import dwarf from '../Styling/dwarf-avatar.jpg';
import viking from '../Styling/viking-avatar.jpg';

function Base(props) {
    const axios = require('axios');
    const {getCookie, getUserParam} = require('../Backend/getNickName');
    const [nickname, setNickName] = useState("");
    const [resource, setResource] = useState();
    const [loading, setLoading] = useState(true);

    const firstGetRes = (res) => {
        switch(res[0].avatar){
            case "ork" : {
                props.avatar(ork);
                break;
            }
            case "dwarf" : {
                props.avatar(dwarf);
                break;
            }
            case "viking" :{
                props.avatar(viking);
                break;
            }
            default : {
                break;
            }
        }
        const resources = res.map(
            (user,key) =>
            <div key={key} className="base__content__small-box__wrapper">
                <div className="small-box">
                    <div className="test">
                        <h1>Resources</h1>
                        <div>Available Workers : {user.Workers.Available}</div>
                        <div>Gold: {user.Resources.Gold}</div>
                        <div>Solfour: {user.Resources.Solfour}</div>
                        <div>Marble: {user.Resources.Marble}</div>
                        <div>Food: {user.Resources.Food}</div>
                    </div>
                    <div className="test">
                        <h1>Workers</h1>
                        <div>Workers : {user.Workers.Mine + user.Workers.Mountains + user.Workers.Quary + user.Workers.Farm}</div>
                        <div>Mine: {user.Workers.Mine}</div>
                        <div>Mountains: {user.Workers.Mountains}</div>
                        <div>Quary: {user.Workers.Quary}</div>
                        <div>Farm: {user.Workers.Farm}</div>
                    </div>
                </div>
                <div className="small-box">
                    <div className="test">
                        <h1>Vault</h1>
                        <div>Gold: {user.Resources.Vault.Gold}</div>
                        <div>Solfour: {user.Resources.Vault.Solfour}</div>
                        <div>Marble: {user.Resources.Vault.Marble}</div>
                        <div>Food: {user.Resources.Vault.Food}</div>
                    </div>
                    <div className="test">
                        <h1>Efficiency</h1>
                        <div>Mine: {user.Workers.Efficiency.Mine}</div>
                        <div>Mountains: {user.Workers.Efficiency.Mountains}</div>
                        <div>Quary: {user.Workers.Efficiency.Quary}</div>
                        <div>Farm: {user.Workers.Efficiency.Farm}</div>
                    </div>
                </div>
                <div className="small-box">
                    <div className="test">
                        <h1>Soldiers</h1>
                        <div>Ammout: {user.Power.Soldiers.Ammount}</div>
                        <div>Available: {user.Power.Soldiers.Available}</div>
                        <div>Level: {user.Power.Soldiers.Level}</div>
                        <div>Spies: none</div>
                    </div>
                    <div className="test">
                        <h1>Power</h1>
                        <div>Land: {user.Power.Soldiers.Ammount}</div>
                        <div>Sea: {user.Power.Soldiers.Ammount}</div>
                        <div>Air: {user.Power.Soldiers.Ammount}</div>
                        <div>Spies: {user.Power.Soldiers.Ammount}</div>
                    </div>
                </div>
            </div>
        );
        setResource(resources);
    
    }
    useEffect(()=>{
        setNickName(getUserParam(getCookie, 'NickName'));
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
            setTimeout(() => setLoading(false), 1000);
            firstGetRes(result.data);
        })
    }, [loading, resource]);
  return (
    <div className="Dashboard_content">
        {/* <div className="fightclub__dashboard-big__box">
            <div className='fightclub__dashboard-content__boxes-box'>
                <p>NickName: {nickname}</p>
            </div>
        </div>
        {loading ? 
            <div className="fightclub__dashboard-content__boxes">
                <div className="fightclub__dashboard-content__boxes-box">
                    <div className="whole_box_wrraper">
                        <div className="box-content">
                            <LoadingBoxes />
                        </div>
                    </div>
                </div>
                <div className="fightclub__dashboard-content__boxes-box">
                    <div className="whole_box_wrraper">
                        <div className="box-content">
                            <LoadingBoxes />
                        </div>
                    </div>
                </div>
                <div className="fightclub__dashboard-content__boxes-box">
                    <div className="whole_box_wrraper">
                        <div className="box-content">
                            <LoadingBoxes />
                        </div>
                    </div>
                </div>
            </div>
        : 
        <div className='fightclub__dashboard-small__box'>
            {resource}
        </div>
        } */}
        <div className='base__content'>
            <div className='base__content__big-box'>
                <p>NickName: {nickname}</p>
            </div>
            {/* <div className='base__content__small-box__wrapper'>
                <div className='small-box'>
                    <div className='test'>
                        <div>Amit</div>
                        <div>Amit</div>
                        <div>Amit</div>
                        <div>Amit</div>
                    </div>
                </div>
                <div className='small-box'>
                    <div className='test'>
                        <div>Amit</div>
                        <div>Amit</div>
                        <div>Amit</div>
                        <div>Amit</div>
                    </div>
                </div>
                <div className='small-box'>
                    <div className='test'>
                        <div>Amit</div>
                        <div>Amit</div>
                        <div>Amit</div>
                        <div>Amit</div>
                    </div>
                </div>
            </div>*/}
            {resource}
        </div> 

        {/* <button style={{height:'250px', width:'100%'}}>Amit</button> */}
    </div>
  )
}

export default Base