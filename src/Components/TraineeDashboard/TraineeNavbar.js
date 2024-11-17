import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const TraineeNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center justify-between px-10 py-2 bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      {/* Left Side - Search Bar */}
      <div className="flex-grow">
        <input
          type="text"
          placeholder="Search..."
          className=" px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Side - Profile Icon with Dropdown */}
      <div className="relative ml-4">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none flex items-center"
        >
          <FaUserCircle className="text-3xl" />
        </button>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 text-gray-800"
          >
            <button
              onClick={() => console.log("Settings clicked")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
            >
              Settings
            </button>
            <button
              onClick={() => console.log("Logout clicked")}
              className="block w-full px-4 py-2 text-left hover:bg-gray-200"
            >
              Logout
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TraineeNavbar;
