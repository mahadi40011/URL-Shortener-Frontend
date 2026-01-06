import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import Container from "./Container";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-1"
          : "bg-white py-2"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              className="md:w-25 md:h-12 w-16 h-8 group-hover:rotate-8 transition-transform"
              src={logo}
              alt="Logo"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((navLink, index) => (
              <NavLink
                key={index}
                to={navLink.path}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-widest transition-all hover:text-green-500 ${
                    isActive
                      ? "text-green-600 border-b-2 border-green-500"
                      : "text-gray-500"
                  }`
                }
              >
                {navLink.name}
              </NavLink>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
