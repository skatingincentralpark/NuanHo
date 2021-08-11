import React, { useState } from "react";

import { graphql } from "gatsby";

import Layout from "../components/layouts/layout";
import Archive from "../components/archive/archive";

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
      <div className="archive-btns">
        <button className="btn" onClick={handleClick} value="">
          [All]
        </button>
        <button className="btn" onClick={handleClick} value="2021">
          [2021]
        </button>
        <button className="btn" onClick={handleClick} value="2020">
          [2020]
        </button>
      </div>
      <Archive data={data} />
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
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
      }
    }
    archiveFullSize: allMarkdownRemark {
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
                  blurredOptions: { width: 2 }
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

export default ArchivePage;
