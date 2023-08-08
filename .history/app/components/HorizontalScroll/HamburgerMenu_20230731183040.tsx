import React, { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button
        className="burger-btn flex flex-col justify-between w-8 h-6 cursor-pointer"
        onClick={toggleMenu}
      >
        <div className={`line ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <div className={`line ${isOpen ? "opacity-0" : ""}`} />
        <div className={`line ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

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
