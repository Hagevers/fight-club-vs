import React from 'react'
import '../Styling/About.css'

function About() {
  return (
    <div className='fightclub__about section__padding' id='about'>
        <div className='fightclub__about-content'>
            <h1 className='gradient__text'>Whats special about us?</h1>
            <div className='fightclub__about-content__boxes'>
                <div className='fightclub__about-content__boxes-box'>
                    <p>This is the first reason</p>
                </div>
                <div className='fightclub__about-content__boxes-box'>
                    <p>This is the second reason</p>
                </div>
                <div className='fightclub__about-content__boxes-box'>
                    <p>This is the third reason</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About