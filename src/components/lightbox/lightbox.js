import React from "react";

import * as classes from "./lightbox.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useEmblaCarousel } from "embla-carousel/react";

import LightboxInfo from "./lightboxInfo";

const Lightbox = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  console.log(emblaApi);
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
              <div
                key={edge.node.frontmatter.id}
                // onClick={props.hide}
                className="embla__slide"
              >
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

export default Lightbox;
