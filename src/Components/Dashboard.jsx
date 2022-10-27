import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import nisim from "../Styling/nisim.png"
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import '../Styling/Dashboard.css';
import { Avatar } from "@mui/material";

function Dashboard(){
    const axios = require('axios');
    const getTable = async () => {
        let time = 0;
        try{
            const timer = setInterval(() => {
                console.log(time);
                time++
            }, 1000);
            const res = await axios({
                method: 'GET',
                url: 'api/dashboard',
                headers:{ 'Content-Type': 'application/json'}
            });
            window.localStorage.setItem('dashboardTable', res.data);
            console.log(res.data);
            console.log("after fetch time "+ time);
            const map = res.data.map(
                user => <tr><td>{user.UserId.NickName}</td><td>{user.Gold}</td><td>{user.Solfour}</td><td>{user.Marble}</td><td>{user.Food}</td></tr>
            )
            console.log("after map time "+ time);
            clearInterval(timer);
            return map
        }catch(e){
            console.log(e);
        }
    }
  const [apiResponse, setApiResponse] = useState(firstGetRes);
  const [notiColor, setNotiColor] = useState("#bdbec7");
  const [cartColor, setCartColor] = useState("#bdbec7");
  const [searchColor, setSearchColor] = useState("#bdbec7");
  const [resource, setResource] = useState();
  const [nickname, setNickName] = useState("");
  const firstGetRes = (res) => {
    const final = res.map(
        user => <div className="box-content"><div>Gold: {user.Gold}</div><div>Solfour: {user.Solfour}</div><div>Marble: {user.Marble}</div><div>Food: {user.Food}</div></div>
    );
    setResource(final);

  }
  const getResources = () => {
    axios
    .get('https://powerful-anchorage-21815.herokuapp.com/getResources')
    .then(result=>{
        console.log(result);
    })
    .catch(err => { /* not hit since no 401 */ })
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
        <div className="Dashboard">
            <div className="sideBar-div">
                <Sidebar />
            </div>
            <div className="content spacer">
                <div className="Header_content">
                    <div className="Header_tool_bar">
                        <div className="Header_tool_bar_input">
                            <LocationSearchingIcon sx={{color:searchColor}} className="search_icon"/>
                            <input type="search" className="Header_tool_bar_input_search" onMouseLeave={()=>setSearchColor("#bdbec7")} onMouseEnter={()=>setSearchColor("#fff")} placeholder="Search..." />
                        </div>
                        <div className="Header_tool_bar_icons">
                            <a href="#"><div onMouseLeave={()=>setNotiColor("#bdbec7")} onMouseEnter={()=>setNotiColor("#fff")} className="Header_tool_bar_icons_noti">
                                <CircleNotificationsRoundedIcon sx={{color:notiColor, width:42, height:42}}/>
                            </div></a>
                            <a href="#"><div onMouseLeave={()=>setCartColor("#bdbec7")} onMouseEnter={()=>setCartColor("#fff")} className="Header_tool_bar_icons_shop">
                                <ShoppingCartCheckoutRoundedIcon sx={{color:cartColor, width:42, height:42}}/>
                            </div></a>
                            <a href="#"><div className="Header_tool_bar_icons_profile">
                                <Avatar alt="Remy Sharp" src={nisim} sx={{color:"#bdbec7", width:48, height:48}}/>
                            </div></a>
                        </div>
                    </div>
                </div>
                <div className="Dashboard_content">
                    <div className="fightclub__dashboard-big__box">
                        <div className='fightclub__dashboard-content__boxes-box'>
                            <p>Nickname: {nickname}</p>
                        </div>
                    </div>
                    <div className='fightclub__dashboard-content__boxes'>
                        <div className='fightclub__dashboard-content__boxes-box'>
                            {resource}
                            <div className="box-content">
                                <div>Mine:</div>
                                <div>Mountains:</div>
                                <div>Quary:</div>
                                <div>Farm:</div>
                            </div>
                        </div>
                        <div className='fightclub__dashboard-content__boxes-box'>
                            <p>Secondary stats</p>
                        </div>
                        <div className='fightclub__dashboard-content__boxes-box'>
                            <p>Secondary stats</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;