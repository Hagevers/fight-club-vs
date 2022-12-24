import React, {lazy} from 'react';
// import { ShopData } from './ShopData';
import '../Styling/Shop.css';
import Card from './Card';
import tank from '../Styling/tank.jpg';
import destroyer from '../Styling/destroyer.jpg';

function Shop() {
  return (
    <div className='shop__wrapper'>
      {/* <table className='shop__table__wrapper'>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Price</th>
            <th>Ammount</th>
          </tr>
        </thead>
        <tbody>
          {
          ShopData.map((val, key) => {
            return(
              <tr className='table_row' key={key}>
                <td>{val.pic}</td>
                <td>{val.title}</td>
                {
                val.price.Marble && val.price.Solfour ?
                <td className='resources_td'><div className='gold'>{val.price.Gold}</div><div className='marble'>{val.price.Marble}</div> <div className='solfour'>{val.price.Solfour}</div></td>
                :
                 val.price.Marble ? 
                 <td className='resources_td'><div className='gold'>{val.price.Gold}</div> <div className='marble'>{val.price.Marble}</div> </td>
                :
                  <td className='resources_td'><div className='gold'>{val.price.Gold}</div> <div className='solfour'>{val.price.Solfour}</div></td>
                }
                <td><input type="text" className='resources__ammount'/></td>
                <td><input type="submit" value="Buy" className='resources__buy' /></td>
              </tr>
            )})
          }
        </tbody>
      </table> */}
        <div className='shop__grid-content'> 
          <div className='card'>
            <Card height='150px' width='600px' bg={tank} desc='A modern tank, strong against militiary' price='20,000 each resource' />
          </div>
          <div className='card'>
            <Card height='150px' width='600px' bg={destroyer} />
          </div>
          <div className='card'>
            <Card height='150px' width='600px' bg={tank} desc='A modern tank, strong against militiary' price='20,000 each resource' />
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