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
                <div>
                    <div>
                        {basket.map(item => (

                            <BasketItem key={item.id} item={item} product={Products.find(p => p.id === item.id)} />
                        ))}
                    </div>
                    <div>
                        Toplam: ${moneyFormat(total)}
                    </div>
                    <button onClick={resetBasket}>Sepeti Sıfırla</button>
                </div>
            )}
        </div>
    )
}

export default Basket