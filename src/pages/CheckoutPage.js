import React, { useState } from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import PaymentForm from "../components/checkout/PaymentForm";
import OrderConfirmation from "../components/checkout/OrderConfirmation";

function CheckoutPage() {
  const [step, setStep] = useState("checkout");
  const [orderDetails, setOrderDetails] = useState(null);

  const handleCheckoutSubmit = (data) => {
    // Process checkout data
    setStep("payment");
  };

  const handlePaymentSubmit = (data) => {
    // Process payment
    setOrderDetails({
      orderNumber: Math.floor(Math.random() * 1000000),
      email: "user@example.com",
      deliveryDate: new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
    });
    setStep("confirmation");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8"> Checkout </h1>{" "}
      {step === "checkout" && <CheckoutForm onSubmit={handleCheckoutSubmit} />}{" "}
      {step === "payment" && <PaymentForm onSubmit={handlePaymentSubmit} />}{" "}
      {step === "confirmation" && (
        <OrderConfirmation orderDetails={orderDetails} />
      )}{" "}
    </div>
  );
}

export default CheckoutPage;
