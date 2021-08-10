import React, { useState } from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layouts/layout";

const ArchivePage = (props) => {
  const allImages = props.data.archive.edges;
  const [data, setData] = useState(allImages);

  const allFullSizeImages = props.data.archiveFullSize.edges;
  const [fullSizeData, setFullSizeData] = useState(allFullSizeImages);

  const [currIndex, setCurrIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const handleClick = (e) => {
    const filterQuery = e.target.value;

    const filteredData = allImages.filter((image) => {
      return image.node.frontmatter.date.includes(filterQuery);
    });

    const filteredFullSizeData = allFullSizeImages.filter((image) => {
      return image.node.frontmatter.date.includes(filterQuery);
    });

    setData(filteredData);
    setFullSizeData(filteredFullSizeData);
  };

  const handleLightbox = (e) => {
    const selectedIndex = e.target.getAttribute("data-index");
    setCurrIndex(selectedIndex);
    setShowLightbox((prev) => !prev);
  };

  const toggleLightBox = () => {
    setShowLightbox((prev) => !prev);
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

      <div className="archive-gallery">
        {data.map((edge, i) => (
          <div className="archive-gallery-item" key={edge.node.id}>
            <GatsbyImage
              image={getImage(edge.node.frontmatter.image.childImageSharp)}
              alt="lol"
              data-index={i}
              onClick={handleLightbox}
            />
            <div className="archive-info">
              <p>index: {i}</p>
              <small>{edge.node.frontmatter.date}</small>
              <p className="archive-title">{edge.node.frontmatter.title}</p>
              <p className="archive-description">
                {edge.node.frontmatter.description}
              </p>
            </div>
          </div>
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
