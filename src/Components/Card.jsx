import React from 'react';
import '../Styling/Card.css';

function Card(props) {

    const card = {
        height: props.height ? props.height : '350px',
        width: props.width ? props.width : '200px',
    }
  return (
    <div className='card-wrapper'>
        <img style={card} src={props.bg} className='card' />
        <div className='card-details' style={{width: props.width}}>
            <label>Desc: {props.desc}</label>
            <label>Price: {props.price}</label>
        </div>
    </div>
  )
}

export default Card