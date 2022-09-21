import React from "react";
import "../App.css";

const selectVideo = (videoMetaData, onVideoSelected) => {
  onVideoSelected(videoMetaData);
};

function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative",
  };
  return _styles;
}

const constructVideoTitles = (videosMetaData, onVideoSelected) => {
  return videosMetaData.map((videoMetaData, index) => {
    return (
      <div
        className="video"
        key={index}
        onClick={() => selectVideo(videoMetaData, onVideoSelected)}
      >
        <div
          style={getCss(videoMetaData.snippet.thumbnails.high.url)}
          key={index}
        />
        <p className="title">{videoMetaData.snippet.title}</p>
      </div>
    );
  });
};

const Video = ({ videosMetaData, onVideoSelected }) => {
  return <>{constructVideoTitles(videosMetaData, onVideoSelected)}</>;
};

export default Video;
