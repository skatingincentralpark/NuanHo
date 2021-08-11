import * as React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layouts/layout";

const IndexPage = (props) => {
  return (
    <Layout location={props.location}>
      <div className="gallery">
        {props.data.portfolio.edges.map((edge) => (
          <GatsbyImage
            image={getImage(edge.node.frontmatter.image.childImageSharp)}
            alt="lol"
            key={edge.node.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PortfolioQuery {
    portfolio: allMarkdownRemark(
      filter: { frontmatter: { featuredimage: { eq: true } } }
      sort: { fields: frontmatter___orderoffeaturedimage, order: ASC }
    ) {
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
                  quality: 100
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
