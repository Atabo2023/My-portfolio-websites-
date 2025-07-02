import React from "react";

const Nav = () => {
  return (
    <>
      {/* <div className="text-5xl font-bold">Nav</div> */}
      {/* import React from "react"; /////// */}
      <nav className="bg-gray-800 text-white px-10">
        <div className="container mx-auto px-0 md:px-32 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-3xl font-bold font-rubik">VICTOR</div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-16 font-rubik text-xl">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Services
            </a>
            <a href="#" className="hover:text-gray-400">
              Skills
            </a>
            <a href="#" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* export default Navbar; */}
    </>
  );
};

export default Nav;
