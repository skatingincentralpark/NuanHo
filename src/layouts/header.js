import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import HeaderPopup from "./headerPopup";

const Header = ({ location }) => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav((prev) => !prev);
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
      {showNav && <HeaderPopup showNav={showNav} />}
    </>
  );
};

export default Header;
