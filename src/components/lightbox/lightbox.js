import React from "react";

import * as classes from "./lightbox.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Lightbox = (props) => {
  const handleKeyPress = (event) => {
    if (event.key === "37") {
      console.log("enter press here! ");
    }
  };

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
      <div
        onKeyDown={handleKeyPress}
        className={classes.lightbox}
        onClick={props.hide}
      >
        <GatsbyImage
          image={getImage(
            props.fullSizeData[props.currIndex].node.frontmatter.image
              .childImageSharp
          )}
          alt={props.fullSizeData[props.currIndex].node.frontmatter.title}
        />
      </div>

      <div className={classes.backdrop} />
    </>
  );
};

export default Lightbox;
