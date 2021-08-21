import React, { useState, useRef } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CSSTransition } from "react-transition-group";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import Lightbox from "../lightbox/lightbox";
import LightboxEmbla from "../lightbox/lightboxembla";
import * as classes from "./archive.module.css";

const Archive = (props) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const targetRef = useRef(null);

  const currIndexHandler = (e) => {
    setCurrIndex(parseInt(e.target.getAttribute("data-index")));
    setShowLightbox(true);
    disableBodyScroll(targetRef);
  };

  // const increaseCurrIndexHandler = () => {
  //   if (currIndex === props.fullSizeData.length - 1) {
  //     setCurrIndex(0);
  //   } else if (currIndex < props.fullSizeData.length - 1) {
  //     setCurrIndex((prev) => parseInt(prev) + 1);
  //   }
  // };
  // const decreaseCurrIndexHandler = () => {
  //   if (currIndex === 0) {
  //     setCurrIndex(props.fullSizeData.length - 1);
  //   } else if (currIndex > 0) {
  //     setCurrIndex((prev) => parseInt(prev) - 1);
  //   }
  // };

  const setCurrIndexHandler = (index) => {
    setCurrIndex(index);
  };

  const hideLightboxHandler = () => {
    setShowLightbox(false);
    enableBodyScroll(targetRef);
  };

  return (
    <>
      <CSSTransition
        in={showLightbox}
        timeout={250}
        unmountOnExit
        classNames="fade"
        // timeout={{
        //   appear: 500,
        //   enter: 500,
        //   exit: 500,
        // }}
      >
        {props.fullSizeData && (
          // <Lightbox
          //   currIndex={currIndex}
          //   fullSizeData={props.fullSizeData}
          //   hide={hideLightboxHandler}
          //   lightboxIsVisible={showLightbox}
          //   location={props.location}
          //   // increase={increaseCurrIndexHandler}
          //   // decrease={decreaseCurrIndexHandler}
          //   setCurrIndexHandler={setCurrIndexHandler}
          // />
          <LightboxEmbla
            hide={hideLightboxHandler}
            fullSizeData={props.fullSizeData}
          />
        )}
      </CSSTransition>

      {props.data && (
        <div className={classes.archiveGallery} ref={targetRef}>
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
