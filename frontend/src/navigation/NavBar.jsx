import React from 'react'
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
      <div className="flex gap-10 justify-end bg-gray-900 text-gray-300 px-10 py-3" >
          <NavLink to="/">Home</NavLink>
          <NavLink to="admin-dashboard">Admin Dashboard</NavLink>
    </div>
  )
}
