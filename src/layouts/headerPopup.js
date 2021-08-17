import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const HeaderPopup = () => {
  const { about } = useStaticQuery(
    graphql`
      query MyQuery {
        about: allMarkdownRemark(
          filter: { fields: { collection: { eq: "about" } } }
          sort: { fields: frontmatter___location, order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                bio
                date(formatString: "YYY")
                email
                instagram
                location
              }
              fileAbsolutePath
            }
          }
        }
      }
    `
  );

  return (
    <div className="header-info">
      <p>
        E: {about.edges[0].node.frontmatter.email}
        <br />
        IG: {about.edges[0].node.frontmatter.instagram}
        <br />
        Location: {about.edges[0].node.frontmatter.location}
      </p>
      <hr />
      <p>{about.edges[0].node.frontmatter.bio}</p>
    </div>
  );
};

export default HeaderPopup;
