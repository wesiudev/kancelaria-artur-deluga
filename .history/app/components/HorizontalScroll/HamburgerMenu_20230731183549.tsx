"use client";
import React, { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-[1500]">
      {/* Hamburger Button */}
      <div className="burger-btn">
        <div className="line translate-x"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Menu Items */}
      <div
        className={`menu-items ${
          isOpen ? "flex flex-col items-center mt-4" : "hidden"
        }`}
      >
        <a href="#" className="text-black hover:text-gray-800 py-2">
          Home
        </a>
        <a href="#" className="text-black hover:text-gray-800 py-2">
          About
        </a>
        <a href="#" className="text-black hover:text-gray-800 py-2">
          Services
        </a>
        <a href="#" className="text-black hover:text-gray-800 py-2">
          Contact
        </a>
      </div>
    </div>
  );
}

export default HamburgerMenu;
