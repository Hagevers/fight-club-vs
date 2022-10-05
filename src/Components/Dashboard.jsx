import React, {useState, useEffect} from "react";
import '../Styling/Dashboard.css';

function Dashboard(){

    const getTable = async () => {
        try{
            const res = await fetch('https://fight-club-vs.vercel.app/api/dashboard');
            const jsonResponse = await res.json();
            console.log(jsonResponse);
            const map = jsonResponse.map(
                user => <td>{user.NickName}</td>
            )
            console.log(map);
            return map
        }catch(e){
            console.log(e);
        }
    }
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
        getTable().then(
            result => setApiResponse(result)
        );
  },[]);

    return (
        <div>
            <table className="members_table">
                <tr>
                    <th>Nick Name</th>
                    <th>Gold</th>
                    <th>Iron</th>
                    <th>Marble</th>
                </tr>
                <tr>
                    {apiResponse}
                    <td>0</td>
                    <td>0</td>
                </tr>
            </table>
        </div>
    )
}
export default Dashboard;