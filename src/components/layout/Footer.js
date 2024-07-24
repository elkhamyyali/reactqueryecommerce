import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2"> E - Shop </h3>{" "}
            <p> Your one - stop shop for all your needs. </p>{" "}
          </div>{" "}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2"> Quick Links </h3>{" "}
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-300">
                  Home{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/cart" className="hover:text-blue-300">
                  Cart{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/profile" className="hover:text-blue-300">
                  Profile{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2"> Contact Us </h3>{" "}
            <p> Email: support @eshop.com </p> <p> Phone: (123) 456 - 7890 </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-8 text-center">
          <p> & copy; 2024 E - Shop.All rights reserved. </p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}

export default Footer;
