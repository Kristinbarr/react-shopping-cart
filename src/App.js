import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import data from './data'

import ProductContext from './contexts/ProductContext'
import CartContext from './contexts/CartContext'

import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'

function App() {
  const [products] = useState(data)
  const [cart, setCart] = useState([])

  // **commented out code is the version using local storage**
  // const cart = []

  const addItem = (item) => {
		item['unique_id'] = new Date().getTime()
    let newItem = Object.assign({}, item)
		let cartArr = cart
    cartArr.push(newItem)
    setCart(cartArr)
    // localStorage.setItem('ShoppingCart', JSON.stringify([...cart, item]))
		console.log(cartArr)
  }

  return (
		<div className='App'>
		{console.log('cart', cart)}
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation cart={cart} />
          <Route exact path='/' component={Products} />
          <Route path='/cart' component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  )
}

export default App
