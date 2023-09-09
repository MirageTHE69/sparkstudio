import React, { useCallback } from "react"
import { Link, navigate } from "gatsby"
import { useQueryClient } from "react-query"

import { useUser } from "$hooks/auth"

import { logout } from "$services/auth"

import LogoutIcon from "$assets/logout.svg"

import logoImg from "$images/logo.png"
import defaultUserImg from "$images/user.jpg"

const DashboardNavigation = ({ children }) => {
  return (
    <nav className="px-4 pb-4 flex flex-col justify-between">
      <Link to="/" className="flex mx-auto">
        <figure className="flex items-center py-4 space-x-4">
          <img src={logoImg} alt="LOGO" className="h-14 w-14 object-contain" />
        </figure>
      </Link>

      <ul className="space-y-6 flex-1 mt-20 tab-land:grid tab-land:space-y-0 tab-land:grid-flow-col tab-land:auto-cols-fr tab-land:mt-6">
        {children}
      </ul>

      <div className="flex space-x-4"></div>
    </nav>
  )
}

export default DashboardNavigation
