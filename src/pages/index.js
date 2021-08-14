import React, { useEffect, useState } from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layouts/layout";
import Seo from "../components/seo/seo";

const IndexPage = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let imgArr = [];

    props.data.featuredArtwork.edges.map((edge) => imgArr.push(edge));

    setImages(imgArr);
  }, [props.data.featuredArtwork.edges]);

  return (
    <Layout location={props.location}>
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
                gatsbyImageData(quality: 70, placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
