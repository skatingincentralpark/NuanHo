import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Cv from "./cv";

const HeaderPopup = (props) => {
  const [showCv, setShowCv] = useState(false);

  const showCvHandler = (prev) => {
    if (showCv) {
      setShowCv(false);
    } else {
      setShowCv(true);
    }
  };

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
        <div>
          <button onClick={showCvHandler} className="btn">
            {!showCv ? "[cv]" : "[about]"}
          </button>
          <button onClick={props.showNavHandler} className="btn">
            [close]
          </button>
        </div>
      </div>
      {!showCv && (
        <div className="popup-info">
          <p>
            E: <b>{about.edges[0].node.frontmatter.email}</b>
          </p>
          <div className="ig">
            <span>IG: </span>
            <b>
              <a
                href="https://instagram.com/nuanhoart"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {about.edges[0].node.frontmatter.instagram}
              </a>
            </b>
          </div>
          <p>
            Location: <b>{about.edges[0].node.frontmatter.location}</b>
          </p>

          <p className="bio">{about.edges[0].node.frontmatter.bio}</p>
        </div>
      )}

      {showCv && <Cv />}

      <p className="copyright">Nuan Ho © 2021 - Site by NakedLunch</p>
    </div>
  );
};

export default HeaderPopup;
