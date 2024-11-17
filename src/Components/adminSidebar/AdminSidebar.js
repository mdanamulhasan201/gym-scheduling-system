"use client";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiHome, FiUsers,FiUserPlus, FiCalendar } from "react-icons/fi";
import { motion } from "framer-motion";

const AdminSidebar = ({ isExpanded, toggleSidebar }) => {
  const links = [
    { title: "Dashboard", href: "/admin", icon: FiHome },
    { title: "Add Trainers", href: "/admin/add-trainers", icon: FiUserPlus },
    { title: "Manage Trainers", href: "/admin/manage-trainers", icon: FiUsers },
    { title: "Class Scheduling", href: "/admin/class-scheduling", icon: FiCalendar },
  ];
  // const pathName = usePathname();
  // className={`${pathName === link.path && "text-red-600"}`}
  return (
    <motion.div
      animate={{
        width: isExpanded ? "16rem" : "4rem",
      }}
      className="bg-gray-800 text-white h-full fixed top-0 left-0 shadow-lg"
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className={`text-xl font-bold ${isExpanded ? "block" : "hidden"}`}
        >
          Admin Panel
        </motion.h2>
        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          {isExpanded ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-4">
        <ul>
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className="flex items-center px-4 py-2 space-x-4 rounded hover:bg-gray-700 transition"
                >
                  {/* Icon */}
                  <Icon size={20} />
                  {/* Title */}
                  {isExpanded && <span className="ml-2">{link.title}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
};

export default AdminSidebar;
