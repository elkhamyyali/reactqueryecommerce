import React from "react";
import { useCart } from "../../contexts/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-16 h-16 object-cover mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold"> {item.title} </h3>{" "}
        <p className="text-gray-600"> $ {item.price.toFixed(2)} </p>{" "}
      </div>{" "}
      <div className="flex items-center">
        <button
          onClick={() =>
            updateQuantity(item.id, Math.max(1, item.quantity - 1))
          }
          className="bg-gray-200 px-2 py-1 rounded-l"
        >
          -
        </button>{" "}
        <span className="px-4 py-1 bg-gray-100"> {item.quantity} </span>{" "}
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-200 px-2 py-1 rounded-r"
        >
          +
        </button>{" "}
      </div>{" "}
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Remove{" "}
      </button>{" "}
    </div>
  );
}

export default CartItem;
