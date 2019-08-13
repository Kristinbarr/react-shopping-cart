import React from 'react'
import { useContext } from 'react'
import CartContext from '../contexts/CartContext'

import Item from './ShoppingCartItem'

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext)
	// let cart = JSON.parse(localStorage.getItem('ShoppingCart')) || ''

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price
      }, 0)
      .toFixed(2)
  }

  const removeItem = (unique_id) => {
    let filtered = cart.filter((item) => {
			return unique_id !== item.unique_id
    })
		setCart(filtered)
		// localStorage.setItem('ShoppingCart', JSON.stringify(filtered))
		getCartTotal()
  }

  return (
    <div className='shopping-cart'>
      {cart.map((item) => (
        <Item key={item.unique_id} {...item} removeItem={removeItem} />
      ))}

      <div className='shopping-cart__checkout'>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default ShoppingCart
