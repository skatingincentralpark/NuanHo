import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import HeaderPopup from "./headerPopup";

const Header = ({ location }) => {
  const [showNav, setShowNav] = useState(false);

  // Lock body when popup is open
  useEffect(() => {
    if (showNav) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style = "";
    }

    return () => {
      document.getElementsByTagName("body")[0].style = "";
    };
  }, [showNav]);

  const showNavHandler = () => {
    if (!showNav) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

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
      {showNav && <HeaderPopup showNavHandler={showNavHandler} />}
    </>
  );
};

export default Header;
