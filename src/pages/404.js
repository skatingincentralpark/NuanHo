import * as React from "react";

import { Link } from "gatsby";

import Layout from "../layouts/index";

const NotFoundPage = (props) => {
  return (
    <Layout location={props.location}>
      <p>There's nothing here.</p>
      <Link to="/">Go back</Link>
    </Layout>
  );
};

export default NotFoundPage;
