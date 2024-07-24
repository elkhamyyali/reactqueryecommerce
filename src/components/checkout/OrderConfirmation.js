import React from "react";
import { Link } from "react-router-dom";

function OrderConfirmation({ orderDetails }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4"> Thank You for Your Order! </h2>{" "}
      <p className="mb-2"> Your order number is: {orderDetails.orderNumber} </p>{" "}
      <p className="mb-4">
        We 've sent a confirmation email to {orderDetails.email}{" "}
      </p>{" "}
      <p className="mb-8"> Expected delivery: {orderDetails.deliveryDate} </p>{" "}
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Continue Shopping{" "}
      </Link>{" "}
    </div>
  );
}

export default OrderConfirmation;
