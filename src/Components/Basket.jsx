import React from 'react'
import { moneyFormat } from '../helpers'
import BasketItem from './BasketItem'

function Basket({ basket, Products, total, setbasket }) {


    const resetBasket = () => {
        setbasket([])
    }
    return (
        <div>
            {total > 0 && (
                <div className='basket-container container'>
                    <h3>Harcama Detayı</h3>
                    <ul >
                        {basket.map(item => (

                            <BasketItem key={item.id} item={item} product={Products.find(p => p.id === item.id)} />
                        ))}
                    </ul>
                    <div className='total'>
                        Toplam: ${moneyFormat(total)}
                    </div>
                    <button className='basket-reset' onClick={resetBasket}>Sepeti Sıfırla</button>
                </div>
            )}
        </div>
    )
}

export default Basket