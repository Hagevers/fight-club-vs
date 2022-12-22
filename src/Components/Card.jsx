import React from 'react';
import '../Styling/Card.css';

function Card(props) {

    const card = {
        height: props.height ? props.height : '350px',
        width: props.width ? props.width : '200px',
        // backgroundImage: `url(${props.bg})`,
    }
  return (
    <img style={card} src={props.bg} className='card' />
  )
}

export default Card