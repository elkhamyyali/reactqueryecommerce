import React from "react";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

function CartSummary() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4"> Order Summary </h2>{" "}
      <div className="flex justify-between mb-2">
        <span> Subtotal: </span> <span>${subtotal.toFixed(2)}</span>
      </div>{" "}
      <div className="flex justify-between mb-2">
        <span> Tax: </span> <span>${tax.toFixed(2)}</span>
      </div>{" "}
      <div className="flex justify-between mb-4 font-bold">
        <span> Total: </span> <span>${total.toFixed(2)}</span>
      </div>{" "}
      <Link
        to="/checkout"
        className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Proceed to Checkout{" "}
      </Link>{" "}
    </div>
  );
}

export default CartSummary;
