import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationDesktop.scss";

function NavigationDesktop() {
  return (
    <nav className="nav">
      <NavLink to="/home" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/gallery" className="nav-link">
        Gallery
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
      <NavLink to="/info" className="nav-link">
        Info
      </NavLink>
    </nav>
  );
}

export default NavigationDesktop;
