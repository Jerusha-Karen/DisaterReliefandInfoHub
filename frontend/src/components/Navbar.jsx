import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiUser,
  HiHome,
  HiHeart,
  HiAcademicCap,
  HiUsers,
  HiInformationCircle,
  HiExclamationCircle,
} from "react-icons/hi2";
import { BsDropletFill } from "react-icons/bs";
import GTranslate from "../utils/Gtranslate";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/register"); // Navigate to signup page
  };

  return (
    <div className="bg-gray-100 shadow-md">
      {/* Top Bar - remains unchanged on all screens */}
      <div className="flex justify-between items-center px-6 py-3">
        <span className="text-2xl font-bold text-red-500">
          Disaster Relief Hub
        </span>

        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="gtranslate_wrapper">
            <GTranslate />
          </div>

          {/* Sign In Icon */}
          <button
            onClick={handleSignInClick}
            className="text-red-500 text-2xl hover:scale-110 transition-transform"
            title="Sign In"
          >
            <HiUser />
          </button>
        </div>
      </div>

      {/* Main Navigation - responsive */}
      <nav className="flex gap-6 px-6 py-3 bg-white shadow-sm font-bold text-lg justify-between sm:justify-start overflow-x-auto">
        <Link
          to="/"
          className="flex flex-col sm:flex-row items-center gap-1 hover:text-red-500"
        >
          <HiHome className="text-2xl" />
          <span className="hidden sm:inline">Home</span>
        </Link>

        <Link
          to="/donate"
          className="flex flex-col sm:flex-row items-center gap-1 hover:text-red-500"
        >
          <HiHeart className="text-2xl" />
          <span className="hidden sm:inline">Donate</span>
        </Link>

        <Link
          to="/donateblood"
          className="flex flex-col sm:flex-row items-center gap-1 hover:text-red-500"
        >
          <BsDropletFill className="text-2xl" />
          <span className="hidden sm:inline">Give Blood</span>
        </Link>

        <Link
          to="/train"
          className="flex flex-col sm:flex-row items-center gap-1 hover:text-red-500"
        >
          <HiAcademicCap className="text-2xl" />
          <span className="hidden sm:inline">Training</span>
        </Link>

        <Link
       to="/volunteer"  
       className="flex flex-col sm:flex-row items-center gap-1 hover:text-red-500"
      >
      <HiUsers className="text-2xl" />
      <span className="hidden sm:inline">Volunteer</span>
      </Link>

        <Link
          to="/"
          className="flex flex-col sm:flex-row items-center gap-1 hover:text-red-500"
        >
          <HiInformationCircle className="text-2xl" />
          <span className="hidden sm:inline">About Us</span>
        </Link>

        <Link
          to="#"
          className="flex flex-col sm:flex-row items-center gap-1 text-red-500"
        >
          <HiExclamationCircle className="text-2xl" />
          <span className="hidden sm:inline">Get Help</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
