import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

import "./MobileNavigation.scss";

function MobileNavigation({ opened, setOpened }) {
  return (
    <nav className="dropdown">
      <div
        className={
          opened ? "dropdown-content opened" : "dropdown-content closed"
        }
      >
        <NavLink to="/home" className="nav-link" onClick={setOpened}>
          Home
        </NavLink>

        <NavLink to="/gallery" className="nav-link" onClick={setOpened}>
          Gallery
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={setOpened}>
          About
        </NavLink>
        <NavLink to="/info" className="nav-link" onClick={setOpened}>
          Info
        </NavLink>
      </div>
    </nav>
  );
}

export default MobileNavigation;
