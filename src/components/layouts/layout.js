import React from "react";
import { Fragment } from "react-is";

import Header from "./header";
import ArtistText from "./artistText";

import "./index.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Header location={props.location} />
      <main>{props.children}</main>
      <ArtistText />
      <footer>© 2021 Naked Lunch.</footer>
    </Fragment>
  );
};

export default Layout;
