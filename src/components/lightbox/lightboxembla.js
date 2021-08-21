import React from "react";

import * as classes from "./lightbox.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useEmblaCarousel } from "embla-carousel/react";

import LightboxInfo from "./lightboxInfo";

const LightboxEmbla = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  return (
    <>
      {emblaApi && (
        <div className={classes.lightbox_buttons}>
          <button onClick={emblaApi.scrollPrev} className="btn">
            prev
          </button>
          <button onClick={emblaApi.scrollNext} className="btn">
            next
          </button>
          <button onClick={props.hide} className="btn">
            [close]
          </button>
        </div>
      )}

      <div className={classes.lightbox}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {props.fullSizeData.map((edge) => (
              <div key={edge.node.frontmatter.id} className="embla__slide">
                <GatsbyImage
                  image={getImage(edge.node.frontmatter.image)}
                  alt={edge.node.frontmatter.title}
                />
              </div>
            ))}
          </div>
        </div>

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

export default LightboxEmbla;
