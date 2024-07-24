import React from "react";
import { useCart } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function Cart() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center text-xl mt-8"> Your cart is empty. </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8"> Your Cart </h1>{" "}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 pr-8">
          {" "}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}{" "}
        </div>{" "}
        <div className="md:w-1/3 mt-8 md:mt-0">
          <CartSummary />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Cart;
