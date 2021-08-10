import React, { useState } from "react";

import { Link } from "gatsby";

const Header = ({ location }) => {
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
      {showNav && (
        <div className="header-info">
          <p>
            E: charles.zhao5461@gmail.com
            <br />
            IG: @portrait_of_innocent_x
            <br />
            Location: Sydney, Australia
          </p>
          <hr />
          <p>
            Currently under design for a Structural Engineer with a hobby for
            working on cars. The generous height of the car workshop is born
            from the scissor car lift requirement, creating a “jump cut“
            connection between the two functions of the home; 1. private
            dwelling & 2. polyvalent car workshop.
            <br />
            <br />
            The three studies are projections of three different structural
            directions forward; consider them mise-en-scene projections of
            construction still images.
          </p>
        </div>
      )}
    </>
  );
};

export default Header;
