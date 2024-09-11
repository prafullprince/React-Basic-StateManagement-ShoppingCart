import React from "react";

const Product = ({ item }) => {
  const info = item.description.substring(0, 50);
  return (
    <div class="flex flex-col max-w-xs rounded-lg shadow-lg p-5">
      <h3 class="text-lg font-semibold mb-2 text-gray-900 truncate">
        {item.title}
      </h3>
      <p class="text-sm text-gray-500 mb-4">{info}</p>
      <img src={item.image} alt="" class="w-full mb-4 h-full" />
      <div class="mt-auto flex justify-between items-center">
        <span class="text-lg font-bold text-green-600">${item.price}</span>
        <button class="py-2 px-4 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300">
          REMOVE ITEM
        </button>
      </div>
    </div>
  );
};

export default Product;
