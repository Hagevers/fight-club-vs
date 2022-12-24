import React from 'react';
import { useState } from 'react';
import '../Styling/Card.css';
import Button from './Button';

function Card(props) {

    const [dropdown,setDropdown] = useState(false);
    const card = {
        height: props.height ? props.height : '350px',
        width: props.width ? props.width : '200px',
    }
  return (
    <div className='card-wrapper' onMouseEnter={()=> setDropdown(true)} onMouseLeave={() => setDropdown(false)} style={dropdown ? {backgroundColor:'#282043'} : null}>
        <img style={card} src={props.bg} className='card' />
        <div className={`card-details ${dropdown ? 'drop': ''}`} style={{width: props.width}}>
            <div>Desc: {props.desc}</div>
            <div>Price: {props.price}</div>
            <div style={{textAlign:'center'}}>
                <Button text='Buy now' func={props.func}/>
            </div>
        </div>
    </div>
  )
}

export default Card