import * as React from "react";
import { graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = (props) => {
  return (
    <div>
      {props.data.portfolio.edges.map((edge) => (
        <GatsbyImage
          image={getImage(edge.node.frontmatter.image.childImageSharp)}
          alt="lol"
          key={edge.node.id}
        />
      ))}
    </div>
  );
};

export const query = graphql`
  query PortfolioQuery {
    portfolio: allMarkdownRemark {
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

export default IndexPage;
