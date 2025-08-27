
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';   // 👈 import from react-scroll
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { IoLogoYen } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  const socialIcons = [
    { icon: <FiGithub />, href: "https://github.com/yashmaurya3377", label: "GitHub" },
    { icon: <FiLinkedin />, href: "www.linkedin.com/in/yash-pratap-full-stack-developer", label: "LinkedIn" },
    { icon: <FiMail />, href: "mailto:yashpratap3377@gmail.com", label: "Email" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/95 backdrop-blur-md py-2 shadow-lg'
        : 'bg-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-13 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <IoLogoYen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
                YASH
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.href}
                    smooth={true}
                    duration={600}
                    offset={-70} // 👈 adjust for navbar height
                    className="relative py-2 font-medium cursor-pointer text-gray-700 hover:text-blue-600"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-4 pt-2 pb-4 bg-white/95 backdrop-blur-lg shadow-lg rounded-b-xl">
          <ul className="space-y-2 py-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <ScrollLink
                  to={link.href}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-50"
                >
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
