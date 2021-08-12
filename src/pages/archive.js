import React, { useState, useEffect } from "react";

import { graphql } from "gatsby";

import Layout from "../components/layouts/layout";
import Seo from "../components/seo/seo";
import Archive from "../components/archive/archive";
import YearNavigation from "../components/archive/yearNavigation";

const ArchivePage = (props) => {
  const allImages = props.data.archive.edges;
  const [data, setData] = useState(allImages);

  const handleClick = (e) => {
    const filterQuery = e.target.value;

    const filteredData = allImages.filter((image) => {
      return image.node.frontmatter.date.includes(filterQuery);
    });

    setData(filteredData);
  };

  return (
    <Layout location={props.location}>
      <Seo title="Archive" description="Archive of past artworks by Nuan Ho." />
      <YearNavigation handleClick={handleClick} />
      <Archive data={data} />
    </Layout>
  );
};

export const query = graphql`
  query ArchiveQuery {
    archive: allMarkdownRemark(
      filter: {
        frontmatter: {
          image: { sourceInstanceName: { eq: "archivedartwork" } }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            description
            medium
            size
            image {
              publicURL
              childImageSharp {
                gatsbyImageData(quality: 30, placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    }
    archiveFullSize: allMarkdownRemark(
      filter: {
        frontmatter: {
          image: { sourceInstanceName: { eq: "archivedartwork" } }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MM YYYY")
            description
            title
            image {
              publicURL
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;

export default ArchivePage;
