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
            alt="lol"
            data-index={i}
          />
          <div className={classes.archiveInfo}>
            <small>{edge.node.frontmatter.date}</small>
            <p className={classes.archiveTitle}>
              {edge.node.frontmatter.title}
            </p>
            <p className={classes.archiveDescription}>
              Oil on Canvas
              <br />
              {edge.node.frontmatter.description}
            </p>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              fuga nam, voluptatibus quasi sed suscipit illum excepturi
              exercitationem possimus, autem repellendus minima! Eius accusamus,
              modi magnam ex maiores assumenda officia!
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Archive;
