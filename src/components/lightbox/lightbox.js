import React, { useEffect, useRef } from "react";

import * as classes from "./lightbox.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import LightboxInfo from "./lightboxInfo";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Lightbox = (props) => {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    if (props.lightboxIsVisible) {
      sliderRef.current.slickGoTo(props.currIndex, false);
    }
  }, [props.currIndex, props.lightboxIsVisible]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: props.currIndex,
    afterChange: (current) => props.setCurrIndexHandler(current),
  };

  return (
    <div className={classes.lightboxContainer}>
      <div className={classes.lightbox_buttons}>
        <button onClick={prev} className="btn">
          prev
        </button>
        <button onClick={next} className="btn">
          next
        </button>
        <button onClick={props.hide} className="btn">
          [close]
        </button>
      </div>

      <div className={classes.lightbox}>
        <div className={classes.lightboxInner}>
          <Slider {...settings} ref={sliderRef}>
            {props.fullSizeData.map((edge, i) => (
              <div key={i} className="slide-single">
                <GatsbyImage
                  image={getImage(edge.node.frontmatter.image)}
                  alt={edge.node.frontmatter.title}
                  onClick={props.hide}
                  objectFit="contain"
                />
              </div>
            ))}
          </Slider>

          <LightboxInfo
            frontmatter={props.fullSizeData[props.currIndex].node.frontmatter}
            location={props.location}
          />
        </div>
      </div>
      <div className={classes.backdrop} />
    </div>
  );
};

export default Lightbox;
