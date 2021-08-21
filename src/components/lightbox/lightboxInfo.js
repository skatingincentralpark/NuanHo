import React from "react";

import * as classes from "./lightboxinfo.module.css";

const LightboxInfo = (props) => {
  return (
    <div className={classes.lightboxInfo}>
      <small>{props.frontmatter.date}</small>
      <h1>Nuan Ho</h1>
      <h2>{props.frontmatter.title}</h2>
      <span>{props.frontmatter.medium} - </span>
      <span>{props.frontmatter.size}</span>
    </div>
  );
};

export default LightboxInfo;
