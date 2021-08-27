import React from "react";

const ArtistText = (props) => {
  return (
    <div className="artist-text">
      {props.location.pathname === "/" ? (
        <>
          <h1>Nuan Ho</h1>
          <h2>Sydney, Australia</h2>
          <p>@nuanhoart</p>
          <p>nuanhoart@gmail.com</p>
        </>
      ) : null}
    </div>
  );
};

export default ArtistText;
