import React from "react";
import useForm from "../../hooks/useForm";
import { useAuth } from "../../contexts/AuthContext";

function LoginForm() {
  const [formData, handleChange] = useForm({
    username: "",
    password: "",
  });
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      // Redirect or show success message
    } catch (error) {
      console.error("Login failed:", error);
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
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Log In{" "}
      </button>{" "}
    </form>
  );
}

export default LoginForm;
