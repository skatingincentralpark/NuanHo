import React from "react";

import { Link } from "gatsby";

const Header = ({ location }) => {
  return (
    <header>
      <button className="info-btn">[info]</button>
      {location.pathname === "/" ? (
        <Link to="/archive">[archive]</Link>
      ) : (
        <Link to="/">[home]</Link>
      )}
    </header>
  );
};

export default Header;
