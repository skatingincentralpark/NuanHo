import React, { useEffect, useState } from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Seo from "../components/seo/seo";

const IndexPage = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let imgArr = [];

    props.data.featuredArtwork.edges.map((edge) => imgArr.push(edge));

    setImages(imgArr);
  }, [props.data.featuredArtwork.edges]);

  return (
    <>
      <Seo title="Home" />
      {props.data && (
        <div className="gallery">
          {images.map((edge) => (
            <GatsbyImage
              image={getImage(edge.node.frontmatter.image.childImageSharp)}
              alt={edge.node.frontmatter.title}
              key={edge.node.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export const query = graphql`
  query FeaturedArtworkQuery {
    featuredArtwork: allMarkdownRemark(
      filter: { fields: { collection: { eq: "featuredartwork" } } }
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
                gatsbyImageData(
                  width: 750
                  placeholder: BLURRED
                  blurredOptions: { width: 2 }
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
