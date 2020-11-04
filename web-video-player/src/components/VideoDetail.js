import React from "react";

const VdieoDetail = (props) => {
  const { video } = props;
  if (!video) {
    return <div>Loading...</div>;
  }
  const vidId = video.id.videoId;
  const videoSrc = `https://www.youtube.com/embed/${vidId}`;
  console.log(videoSrc);
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VdieoDetail;
