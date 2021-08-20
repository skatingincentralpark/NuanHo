import React from "react";

const LightboxInfo = (props) => {
  return (
    <div className={`artist-text z-index popup`}>
      <small>{props.frontmatter.date}</small>
      <h1>Nuan Ho</h1>
      <h2>{props.frontmatter.title}</h2>
      <span>{props.frontmatter.medium} - </span>
      <span>{props.frontmatter.size}</span>
    </div>
  );
};

export default LightboxInfo;
