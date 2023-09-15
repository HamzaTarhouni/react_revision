import React from "react";
import VideoListEntry from "./VideoListEntry";

const VideoList = ({ videos, search }) => (
  <div className="video-list">
    <ul>
      {videos
        .filter((video) =>
          video.snippet.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((video) => (
          <VideoListEntry video={video} key={video.id.videoId} />
        ))}
    </ul>
  </div>
);

export default VideoList;
