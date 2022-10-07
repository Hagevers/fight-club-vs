import React, {useState, useEffect} from "react";
import '../Styling/Dashboard.css';
import {useNavigate} from "react-router-dom";
const resources = require('../Backend/ResourcesModel')
const jwt = require('jsonwebtoken');

function Dashboard(){
    const getTable = async () => {
        try{
            const res = await fetch('https://fight-club-vs.vercel.app/api/dashboard');
            const jsonResponse = await res.json();
            console.log(jsonResponse);
            const map = jsonResponse.map(
                user => <tr><td>{user.UserId.NickName}</td><td>{user.Gold}</td><td>{user.Solfour}</td><td>{user.Marble}</td><td>{user.Food}</td></tr>
            )
            console.log(map);
            return map
        }catch(e){
            console.log(e);
        }
    }
    // const getResources = async () => {
    //     const cookie = document.cookie
    //     console.log(cookie);
    //     const token= cookie[1]
    //     jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
    //         if(err) return null;
    //         resources.find({UserId:user.user_id})
    //         .select('Food Marble Solfour Gold')
    //         .then(data => data.map(res => <ul><li>{data.Gold}</li><li>{data.Solfour}</li><li>{data.Marble}</li><li>{data.Food}</li></ul>))
    //     })
    // }
  const [apiResponse, setApiResponse] = useState("*** now loading ***");
  const [resource, setResource] = useState()
  useEffect(() => {
        getTable().then(
            result => setApiResponse(result)
        );
  },[]);
//   useEffect(() => {
//         getResources().then(
//             result => setResource(result)
//         )
// },[]);
  const logout = () =>{
    const cookie = document.cookie;
    document.cookie = cookie + ";max-age=0";
    window.location.reload();
  }

    return (
        <div>
            <ul>
                <li onClick={logout}><a href="#logout">Logout</a></li>
                  
            </ul>
            {resource}
            <div className="wrapper">
                <table className="members_table">
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
export default Dashboard;