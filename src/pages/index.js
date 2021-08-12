import * as React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layouts/layout";
import Seo from "../components/seo/seo";

const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <Seo title="Home" />
      <div className="gallery">
        {props.data.featuredArtwork.edges.map((edge) => (
          <GatsbyImage
            image={getImage(edge.node.frontmatter.image.childImageSharp)}
            alt={edge.node.frontmatter.title}
            key={edge.node.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query FeaturedArtworkQuery {
    featuredArtwork: allMarkdownRemark(
      filter: {
        frontmatter: {
          image: { sourceInstanceName: { eq: "featuredartwork" } }
        }
      }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            order
            image {
              publicURL
              childImageSharp {
                gatsbyImageData(quality: 100, placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
