import React, { useState, useRef } from "react";

import { Link } from "gatsby";

import HeaderPopup from "./headerPopup";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Header = ({ location }) => {
  const targetRef = useRef(null);
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    if (showNav) {
      enableBodyScroll(targetRef);
    } else {
      disableBodyScroll(targetRef);
    }
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <header ref={targetRef}>
        <div className="header-inner">
          <button onClick={showNavHandler} className="btn">
            [info]
          </button>
          {location.pathname === "/" ? (
            <Link className="nav-btn" to="/archive">
              [archive]
            </Link>
          ) : (
            <Link className="nav-btn" to="/">
              [home]
            </Link>
          )}
        </div>
      </header>
      {showNav && <HeaderPopup />}
    </>
  );
};

export default Header;
