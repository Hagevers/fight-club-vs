import React from 'react';
// import { ShopData } from './ShopData';
import '../Styling/Shop.css';
import Card from './Card';
import tank from '../Styling/tank.jpg';
import destroyer from '../Styling/destroyer.jpg';
import { buyItem } from '../Backend/attackMember';

function Shop() {
  return (
    <div className='shop__wrapper'>
        <div className='shop__grid-content'> 
          <div className='card'>
            <Card height='150px' width='600px' bg={tank} desc='A modern tank, strong against militiary' price='20,000 each resource' func={()=>buyItem({item:{name:'wand', power: 15, price: 600}})}/>
          </div>
          <div className='card'>
            <Card height='150px' width='600px' bg={destroyer} />
          </div>
          <div className='card'>
            <Card height='150px' width='600px' bg={tank} desc='A modern tank, strong against militiary' price='20,000 each resource'  func={()=>buyItem({item:{name:'wand', power: 15, price: 30000}})} />
          </div>
          <div className='card'>
            <Card height='150px' width='600px' bg={tank} desc='A modern tank, strong against militiary' price='20,000 each resource' />
          </div>
          <div className='card'>
            <Card height='150px' width='600px' bg={tank} desc='A modern tank, strong against militiary' price='20,000 each resource' />
          </div>
      </div>
    </div>
  )
}

export default Shop