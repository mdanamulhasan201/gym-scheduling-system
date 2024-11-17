"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import AdminSidebar from "@/Components/adminSidebar/AdminSidebar";
import AdminNavbar from "@/Components/adminSidebar/AdminNavbar";

const Layout = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <motion.div
        animate={{
          width: isExpanded ? "16rem" : "4rem",
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="bg-gray-800 text-white"
      >
        <AdminSidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      </motion.div>

      {/* Main Content Container */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <AdminNavbar />

        {/* Main Content */}
        <div className="flex-1 p-4 bg-gray-100">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
