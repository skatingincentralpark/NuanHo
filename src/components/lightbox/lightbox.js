import React from "react";

const Lightbox = () => {
  return (
    <div>
      <div className="lightbox">
        <GatsbyImage
          image={getImage(
            fullSizeData[currIndex].node.frontmatter.image.childImageSharp
          )}
          alt="lol"
        />
      </div>
      <div className="backdrop" onClick={toggleLightBox} />
    </div>
  );
};

export default Lightbox;
