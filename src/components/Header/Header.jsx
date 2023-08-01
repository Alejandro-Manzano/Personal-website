import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header>
      <NavLink to='/'>Home</NavLink>
                
      <NavLink to='/projects' >Projects</NavLink>
    </header>
  )
}

export default Header
