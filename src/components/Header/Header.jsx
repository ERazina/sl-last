import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import NavigationDesktop from "./../Navigation/NavigationDesktop";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import "./Header.scss";

function Header() {
  const [opened, setOpened] = useState(false);

  const toggleDropDown = () => {
    console.log(opened);
    setOpened(!opened);
  };
  return (
    <div className="header">
      <div className="header-nav">
        <h1>SL</h1>
        <button class="dropdown-btn" onClick={toggleDropDown}>
          {opened ? <GrClose /> : <BiMenuAltRight />}
        </button>
      </div>
      <MobileNavigation opened={opened} setOpened={toggleDropDown} />
      <NavigationDesktop />
    </div>
  );
}

export default Header;
