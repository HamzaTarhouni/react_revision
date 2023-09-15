import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

var VideoPlayer = ({ videoId, dat }) => {
  const { videoid } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const myuseeffect = () => {
    dat.filter((el) => {
      if (el.id.videoId === videoid) {
        console.log(el.id.videoId, videoid);
        setTitle(el.snippet.title);
        setDescription(el.snippet.description);
      }
    });
  };
  setTimeout(() => {
    myuseeffect();
  }, 1000);
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${
            videoid ? videoid : videoId
          }?autoplay=1`}
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-player-details">
        <h3>{title}</h3>
        <div>{description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
