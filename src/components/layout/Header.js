import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";

function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          E - Shop{" "}
        </Link>{" "}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">
                Home{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link to="/cart" className="hover:text-blue-200">
                Cart({cart.length}){" "}
              </Link>{" "}
            </li>{" "}
            {user ? (
              <>
                <li>
                  <Link to="/profile" className="hover:text-blue-200">
                    Profile{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  <button onClick={logout} className="hover:text-blue-200">
                    Logout{" "}
                  </button>{" "}
                </li>{" "}
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-blue-200">
                    Login{" "}
                  </Link>{" "}
                </li>{" "}
                <li>
                  <Link to="/register" className="hover:text-blue-200">
                    Register{" "}
                  </Link>{" "}
                </li>{" "}
              </>
            )}{" "}
          </ul>{" "}
        </nav>{" "}
      </div>{" "}
    </header>
  );
}

export default Header;
