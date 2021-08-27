import React from "react";

import Transition from "../components/transition/Transition";
import Header from "./header";
import ArtistText from "./artistText";
import Footer from "./footer";

import "./index.css";

const Layout = (props) => {
  return (
    <>
      <Header location={props.location} />
      <ArtistText location={props.location} />
      <Transition location={props.location}>
        <main>{props.children}</main>
        <Footer />
      </Transition>
    </>
  );
};

export default Layout;
