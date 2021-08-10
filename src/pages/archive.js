import * as React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layouts/layout";

const ArchivePage = (props) => {
  return (
    <Layout location={props.location}>
      <div className="view-all-gallery">
        {props.data.archive.edges.map((edge) => (
          <>
            <GatsbyImage
              image={getImage(edge.node.frontmatter.image.childImageSharp)}
              alt="lol"
              key={edge.node.id}
            />
            <div className="archive-info">
              <small>{edge.node.frontmatter.date}</small>
              <p className="archive-title">{edge.node.frontmatter.title}</p>
              <p className="archive-description">
                {edge.node.frontmatter.description}
              </p>
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ArchiveQuery {
    archive: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MM YYYY HH:MM")
            description
            title
            image {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 3 }
                  quality: 30
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default ArchivePage;
