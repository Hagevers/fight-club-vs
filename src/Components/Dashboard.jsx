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
  const [apiResponse, setApiResponse] = useState(window.localStorage.getItem('dashboardTable').innerHTML);
  const [resource, setResource] = useState(window.localStorage.getItem('myResources'));
  const logout = () =>{
    const cookie = document.cookie;
    document.cookie = cookie + ";max-age=0";
    window.location.reload();
  }
  useEffect(() => {
    document.getElementById("dashboardTable").innerHTML = window.localStorage.getItem('dashboardTable')
    getTable().then(
        (result) => {
            setApiResponse(result)
            const dash = document.getElementById("dashboardTable").innerHTML
            window.localStorage.setItem('dashboardTable', dash)
        }
    );
    getResources().then(
        (result) =>{
             setResource(result)
            window.localStorage.setItem('myResources', result)
        }
    );
    },[]);
    return (
        <div>
            <ul>
                <li onClick={logout}><a href="#logout">Logout</a></li>
                {resource}
            </ul>
            
            
            <div className="wrapper">
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
        url: 'api/getRes',
        headers:{ 'Content-Type': 'application/json'}
    });
    const resource = res.data.map(
        reso => <ul className="resourceList"><li><a>Gold - {reso.Gold}</a></li><li><a>Solfour - {reso.Solfour}</a></li><li><a>Marble - {reso.Marble}</a></li><li><a>Food - {reso.Food}</a></li></ul>
    )
    return resource
}
export default Dashboard;