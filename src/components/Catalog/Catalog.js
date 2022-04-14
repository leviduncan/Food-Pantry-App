import React, { useState } from 'react'
import Basket from './Basket'
import Header from './Header'
import Main from './Main'
import data from './data'

function App() {
  const { products } = data

  const [cartItems, setCartItems] = useState([])

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }

  const onRemove = ( product ) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1 } : x))
    }
  }

  return (
    <>
      <Header countCartItems = {cartItems.length}/>
      <div className="container">
        <div className="row d-flex flex-column flex-md-row flex-column-reverse catalog">
          <div className="col col-md-8"><Main onAdd={onAdd} products={products}/></div>
          <div className="col col-md-4 basket"><Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} /></div>
        </div>
      </div>
    </>
  );
}

export default App;
