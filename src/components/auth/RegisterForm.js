import React from "react";
import useForm from "../../hooks/useForm";
import { useAuth } from "../../contexts/AuthContext";

function RegisterForm() {
  const [formData, handleChange] = useForm({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      await register(formData);
      // Redirect or show success message
    } catch (error) {
      console.error("Registration failed:", error);
      // Show error message
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
      >
        Register{" "}
      </button>{" "}
    </form>
  );
}

export default RegisterForm;
