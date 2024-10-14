"use client";

import React, { useState } from "react";
import { Bold, Menu, X } from "lucide-react";
import Image from "next/image";
import {motion} from 'framer-motion'

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  navItems?: NavItem[];
}

const Header: React.FC<HeaderProps> = ({
  logo = "/default-logo.png",
  navItems = [],
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 shadow-md border-1 border-gray-50">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <motion.div 
          initial={{y: -100}}
          animate={{y:0}}
          transition={{delay: 0.3, type: 'spring', stiffness: 300}}
          className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <svg width="250" height="60" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="" />
                <text
                  x="10"
                  y="40"
                  font-family="Arial, Helvetica, sans-serif"
                  font-size="32"
                  fill="white"
                  font-weight="bold"
                >
                  Samuel
                </text>
                <text
                  x="130"
                  y="40"
                  font-family="Arial, Helvetica, sans-serif"
                  font-size="32"
                  fill="green"
                  font-weight={Bold}
                >
                  Portfolio
                </text>
                <circle cx="100" cy="30" r="8" fill="red" />
              </svg>
            </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden bg-black">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300  hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 bg-black" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <motion.nav
           initial={{y: -100}}
           animate={{y:0}}
           transition={{delay: 0.3, type: 'spring', stiffness: 300}}
          className="hidden md:flex space-x-1 gap-8">
            {navItems.map((item) => (
              <motion.a
              whileHover={{scale: 1.2,
                textShadow: "0px 0px 8px rgb(255,255,255)",
              }}  
                key={item.label}
                href={item.href}
                className=" font-medium text-gray-400 hover:text-gray-200 text-lg"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* CTA button */}
          {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black text-gray-100 ring-opacity-5 bg-black divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src={logo}
                    alt="Logo"
                    width={100}
                    height={200}
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only text-white">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700"
                    >
                      <span className="ml-3 text-base font-medium text-gray-100">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            {/* <div className="py-6 px-5 space-y-6">
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
