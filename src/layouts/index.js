import React from "react";

import { Link } from "gatsby";

import Transition from "../components/transition/Transition";
import Header from "./header";
import ArtistText from "./artistText";

import "./index.css";

const Layout = (props) => {
  return (
    <>
      <Header location={props.location} />
      <ArtistText location={props.location} />
      <Transition location={props.location}>
        <main>{props.children}</main>
        <footer>
          <Link to="www.instagram.com">© 2021 Naked Lunch.</Link>
        </footer>
      </Transition>
    </>
  );
};

export default Layout;
