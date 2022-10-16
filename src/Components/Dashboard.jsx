import axios from "axios";
import React, {useState, useEffect} from "react";
import '../Styling/Dashboard.css';
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
  const [resource, setResource] = useState();
  const logout = () =>{
    const cookie = document.cookie;
    document.cookie = cookie + ";max-age=0";
    window.location.reload();
  }
  const firstGetRes = () => {
    const res = window.localStorage.getItem('dashboardTable');
    console.log(res);
    if (res){
        const final = res.map(
            user => <tr><td>{user.UserId.NickName}</td><td>{user.Gold}</td><td>{user.Solfour}</td><td>{user.Marble}</td><td>{user.Food}</td></tr>
        );
        return final
    }else{
        return null
    }

  }
  useEffect(() => {
    getTable().then(
        (result) => {
            setApiResponse(result)
        }
    );
    getResources().then(
        (result) =>{
             setResource(result)
        }
    );
    },[]);
    return (
        <div className="wrapper">
            <div className="sideBar">
                <div className="sideBar-content">
                    <span>Amit</span>
                    <button></button>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div >
                <table id="dashboardTable" className="members_table">
                    <tr>
                        <th>Nick Name</th>
                        <th>Gold</th>
                        <th>Solfour</th>
                        <th>Marble</th>
                        <th>Food</th>
                        <th>Soldiers</th>
                        <th>Power</th>
                    </tr>
                    {apiResponse}
                </table>
            </div>
        </div>
    )
}
const getResources = async () => {
    const res = await axios({
        method: 'GET',
        url: 'api/dashboard',
        headers:{ 'Content-Type': 'application/json'}
    });
    const resource = res.data.map(
        reso => <ul className="resourceList"><li><a>Gold - {reso.Gold}</a></li><li><a>Solfour - {reso.Solfour}</a></li><li><a>Marble - {reso.Marble}</a></li><li><a>Food - {reso.Food}</a></li></ul>
    )
    return resource
}
export default Dashboard;