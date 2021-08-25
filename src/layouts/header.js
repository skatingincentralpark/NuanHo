import React, { useState, useRef, useEffect } from "react";

import { clearAllBodyScrollLocks } from "body-scroll-lock";
import { Link } from "gatsby";

import HeaderPopup from "./headerPopup";

const Header = ({ location }) => {
  const [showNav, setShowNav] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const showNavHandler = () => {
    if (!showNav) {
      setShowNav((prev) => true);
      setIsLocked((prev) => true);
    } else {
      setIsLocked((prev) => false);
      // setShowNav((prev) => false);
    }
  };

  useEffect(() => {
    if (!isLocked) {
      setShowNav((prev) => false);
    } else {
      return;
    }
  }, [isLocked]);

  return (
    <>
      <header>
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
      {showNav && (
        <HeaderPopup
          showNav={showNav}
          isLocked={isLocked}
          showNavHandler={showNavHandler}
        />
      )}
    </>
  );
};

export default Header;
