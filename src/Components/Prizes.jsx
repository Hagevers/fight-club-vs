import React from 'react';
import '../Styling/Prizes.css';

function Prizes() {
  return (
    <div className='fightclub__prizes section__padding' id='prizes'>
        <div className='fightclub__prizes-content'>
            <h1 className='gradient__text'>And the prizes? actually nothing - play for fun</h1>
            <div className='fightclub__prizes-content__places'>
                <div className='firstPlace'>
                    <div className='fightclub__prizes-content__places-box'><h1 className='somthing'>1</h1></div>
                </div>
                <div className='secthirdPlace'>
                    <div className='fightclub__prizes-content__places-box'><h1 className='somthing'>2</h1></div>
                    <div className='fightclub__prizes-content__places-box'><h1 className='somthing'>3</h1></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prizes