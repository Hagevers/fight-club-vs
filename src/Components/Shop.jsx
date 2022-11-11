import React, {useState} from 'react'
import { ShopData } from './ShopData'
import '../Styling/Shop.css'
function Shop() {

  return (
    <div className='shop__wrapper'>
      <table className='shop__table__wrapper'>
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
          ShopData.map(val => {
            return(
              <tr className='table_row'>
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
      </table>
    </div>
  )
}

export default Shop