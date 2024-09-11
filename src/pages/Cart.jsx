import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

  const cart = useSelector((state)=>state.cart);

  return (
    <div>
      {
        cart && cart.length > 0 ? 
        (
          <div>
            {
              cart.map((product)=>(
                <CartItem key={product.id} product={product} />
              ))
            }
          </div>
        ) :
        (
          <div>
            <h1>Cart is Empty</h1>
            <NavLink to={'/'}>
              <button>
                Shop Now
              </button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart