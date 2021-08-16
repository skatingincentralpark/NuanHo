import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Lightbox from "../lightbox/lightbox";
import * as classes from "./archive.module.css";

const Archive = (props) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const currIndexHandler = (e) => {
    setCurrIndex(e.target.getAttribute("data-index"));
    setShowLightbox(true);
  };

  const increaseCurrIndexHandler = () => {
    if (currIndex === props.fullSizeData.length - 1) {
      return;
      // setCurrIndex(0);
    } else if (currIndex < props.fullSizeData.length - 1) {
      setCurrIndex((prev) => parseInt(prev) + 1);
    }
  };
  const decreaseCurrIndexHandler = () => {
    if (currIndex === 0) {
      return;
      // setCurrIndex(props.fullSizeData.length - 1);
    } else if (currIndex > 0) {
      setCurrIndex((prev) => parseInt(prev) - 1);
    }
  };

  const hideLightboxHandler = () => {
    setShowLightbox(false);
  };

  return (
    <>
      {props.fullSizeData && showLightbox && (
        <Lightbox
          currIndex={currIndex}
          fullSizeData={props.fullSizeData}
          increase={increaseCurrIndexHandler}
          decrease={decreaseCurrIndexHandler}
          hide={hideLightboxHandler}
        />
      )}

      {props.data && (
        <div className={classes.archiveGallery}>
          {props.data.map((edge, i) => (
            <div className={classes.archiveGalleryItem} key={edge.node.id}>
              <GatsbyImage
                image={getImage(edge.node.frontmatter.image.childImageSharp)}
                alt={edge.node.frontmatter.title}
                data-index={i}
                onClick={currIndexHandler}
              />
              <div className={classes.archiveInfo}>
                <small>{edge.node.frontmatter.date}</small>
                <p className={classes.archiveTitle}>
                  {edge.node.frontmatter.title}
                </p>
                <p className={classes.archiveDescription}>
                  {edge.node.frontmatter.medium}
                  <br />
                  {edge.node.frontmatter.size}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Archive;
