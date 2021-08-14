import React from "react";

import { Link } from "gatsby";

import Header from "./header";
import ArtistText from "./artistText";

import "./index.css";

const Layout = (props) => {
  return (
    <>
      <Header location={props.location} />
      <main>{props.children}</main>
      <ArtistText location={props.location} />
      <footer>
        <Link to="www.instagram.com">© 2021 Naked Lunch.</Link>
      </footer>
    </>
  );
};

export default Layout;
