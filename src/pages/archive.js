import React, { useState, useEffect } from "react";

import { graphql } from "gatsby";

import Layout from "../components/layouts/layout";
import Seo from "../components/seo/seo";
import Archive from "../components/archive/archive";
import YearNavigation from "../components/archive/yearNavigation";

const ArchivePage = (props) => {
  const [data, setData] = useState([]);
  const [fullSizeData, setFullSizeData] = useState([]);

  useEffect(() => {
    const allImages = props.data.archive.edges;
    const allFullSizeImages = props.data.archiveFullSize.edges;

    setData(allImages);
    setFullSizeData(allFullSizeImages);
  }, [props.data.archive.edges, props.data.archiveFullSize.edges]);

  const handleClick = (e) => {
    const filterQuery = e.target.value;

    const allImages = props.data.archive.edges;
    const allFullSizeImages = props.data.archiveFullSize.edges;

    const filteredData = allImages.filter((edge) => {
      return edge.node.frontmatter.date.includes(filterQuery);
    });
    const filteredFullSizeData = allFullSizeImages.filter((edge) => {
      return edge.node.frontmatter.date.includes(filterQuery);
    });

    setData(filteredData);
    setFullSizeData(filteredFullSizeData);
  };

  console.log(data);

  return (
    <Layout location={props.location}>
      <Seo title="Archive" description="Archive of past artworks by Nuan Ho." />
      <YearNavigation handleClick={handleClick} />
      <Archive data={data} fullSizeData={fullSizeData} />
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
            date(formatString: "YYYY")
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
            date(formatString: "YYYY")
            title
            image {
              publicURL
              childImageSharp {
                gatsbyImageData(quality: 60, placeholder: NONE)
              }
            }
          }
        }
      }
    }
  }
`;

export default ArchivePage;
