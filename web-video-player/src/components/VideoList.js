import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const { videos, onVideoSelect } = props;
  const videosList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      ></VideoItem>
    );
  });
  return <div className="ui relaxed divided list">{videosList}</div>;
};

export default VideoList;
