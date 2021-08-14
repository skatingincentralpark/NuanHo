import React from "react";

const LightboxInfo = (props) => {
  return (
    <div className={`artist-text z-index`}>
      <small>{props.frontmatter.date}</small>
      <h1>Nuan Ho</h1>
      <h2>{props.frontmatter.title}</h2>
      <p>{props.frontmatter.medium}</p>
      <p>{props.frontmatter.size}</p>
    </div>
  );
};

export default LightboxInfo;
