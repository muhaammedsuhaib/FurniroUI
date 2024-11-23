import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineUserPlus } from "react-icons/hi2";
import logo from "../assets/brand/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  const renderNavLinks = (isMobile = false) => (
    <ul
      className={`${
        isMobile
          ? "flex flex-col space-y-4 py-4 px-6 bg-gray-50"
          : "hidden md:flex space-x-8"
      }`}
    >
      {navLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-base font-medium text-gray-600 hover:text-yellow-500 transition duration-200"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo and Name */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Furniro Logo" className="h-8 w-auto" />
            <a
              href="/"
              className="text-2xl font-semibold text-gray-800 hover:text-yellow-500 transition duration-200 hidden sm:block"
            >
              Furniro
            </a>
          </div>

          {/* Phone Open  */}
          {renderNavLinks()}

          {/*  Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <HiOutlineUserPlus
              className="text-2xl text-gray-600 cursor-pointer hover:text-yellow-500 transition duration-200"
              title="Login / Sign Up"
            />
            <IoSearchOutline
              className="text-2xl text-gray-600 cursor-pointer hover:text-yellow-500 transition duration-200"
              title="Search"
            />
            <IoIosHeartEmpty
              className="text-2xl text-gray-600 cursor-pointer hover:text-yellow-500 transition duration-200"
              title="Wishlist"
            />
            <BsCart3
              className="text-2xl text-gray-600 cursor-pointer hover:text-yellow-500 transition duration-200"
              title="Cart"
            />

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-yellow-500 transition duration-200"
              onClick={handleMenuToggle}
              aria-label="Toggle Navigation Menu"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>

        {/* phoen open */}
        {menuOpen && renderNavLinks(true)}
      </div>
    </nav>
  );
};

export default Navbar;
