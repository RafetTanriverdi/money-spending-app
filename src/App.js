import './App.css';
import Header from './Components/Header';
import { useState, useEffect } from 'react';
import Products from "./Products.json"
import Product from './Components/Product';
import Basket from './Components/Basket';


function App() {
  const [money, setmoney] = useState(200000000000);
  const [basket, setbasket] = useState([]);
  const [total, settotal] = useState(0)

  useEffect(() => {
    settotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (Products.find(product => product.id === item.id).price))
    }, 0))


  }, [basket])
  const resetBasket = () => {
    setbasket([])
  }


  return (
    <>
      <Header total={total} money={money} />
      <div className='container products'>
        {Products.map(product => (
          <Product key={product.id} total={total} money={money} basket={basket} setbasket={setbasket} product={product} />

        ))}</div>
      <Basket setbasket={setbasket} total={total} Products={Products} basket={basket} />

    </>
  );
}

export default App;
