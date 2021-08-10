import React from "react";
import { Fragment } from "react-is";

import Header from "./header";

import "./index.css";

const Layout = (props) => {
  return (
    <Fragment>
      <Header location={props.location} />
      <main>{props.children}</main>
      <footer>© 2021 Goriot.</footer>
    </Fragment>
  );
};

export default Layout;
