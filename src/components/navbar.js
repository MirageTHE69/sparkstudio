// Navbar.js

import React from "react"
import { span } from "gatsby" // Import span for Gatsby routing
import logoImg from "../images/logo.png"

function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between h-20 pt-5  items-center  backdrop-filter backdrop-blur-lg  bg-black bg-opacity-0 z-50 shadow-2xl ">
      <div className="container mx-auto  flex items-center">
        <div>
          <img src={logoImg} alt="LOGO" className="h-32 w-32 ml-10  object-contain" />
        </div>
        <ul className="w-full space-x-10 pr-8 flex justify-center gap-7 items-center">
          <li>
            <span to="/" className="text-white">
              Home
            </span>
          </li>
          <li>
            <span to="/about" className="text-white">
              About
            </span>
          </li>
          <li>
            <span to="/services" className="text-white">
              Services
            </span>
          </li>
          <li>
            <span to="/contact" className="text-white">
              Contact
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
