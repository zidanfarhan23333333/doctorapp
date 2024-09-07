import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Logo" className="w-20 h-auto mb-4" />
          <p className="text-center md:text-left">
            Your company tagline or short description goes here.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2">
              <Link to="/home" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <p className="mb-2">Email: contact@yourcompany.com</p>
          <p className="mb-2">Phone: +123-456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
