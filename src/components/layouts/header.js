import React, { useState } from "react";

import { Link } from "gatsby";

import HeaderPopup from "./headerPopup";

const Header = ({ location }) => {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `
  // );

  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <header>
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
      </header>
      {showNav && <HeaderPopup />}
    </>
  );
};

export default Header;
