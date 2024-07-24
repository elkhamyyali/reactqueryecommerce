import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8"> Login </h1>{" "}
      <div className="max-w-md mx-auto">
        <LoginForm />
        <p className="mt-4 text-center">
          Don 't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here{" "}
          </Link>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
}

export default LoginPage;
