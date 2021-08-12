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
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            description
            title
            image {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 3 }
                  quality: 30
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
      }
    }
    archiveFullSize: allMarkdownRemark(
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
                gatsbyImageData(
                  blurredOptions: { width: 2 }
                  width: 800
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
