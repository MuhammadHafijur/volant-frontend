import React from "react";
import logo from "./logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className=" mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center">
          <nav className="hidden md:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-1 sm:mb-4 md:mb-0">
            <img className="" src={logo} alt="" />
            {/* <span className="ml-3 text-xl">Tailblocks</span> */}
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-auto md:ml-5 lg:ml-0">
            <button
              style={{
                backgroundColor: "#DEAB5B",
              }}
              className="inline-flex buynow items-center bg-yellow-600 border-0 py-1 px-2 md:px-12 focus:outline-none hover:bg-gray-200 sm:rounded text-white text-base sm:mt-4 md:mt-0"
            >
              BUY NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
