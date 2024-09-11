import React from 'react'

const CartItem = ({product}) => {
  return (
    <div class="flex items-center p-4 bg-white rounded-lg shadow-lg">
      <img src={product.image} alt="Product Image" class="w-20 h-20 object-cover mr-4" />
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p class="text-sm text-gray-500">{product.description}</p>
        <span class="text-lg font-bold text-green-600">${product.price}</span>
      </div>
      <button class="text-red-500 hover:text-red-600 ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  )
}
export default CartItem;
