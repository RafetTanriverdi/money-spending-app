import React from 'react'
import { moneyFormat } from '../helpers'

function Product({ product,basket,setbasket,total,money }) {

    const basketItem = basket.find(item=>item.id === product.id)

    const addBasket =()=>{
        const checkBasket =basket.find(item => item.id == product.id)
        if(checkBasket){
            checkBasket.amount += 1
            setbasket([...basket.filter(item=> item.id !== product.id),checkBasket])
        }else{
            setbasket([...basket, {
                id:product.id,
                amount:1
            }])
        }
    }

    const removeBasket=()=>{
        const currentBasket=basket.find(item=>item.id===product.id)
        currentBasket.amount -= 1
        const basketWithoutCurrent =basket.filter(item=>item.id !==product.id)
        if(currentBasket.amount===0){
            setbasket([...basketWithoutCurrent])
        }else{
            setbasket([...basketWithoutCurrent,currentBasket])
        }
    }
    return (
        <> 
            <div className="product">
                <h6>{product.title}</h6>
                <p className='price'>${moneyFormat(product.price)}</p>
                <div className="actions">
                    <button disabled={!basketItem} onClick={removeBasket} >Sat</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button disabled={total+product.price > money} onClick={addBasket}>Satın Al</button>
                </div>
            </div>
        </>
    )
}

export default Product