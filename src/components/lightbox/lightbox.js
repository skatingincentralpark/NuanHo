import React, { useEffect } from "react";

import * as classes from "./lightbox.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useEmblaCarousel } from "embla-carousel/react";

import LightboxInfo from "./lightboxInfo";

const Lightbox = (props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
    containScroll: "trimSnaps",
    loop: true,
    // pointerUp: () => {
    //   console.log(emblaApi.selectedScrollSnap());
    // },
  });

  // useEffect(() => {
  //     console.log(emblaApi.selectedScrollSnap());
  // }, []);

  // console.log(emblaRef);

  const increase = () => {
    emblaApi.scrollNext();
    props.setCurrIndexHandler(emblaApi.selectedScrollSnap());
  };
  const decrease = () => {
    emblaApi.scrollPrev();
    props.setCurrIndexHandler(emblaApi.selectedScrollSnap());
  };

  // emblaRef.on("pointerUp", () => {
  //   console.log(emblaApi.selectedScrollSnap());
  // });

  return (
    <>
      <div className={classes.lightbox_buttons}>
        <button onClick={decrease} className="btn">
          prev
        </button>
        <button onClick={increase} className="btn">
          next
        </button>
        <button onClick={props.hide} className="btn">
          [close]
        </button>
      </div>

      <div className={classes.lightbox}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {props.fullSizeData.map((edge, i) => (
              <div key={i} className="embla__slide">
                <GatsbyImage
                  image={getImage(edge.node.frontmatter.image)}
                  alt={edge.node.frontmatter.title}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {emblaApi && (
        <LightboxInfo
          frontmatter={props.fullSizeData[props.currIndex].node.frontmatter}
        />
      )}
      <div className={classes.backdrop} />
    </>
  );
};

export default Lightbox;
