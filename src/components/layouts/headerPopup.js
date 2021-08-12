import React from "react";

import { useStaticQuery, graphql } from "gatsby";

const HeaderPopup = () => {
  const { about } = useStaticQuery(
    graphql`
      query {
        about: markdownRemark(fields: { collection: { eq: "about" } }) {
          frontmatter {
            bio
            email
            instagram
            location
          }
        }
      }
    `
  );

  return (
    <div className="header-info">
      <p>
        E: {about.frontmatter.email}
        <br />
        IG: {about.frontmatter.instagram}
        <br />
        Location: {about.frontmatter.location}
      </p>
      <hr />
      <p>{about.frontmatter.bio}</p>
    </div>
  );
};

export default HeaderPopup;
