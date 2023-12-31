import React from "react";
import { useNavigate } from "react-router-dom";
var VideoListEntry = ({ video }) => {
  const navigate = useNavigate();
  return (
    <div className="video-list-entry media" onClick={()=>navigate(`/${video.id.videoId}`)}>
      <div className="media-left media-middle">
        <img
          className="media-object"
          src={video.snippet.thumbnails.default.url}
          alt=""
        />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{video.snippet.title}</div>
        <div className="video-list-entry-detail">
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
