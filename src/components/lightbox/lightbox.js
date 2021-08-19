import React from "react";

import * as classes from "./lightbox.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useEmblaCarousel } from "embla-carousel/react";

import LightboxInfo from "./lightboxInfo";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Lightbox = (props) => {
  // const [emblaRef, emblaApi] = useEmblaCarousel({
  //   align: "center",
  //   skipSnaps: false,
  //   containScroll: "trimSnaps",
  // });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "100px",
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

      <div className={classes.lightbox}>
        <Slider {...settings}>
          {props.fullSizeData.map((edge) => (
            <div key={edge.node.frontmatter.id}>
              <GatsbyImage
                image={getImage(edge.node.frontmatter.image)}
                alt={edge.node.frontmatter.title}
              />
            </div>
          ))}
        </Slider>
      </div>

      <LightboxInfo
        frontmatter={props.fullSizeData[props.currIndex].node.frontmatter}
      />
      <div className={classes.backdrop} />
    </>
  );
};

export default Lightbox;
