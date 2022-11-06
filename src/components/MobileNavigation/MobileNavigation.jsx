import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UseLocalStorage from "../../hooks/UseLocalStorage";
import "./MobileNavigation.scss";

function MobileNavigation({ opened, setOpened }) {
  const { t } = useTranslation();
  const [storedValue, setValue] = UseLocalStorage("language", "ru");
  return (
    <nav className="dropdown">
      <div
        className={
          opened ? "dropdown-content opened" : "dropdown-content closed"
        }
      >
        <NavLink to="/home" className="nav-link" onClick={setOpened}>
          {t("home")}
        </NavLink>

        <NavLink to="/gallery" className="nav-link" onClick={setOpened}>
          {t("gallery")}
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={setOpened}>
          {t("about")}
        </NavLink>
        <NavLink to="/info" className="nav-link" onClick={setOpened}>
          {t("info")}
        </NavLink>
      </div>
    </nav>
  );
}

export default MobileNavigation;
