import React, {useState} from "react";
import Sidebar from "./Sidebar";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import '../Styling/Dashboard.css';
import { Avatar } from "@mui/material";
import Base from "./Base";
import Shop from "./Shop";
import Attack from "./Attack";
import Logout from "./Logout";
import ork from '../Styling/ork.png';
import dwarf from '../Styling/dwarf-avatar.jpg';
import viking from '../Styling/viking-avatar.jpg';
import { useQuery} from "react-query";
import axios from 'axios';
import SimpleLoader from "./SimpleLoader";
import { useNavigate } from 'react-router-dom';
import Profile from "./Profile";
import { useRef } from "react";
import Alliance from "./Alliance";

function Dashboard(){
    const {getCookie} = require('../Backend/getNickName');
    const [notiColor, setNotiColor] = useState("#bdbec7");
    const [cartColor, setCartColor] = useState("#bdbec7");
    const [searchColor, setSearchColor] = useState("#bdbec7");
    const [active, setActive] = useState('Base');
    const [searchValue, setSearchValue] = useState('');
    const [searchMembers, setSearchMembers] = useState([]);
    const [showSearchMembers, setShowSearchMembers] = useState(false);
    const [profile, setProfile] = useState();
    const navigate = useNavigate();
    const profileRef = useRef(null);

    const { data:cookie,isLoading, error } = useQuery('session', async () =>
    {
        const res = await axios.get("https://powerful-anchorage-21815.herokuapp.com/getCookie", {headers:{'Authorization': getCookie('token')}})
        if(res.status === 200) return res.data
        else throw new Error(res.statusText)
    },{refetchInterval: 60000,});

    const { status:getMembersStatus, data:membersData } = useQuery(["member"], () =>
        axios.get("https://powerful-anchorage-21815.herokuapp.com/getMembers",{headers:{'Authorization': getCookie('token')}})
    );
    const { status:getResourcesStatus, data:resourcesData } = useQuery(["resources"], () =>
        axios.get("https://powerful-anchorage-21815.herokuapp.com/getResources",{headers:{'Authorization': getCookie('token')}})
    );

    if (getMembersStatus === 'loading' || getResourcesStatus === 'loading' || isLoading) return <div className="center"><SimpleLoader /></div>;
    
    if(error || !cookie.valid){
        return navigate('/login');
    }

    let avatar;
    switch(resourcesData.data[0].avatar){
        case "ork" : {
            avatar = ork;
            break;
        }
        case "dwarf" : {
            avatar = dwarf;
            break;
        }
        case "viking" :{
            avatar = viking;
            break;
        }
        default : {
            avatar = ork;
            break;
        }
    }

    const loadComp = (link) => {
        switch (link){
            case 'Base':
                return <Base data={resourcesData}/>
            case 'Upgrade':
                return <h1>Comming soon...</h1>
            case 'Training':
                return <h1>Comming soon...</h1>
            case 'Shop':
                return <Shop />
            case 'Attack':
                return <Attack data={membersData}/>
            case 'Logout':
                return <Logout />
            case 'Alliance':
                return <Alliance />
            default:
                return <Base data={resourcesData}/>
        }
    }
    const members = [];
    membersData.data.map((member) => {
        members.push(member.NickName);
    });

    const handleSearchChange = (e) =>{
        setSearchValue(e.target.value);
        if(searchValue.length >= 2){
            members.map((member) => {
                if (member.includes(searchValue)){
                    if(searchMembers && searchMembers.length > 0){
                        searchMembers.forEach(element => {
                            if(member !== element){
                                setSearchMembers(array => [...array,member]);
                            }
                        });
                    }else{
                        setSearchMembers(array => [...array,member]);
                        setShowSearchMembers(true);
                    }
                }else{
                    setSearchMembers(array => array.filter(user => user !== member))
                }
            })
        }else{
            setSearchMembers([]);
            setShowSearchMembers(false);
        }
    }

    const handleMemberClick = (member) =>{
        membersData.data.map(mem => {
            if(member === mem.NickName){
                setProfile(mem)
            }
        })
    }

    const closeOpenMenus = (e)=>{
        if(profileRef.current && profile && !profileRef.current.contains(e.target)){
          setProfile(undefined)
        }
    }
    document.addEventListener('mousedown',closeOpenMenus)
    return (
        <div className="Dashboard">
            <div className="sideBar-div">
                <Sidebar whichActive= {active} acti= {(val) => setActive(val)}/>
            </div>
            <div className="content spacer">
                <div className="Header_content">
                    <div className="Header_tool_bar">
                        <div className="Header_tool_bar_input">
                            <LocationSearchingIcon sx={{color:searchColor}} className="search_icon"/>
                            <input value={searchValue} onFocus={()=> setShowSearchMembers(true)} onChange={(e)=> handleSearchChange(e)} type="search" className="Header_tool_bar_input_search" placeholder="Search..." />
                            <div className= {`Header-tool-bar_input-options ${showSearchMembers ? 'show' : ''}` }>
                                {searchMembers.map((member, key)=> {
                                    return(
                                        <div className="Header-tool-bar_input-option" onClick={()=>handleMemberClick(member)} key={key}><span>{member}</span></div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="Header_tool_bar_icons">
                            <div onMouseLeave={()=>setNotiColor("#bdbec7")} onMouseEnter={()=>setNotiColor("#fff")} className="Header_tool_bar_icons_noti">
                                <CircleNotificationsRoundedIcon sx={{color:notiColor, width:42, height:42}}/>
                            </div>
                            <div onMouseLeave={()=>setCartColor("#bdbec7")} onMouseEnter={()=>setCartColor("#fff")} className="Header_tool_bar_icons_shop">
                                <ShoppingCartCheckoutRoundedIcon sx={{color:cartColor, width:42, height:42}}/>
                            </div>
                            <div className="Header_tool_bar_icons_profile">
                                <Avatar alt="Remy Sharp" src={avatar} sx={{color:"#bdbec7", width:48, height:48}}/>
                            </div>
                        </div>
                    </div>
                </div>
                    {
                        loadComp(active)
                    }
                
            </div>
            {
            profile &&
            <div className="profile__abs" >
                <div ref={profileRef}>
                    <Profile setShow={() => setProfile()} user={profile}/>
                </div>
            </div>
            }
        </div>
    )
}
export default Dashboard;