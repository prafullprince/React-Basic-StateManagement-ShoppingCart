import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const Product = ({ item }) => {

  const info = item.description.substring(0, 50);
  const cart = useSelector( (state)=> state.cart );
  const isInCart = cart.some( (it)=> it.id === item.id );

  const dispatch = useDispatch();

  function add(){
    dispatch(addToCart(item));
    toast.success("Item added successfully");
  }

  function remove(){
    dispatch(removeFromCart(item.id));
    toast.success("Item removed successfully");
  }

  return (
    <div className="flex flex-col max-w-xs rounded-lg shadow-lg p-5">
      <h3 className="text-lg font-semibold mb-2 text-gray-900 truncate">
        {item.title}
      </h3>
      <p className="text-sm text-gray-500 mb-4">{info}</p>
      <img src={item.image} alt="" className="w-full mb-4 h-52" />
      <div className="mt-auto flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">${item.price}</span>
        <div className="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">
          {
            cart && isInCart ? 
                         (<button onClick={remove}>Remove</button>) :
                         (<button onClick={add}>Add</button>)
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
