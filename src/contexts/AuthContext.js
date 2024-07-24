// contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { loginUser, registerUser } from "../services/api";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const userData = await loginUser(credentials);
      setUser(userData);
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const newUser = await registerUser(userData);
      setUser(newUser);
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setCart([]); // Clear the cart data
    localStorage.removeItem("user");
    localStorage.removeItem("cart"); // Remove cart data from localStorage
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, cart, setCart, loading }}
    >
      {children}{" "}
    </AuthContext.Provider>
  );
};
