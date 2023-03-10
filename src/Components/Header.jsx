import React from 'react'
import { moneyFormat } from '../helpers'

function Header({ money, total }) {
  return (
    < >
      {total > 0 && money-total !==0 &&(
        <div className='header'>Kalan Paranız <span>${moneyFormat(money - total)}</span> </div>
      )}
      {total === 0 && (
        <div className='header'>Harcamak İçin <span>${moneyFormat(money)}</span> paranız var</div>
      )}
      {money - total === 0 && (
        <div className='header'>Paran Bitti</div>
      )}
      

    </>
  )
}

export default Header