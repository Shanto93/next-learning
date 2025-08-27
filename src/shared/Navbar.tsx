"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Products", path: "/products" },
    { title: "Dashboard", path: "/dashboard" },
    { title: "Documents", path: "/docs" },
    { title: "Register", path: "/register" },
    { title: "Login", path: "/login" },
    { title: "Counter", path: "/counter" },
    { title: "Profile", path: "/profile" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-green-600">MyApp</div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${
                    isActive
                      ? "text-green-600 font-semibold"
                      : "text-gray-700 hover:text-green-500"
                  } transition-colors`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className={`block ${
                  isActive
                    ? "text-green-600 font-semibold"
                    : "text-gray-700 hover:text-green-500"
                } transition-colors`}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
