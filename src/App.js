import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />{" "}
                <Route path="/product/:id" element={<ProductPage />} />{" "}
                <Route path="/cart" element={<CartPage />} />{" "}
                <Route path="/checkout" element={<CheckoutPage />} />{" "}
                <Route path="/login" element={<LoginPage />} />{" "}
                <Route path="/register" element={<RegisterPage />} />{" "}
                <Route path="/profile" element={<ProfilePage />} />{" "}
                <Route path="/order-history" element={<OrderHistoryPage />} />{" "}
              </Routes>{" "}
            </Layout>{" "}
          </Router>{" "}
        </CartProvider>{" "}
      </AuthProvider>{" "}
    </QueryClientProvider>
  );
}

export default App;
