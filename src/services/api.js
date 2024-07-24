import axios from "axios";

const API_URL = "https://dummyjson.com";

export const api = axios.create({
  baseURL: API_URL,
});

export const fetchProducts = async () => {
  const response = await api.get("/products");
  return response.data.products;
};

export const fetchProduct = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const fetchProductReviews = async (id) => {
  return [
    { id: 1, user: "User1", rating: 4, comment: "Great product!" },
    { id: 2, user: "User2", rating: 5, comment: "Excellent quality!" },
  ];
};

const predefinedUser = {
  id: 1,
  username: "emilys",
  email: "emily.johnson@x.dummyjson.com",
  firstName: "Emily",
  lastName: "Johnson",
  phone: "+81 965-431-3024",
  address: {
    street: "",
    city: "Phoenix",
    state: "Mississippi",
    zipcode: "",
  },
  password: "emilyspass",
};

export const loginUser = async ({ username, password }) => {
  if (
    username === predefinedUser.username &&
    password === predefinedUser.password
  ) {
    return predefinedUser;
  } else {
    throw new Error("Invalid credentials");
  }
};

export const registerUser = async (userData) => {
  return { ...predefinedUser, ...userData };
};

export const fetchUserProfile = async (id) => {
  if (id === predefinedUser.id) {
    return predefinedUser;
  } else {
    throw new Error("User not found");
  }
};

export const fetchOrders = async (userId) => {
  if (userId === predefinedUser.id) {
    return [
      { id: 1, date: "2023-07-01", total: 99.99, status: "Delivered" },
      { id: 2, date: "2023-07-15", total: 149.99, status: "Shipped" },
    ];
  } else {
    return [];
  }
};
