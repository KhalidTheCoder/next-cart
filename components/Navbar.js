"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    // Redirects to the home page or login page after logout
    await signOut({ callbackUrl: "/" });
  };

  const renderAuthButton = () => {
    // Show a loading state or nothing if the session is still loading
    if (status === "loading") {
      return null;
    }

    if (session) {
      // If a session exists (user is logged in), show the Logout button
      return (
        <button
          onClick={handleLogout}
          className="bg-[#D4C9BE] text-[#030303] font-medium text-lg px-5 py-2 rounded-lg shadow hover:bg-[#123458] hover:text-[#F1EFEC] transition-all duration-300 transform hover:scale-105"
        >
          Logout
        </button>
      );
    } else {
      // If no session exists, show the Login button
      return (
        <Link
          href="/login"
          className="bg-[#D4C9BE] text-[#030303] font-medium text-lg px-5 py-2 rounded-lg shadow hover:bg-[#123458] hover:text-[#F1EFEC] transition-all duration-300 transform hover:scale-105"
        >
          Login
        </Link>
      );
    }
  };

  return (
    <nav className="bg-[#F1EFEC] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold text-[#123458] hover:text-[#D4C9BE] transition-colors duration-300"
        >
          NextCraft
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-[#030303] font-medium text-lg hover:text-[#123458] transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-[#030303] font-medium text-lg hover:text-[#123458] transition-colors duration-300"
          >
            Products
          </Link>
          {/* Conditionally render the button based on login status */}
          {renderAuthButton()}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#123458] focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F1EFEC] px-6 pt-2 pb-4 space-y-4 border-t border-[#D4C9BE]">
          <Link
            href="/"
            className="block text-[#030303] font-medium text-lg hover:text-[#123458] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block text-[#030303] font-medium text-lg hover:text-[#123458] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          {/* Conditionally render the button for the mobile menu */}
          <div
            onClick={() => {
              setMenuOpen(false);
              if (session) {
                handleLogout();
              }
            }}
          >
            {renderAuthButton()}
          </div>
        </div>
      )}
    </nav>
  );
}