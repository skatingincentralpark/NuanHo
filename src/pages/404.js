import * as React from "react";

import { Link } from "gatsby";

import Layout from "../components/layouts/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <p>There's nothing here.</p>
      <Link to="/">Go back</Link>
    </Layout>
  );
};

export default NotFoundPage;
