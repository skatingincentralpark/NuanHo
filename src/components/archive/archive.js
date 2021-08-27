import React, { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CSSTransition } from "react-transition-group";

import Lightbox from "../lightbox/lightbox";
import * as classes from "./archive.module.css";

const Archive = (props) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const currIndexHandler = (e) => {
    setCurrIndex(parseInt(e.target.getAttribute("data-index")));
    setStartIndex(parseInt(e.target.getAttribute("data-index")));
    setShowLightbox(true);
  };

  // scroll lock when lightbox is open
  useEffect(() => {
    if (showLightbox) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      // document.getElementsByTagName("html")[0].style.position = "fixed";
    } else {
      document.getElementsByTagName("body")[0].style = "";
      // document.getElementsByTagName("html")[0].style = "";
    }

    return () => {
      document.getElementsByTagName("body")[0].style = "";
    };
  }, [showLightbox]);

  const increaseCurrIndexHandler = () => {
    if (currIndex === props.fullSizeData.length - 1) {
      setCurrIndex(0);
    } else if (currIndex < props.fullSizeData.length - 1) {
      setCurrIndex((prev) => parseInt(prev) + 1);
    }
  };
  const decreaseCurrIndexHandler = () => {
    if (currIndex === 0) {
      setCurrIndex(props.fullSizeData.length - 1);
    } else if (currIndex > 0) {
      setCurrIndex((prev) => parseInt(prev) - 1);
    }
  };

  const setCurrIndexHandler = (index) => {
    setCurrIndex(index);
  };

  const hideLightboxHandler = () => {
    setShowLightbox(false);
  };

  return (
    <>
      <div className={classes.intro}>
        <h1>Nuan Ho</h1>
        <h2>Archive</h2>
      </div>
      <CSSTransition
        in={showLightbox}
        timeout={250}
        unmountOnExit
        classNames="fade"
      >
        <>
          {props.fullSizeData && (
            <div className="lightbox-container">
              <Lightbox
                hide={hideLightboxHandler}
                fullSizeData={props.fullSizeData}
                currIndex={currIndex}
                startIndex={startIndex}
                increase={increaseCurrIndexHandler}
                decrease={decreaseCurrIndexHandler}
                setCurrIndexHandler={setCurrIndexHandler}
              />
            </div>
          )}
        </>
      </CSSTransition>

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
