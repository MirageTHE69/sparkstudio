// Navbar.js

import React from "react"
import { Link } from "gatsby" // Import Link for Gatsby routing
import logoImg from "../images/logo.png"

function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between h-20 pt-5  items-center  backdrop-filter backdrop-blur-lg  bg-black bg-opacity-80 z-50 shadow-2xl ">
      <div className="container mx-auto flex items-center">
        <div>
          <img src={logoImg} alt="LOGO" className="h-24 w-24 object-contain" />
        </div>
        <ul className="w-full space-x-10 flex justify-center gap-7 items-center">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
