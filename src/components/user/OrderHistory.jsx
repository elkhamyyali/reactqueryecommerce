import React from "react";
import { useQuery } from "react-query";
import { fetchOrders } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";

function OrderHistory() {
  const { user } = useAuth();

  // Ensure user ID is not null or undefined before making the API call
  const ordersQuery = useQuery(
    ["orders", user ? user.id : null],
    () => (user ? fetchOrders(user.id) : Promise.resolve([])),
    {
      enabled: !!user, // Only run the query if `user` is defined
      retry: false, // Disable retrying on failure
      refetchOnWindowFocus: false, // Disable refetching on window focus
    }
  );

  // Extract data from the query result
  const { data: orders, isLoading, error } = ordersQuery;

  if (!user) return <div className="text-center">User not found</div>;

  if (isLoading) return <div className="text-center">Loading orders...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">
        Error loading orders: {error.response?.data?.message || error.message}
      </div>
    );
  if (!orders || orders.length === 0)
    return <div className="text-center">No orders found</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id}>
            <strong className="block text-gray-700">Order ID:</strong>
            <span>{order.id}</span>
            <div>Date: {order.date}</div>
            <div>Total: ${order.total}</div>
            <div>Status: {order.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
