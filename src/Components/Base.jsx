import React from 'react'
import '../Styling/Dashboard.css'
import { Fragment } from 'react';

function Base(props) {
    const {getCookie, getUserParam} = require('../Backend/getNickName');

  return (
    <div className="Dashboard_content">
        <div className='base__content'>
            <div className='base__content__big-box'>
                <p>NickName: {getUserParam(getCookie,'NickName')}</p>
            </div>
            <>
            {props.data.data.map((resources, key) =>{
                return (
                    <Fragment key={key}>
                        <div className="base__content__small-box__wrapper">
                            <div className="small-box">
                                <div className="test">
                                    <h1>Resources</h1>
                                    <div>Available Workers : {resources.Workers.Available}</div>
                                    <div>Gold: {Math.ceil(resources.Resources.Gold)}</div>
                                    <div>Solfour: {Math.ceil(resources.Resources.Solfour)}</div>
                                    <div>Marble: {Math.ceil(resources.Resources.Marble)}</div>
                                    <div>Food: {Math.ceil(resources.Resources.Food)}</div>
                                </div>
                                <div className="test">
                                    <h1>Workers</h1>
                                    <div>Workers : {resources.Workers.Mine + resources.Workers.Mountains + resources.Workers.Quary + resources.Workers.Farm}</div>
                                    <div>Mine: {resources.Workers.Mine}</div>
                                    <div>Mountains: {resources.Workers.Mountains}</div>
                                    <div>Quary: {resources.Workers.Quary}</div>
                                    <div>Farm: {resources.Workers.Farm}</div>
                                </div>
                            </div>
                            <div className="small-box">
                                <div className="test">
                                    <h1>Vault</h1>
                                    <div>Gold: {resources.Resources.Vault.Gold}</div>
                                    <div>Solfour: {resources.Resources.Vault.Solfour}</div>
                                    <div>Marble: {resources.Resources.Vault.Marble}</div>
                                    <div>Food: {resources.Resources.Vault.Food}</div>
                                </div>
                                <div className="test">
                                    <h1>Efficiency</h1>
                                    <div>Mine: {resources.Workers.Efficiency.Mine}</div>
                                    <div>Mountains: {resources.Workers.Efficiency.Mountains}</div>
                                    <div>Quary: {resources.Workers.Efficiency.Quary}</div>
                                    <div>Farm: {resources.Workers.Efficiency.Farm}</div>
                                </div>
                            </div>
                            <div className="small-box">
                                <div className="test">
                                    <h1>Soldiers</h1>
                                    <div>Ammout: {resources.Power.Soldiers.Ammount}</div>
                                    <div>Available: {resources.Power.Soldiers.Available}</div>
                                    <div>Level: {resources.Power.Soldiers.Level}</div>
                                    <div>Spies: none</div>
                                </div>
                                <div className="test">
                                    <h1>Power</h1>
                                    <div>Land: {resources.Power.Soldiers.Ammount}</div>
                                    <div>Sea: {resources.Power.Soldiers.Ammount}</div>
                                    <div>Air: {resources.Power.Soldiers.Ammount}</div>
                                    <div>Spies: {resources.Power.Soldiers.Ammount}</div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            })}
            </>
        </div> 
    </div>
  )
}

export default Base