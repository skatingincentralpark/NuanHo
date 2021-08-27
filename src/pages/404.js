import * as React from "react";

import { Link } from "gatsby";

const NotFoundPage = (props) => {
  return (
    <>
      <p>There's nothing here.</p>
      <Link to="/">Go back</Link>
    </>
  );
};

export default NotFoundPage;
