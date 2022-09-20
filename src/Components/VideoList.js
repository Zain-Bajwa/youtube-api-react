import React from "react";
import Video from "./Video";

const VideoList = ({ videosMetaData, onVideoSelected }) => {
  return (
    <div className="video-list">
      <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Videos List
        </h3>
        <Video
          videosMetaData={videosMetaData}
          onVideoSelected={onVideoSelected}
        />
      </div>
    </div>
  );
};

export default VideoList;
