// Navbar.js

import React from "react"
import logoImg from "../images/logo.png"

function Navbar() {
  return (
    <nav className=" h-20 bg-opacity-50 backdrop-blur-lg fixed top-0 left-0 right-0 bg-black ">
      <div className="container mx-auto flex  items-center">
        <div>
          <img src={logoImg} alt="LOGO" className=" h-24 w-24 object-contain" />
        </div>
        <ul className="w-full space-x-10 flex  justify-center gap-7 items-center ">
          <li>
            <span href="#" className="text-white">
              Home
            </span>
          </li>
          <li>
            <span href="#" className="text-white">
              About
            </span>
          </li>
          <li>
            <span href="#" className="text-white">
              Services
            </span>
          </li>
          <li>
            <span href="#" className="text-white">
              Contact
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
