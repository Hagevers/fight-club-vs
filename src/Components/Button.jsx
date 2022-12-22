import React, { useState } from 'react'

function Button(props) {
    const [hover, setHover] = useState(false);
    const style = {
        width: props.width ? props.width : '150px',
        border: '1px solid #fff',
        borderRadius: '20px',
        outline: 'none',
        color: '#fff',
        margin: '1rem',
        cursor: 'pointer',
        height: props.height ? props.height : '40px',
        fontFamily: 'Manrope, sans-serif',
        backgroundColor: hover ? 'rgb(101,74,134, 0.5)' : 'rgb(101,74,134, 0.2)',
        fontSize: '18px',
        fontWeight: '500',
        transition: 'background-color 0.3s',
    };
  return (
    <button style={style} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} onClick={props.func}>
        {props.text}
    </button>
  )
}

export default Button