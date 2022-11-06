import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UseLocalStorage from "../../hooks/UseLocalStorage";

import "./NavigationDesktop.scss";

function NavigationDesktop() {
  const { t } = useTranslation();
  const [storedValue, setValue] = UseLocalStorage("language", "ru");
  return (
    <nav className="nav">
      <NavLink to="/home" className="nav-link">
        {t("home")}
      </NavLink>
      <NavLink to="/gallery" className="nav-link">
        {t("gallery")}
      </NavLink>
      <NavLink to="/about" className="nav-link">
        {t("about")}
      </NavLink>
      <NavLink to="/info" className="nav-link">
        {t("info")}
      </NavLink>
    </nav>
  );
}

export default NavigationDesktop;
