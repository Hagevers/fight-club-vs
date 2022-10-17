import React from 'react';
import '../Styling/LandingOpener.css';
import people from '../Styling/people.png';
import wallpaper from '../Styling/planesnwars.jpg';

function LandingOpener() {
  return (
    <div className='fightclub__header section__padding' id='home'>
      <div className='fightclub__header-content'>
        <h1 className='gradient__text'>Build The Strongest Army and join the FightClub</h1>
        <p>A new generation of turn based game, Developed by a pasionate web developer that was tired of boring look turn based games.</p>
        <div className='fightclub__header-content__input'>
          <input type="email" placeholder='Enter your email' />
          <button type='button'>Follow after the creator</button>
        </div>
        <div className='fightclub__header-content__pepole'>
          <img src={people} alt="No one really follows him except his friends" />
          <p>Altough im not expecting you to really follow me</p>
        </div>
      </div>
      <div className='fightclub__header-image'>
          <img src={wallpaper} alt='planes and tanks' />
        </div>
    </div>
  )
}

export default LandingOpener