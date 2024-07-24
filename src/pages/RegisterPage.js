import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8"> Register </h1>{" "}
      <div className="max-w-md mx-auto">
        <RegisterForm />
        <p className="mt-4 text-center">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here{" "}
          </Link>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
}

export default RegisterPage;
