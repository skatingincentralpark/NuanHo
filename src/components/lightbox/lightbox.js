import React from "react";

import * as classes from "./lightbox.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";

import LightboxInfo from "./lightboxInfo";

const Lightbox = (props) => {
  return (
    <>
      <div className={classes.lightbox_buttons}>
        <button onClick={props.decrease} className="btn">
          prev
        </button>
        <button onClick={props.increase} className="btn">
          next
        </button>
        <button onClick={props.hide} className="btn">
          [close]
        </button>
      </div>

      <div className={classes.lightbox}>
        <Carousel
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          selectedItem={props.currIndex}
          autoPlay={true}
          animationHandler="fade"
          transitionTime={500}
          swipeable={false}
        >
          {props.fullSizeData.map((edge) => (
            <div key={edge.node.frontmatter.id} onClick={props.hide}>
              <GatsbyImage
                image={getImage(edge.node.frontmatter.image)}
                alt={edge.node.frontmatter.title}
              />
            </div>
          ))}
        </Carousel>

        {/* <GatsbyImage
          image={getImage(
            props.fullSizeData[props.currIndex].node.frontmatter.image
              .childImageSharp
          )}
          alt={props.fullSizeData[props.currIndex].node.frontmatter.title}
        /> */}
      </div>
      <LightboxInfo
        frontmatter={props.fullSizeData[props.currIndex].node.frontmatter}
      />
      <div className={classes.backdrop} />
    </>
  );
};

export default Lightbox;
