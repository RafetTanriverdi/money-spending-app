import React from 'react'
import { moneyFormat } from '../helpers'

function Header({ money, total }) {
  return (
    <div>
      {total > 0 && money-total !==0 &&(
        <>Kalan Paranız {moneyFormat(money - total)}$ </>
      )}
      {total === 0 && (
        <>Harcamak İçin {moneyFormat(money)}$ paranız var</>
      )}
      {money - total === 0 && (
        <>Paran Bitti</>
      )}

    </div>
  )
}

export default Header