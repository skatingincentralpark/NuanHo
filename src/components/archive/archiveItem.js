import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as classes from "./archive.module.css";

const ArchiveItem = (props) => {
  return (
    <div className={classes.archiveGalleryItem}>
      <GatsbyImage
        image={getImage(props.image)}
        alt={props.title}
        data-index={props.i}
        onClick={props.currIndexHandler}
      />
      <div className={classes.archiveInfo}>
        <small>{props.date}</small>
        <p className={classes.archiveTitle}>{props.title}</p>
        <p className={classes.archiveDescription}>
          {props.medium}
          <br />
          {props.size}
        </p>
      </div>
    </div>
  );
};

export default ArchiveItem;
