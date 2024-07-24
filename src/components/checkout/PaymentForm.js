import React from "react";
import useForm from "../../hooks/useForm";

function PaymentForm({ onSubmit }) {
  const [formData, handleChange] = useForm({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleChange}
        placeholder="Card Number"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="cardName"
        value={formData.cardName}
        onChange={handleChange}
        placeholder="Name on Card"
        required
        className="w-full p-2 border rounded"
      />
      <div className="flex space-x-4">
        <input
          type="text"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          placeholder="MM/YY"
          required
          className="w-1/2 p-2 border rounded"
        />
        <input
          type="text"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          placeholder="CVV"
          required
          className="w-1/2 p-2 border rounded"
        />
      </div>{" "}
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
      >
        Place Order{" "}
      </button>{" "}
    </form>
  );
}

export default PaymentForm;
