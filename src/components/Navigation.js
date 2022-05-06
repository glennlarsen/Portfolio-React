import React from 'react'
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <NavLink to="/" className='nav-btn nav-btn__tl'>Home</NavLink>
      <NavLink to="/projects" className='nav-btn nav-btn__tr'>Projects</NavLink>
      <NavLink to="/about" className='nav-btn nav-btn__bl'>About</NavLink>
      <NavLink to="/contact" className='nav-btn nav-btn__br'>Contact</NavLink>
    </div>
  )
}

export default Navigation;
