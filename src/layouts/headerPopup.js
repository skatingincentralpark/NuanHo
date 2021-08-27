import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const HeaderPopup = (props) => {
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
      <div className="popup-buttons">
        <button onClick={props.showNavHandler} className="btn">
          [close]
        </button>
      </div>

      <p>E: {about.edges[0].node.frontmatter.email}</p>
      <div className="ig">
        <span>IG: </span>
        <a
          href="https://instagram.com/nuanhoart"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          {about.edges[0].node.frontmatter.instagram}
        </a>
      </div>
      <p>Location: {about.edges[0].node.frontmatter.location}</p>

      <p className="bio">{about.edges[0].node.frontmatter.bio}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti
        error rem ducimus quae, dolorum autem cupiditate nobis ex laboriosam a
        pariatur accusantium quam sequi, quas distinctio! Commodi, amet. Culpa!
        Nostrum sit, voluptatum aut aperiam sunt error optio atque fuga totam
        incidunt? Rem dolore, sit ratione harum vero deleniti beatae, ea nostrum
        laboriosam illum pariatur?
      </p>
      <p className="copyright">Nuan Ho © 2021 - Site by NakedLunch</p>
    </div>
  );
};

export default HeaderPopup;
