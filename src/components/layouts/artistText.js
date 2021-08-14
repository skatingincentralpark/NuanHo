import React from "react";

const ArtistText = (props) => {
  console.log(props.location);
  return (
    <div className="artist-text">
      <h1>Nuan Ho</h1>
      {props.location.pathname === "/" ? (
        <>
          <h2>Sydney, Australia</h2>
          <p>@nuanhoart</p>
          <p>nuanhoart@gmail.com</p>
        </>
      ) : (
        <>
          <h2>Archive</h2>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </>
      )}
    </div>
  );
};

export default ArtistText;
