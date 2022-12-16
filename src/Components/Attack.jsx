import React, {useState, Fragment} from 'react';
import '../Styling/Dashboard.css';
import { attackMember } from '../Backend/attackMember';

function Attack(props) {
    const [attackDetails, setAttackDetails] = useState('');
    const [alreadyShown, setAlreadyShown] = useState(false);
    const [lastMember, setLastMember] = useState();
    const {getCookie, getUserParam} = require('../Backend/getNickName');

    let i = 1;
    let res;    
    let shown = true;

    const attackPlayer = (prop) => {
        console.log(prop);
        console.log(attackMember(prop));
    }

    const showAttackOptions = async (prop) => {
        if(alreadyShown) {
            if(lastMember === prop.NickName){
                setAlreadyShown(false);
                 return alreadyShown;
            }
        }else setAlreadyShown(true)

        if(prop._id === getUserParam(getCookie, '_id')) shown = false;
        else shown = true;

        res = 
        <div className='attack__sidebar-content'>
            <h1>{prop.NickName}</h1>
            <div className='attack__sidebar-content__inner'>
                <p>Soldiers: {prop.Power.Soldiers.Ammount}</p>
                <p>Gold : {Math.ceil(prop.Resources.Gold)}</p>
                {shown ?
                <div>
                    <div>
                        <button className='attack__sidebar-content__inner-spy'>Spy</button>
                    </div>
                    <div>
                        <button className='attack__sidebar-content__inner-attack' onClick={() => attackPlayer(prop._id)}>Attack</button> 
                    </div>
                </div>
                : null}
            </div>
        </div>

        setAttackDetails(res);
        setLastMember(prop.NickName);
    }
  return (
    <div className='table__content'>
        <table className='table__content-table'>
            <tbody>
                <tr className='table__content-table__row'>
                    <th>Rank</th>
                    <th>NickName</th>
                    <th>Soldiers</th>
                    <th>Alliance</th>
                    <th>Satus</th>
                </tr>
                <>
                    {props.data.data.map((member, key)=> {
                        return (
                            <Fragment key={key}>
                                <tr className='table__content-table__row' onClick={() => showAttackOptions(member)}>
                                    <td>{i++}</td>
                                    <td>{member.NickName}</td>
                                    <td>{member.Power.Soldiers.Ammount}</td>
                                    <td>{member.alliance}</td>
                                    <td>Status</td>
                                </tr>
                            </Fragment>
                        )
                    })}
                </>
            </tbody>
        </table>
        <div className={alreadyShown ? 'attack__sidebar show' : 'attack__sidebar'}>
            {alreadyShown && attackDetails}
        </div>
    </div>
  )
}

export default Attack