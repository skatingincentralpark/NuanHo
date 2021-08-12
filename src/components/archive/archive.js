import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import * as classes from "./archive.module.css";

const Archive = (props) => {
  return (
    <div className={classes.archiveGallery}>
      {props.data.map((edge, i) => (
        <div className={classes.archiveGalleryItem} key={edge.node.id}>
          <GatsbyImage
            image={getImage(edge.node.frontmatter.image.childImageSharp)}
            alt={edge.node.frontmatter.title}
            data-index={i}
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
            <small>{edge.node.frontmatter.description}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Archive;
