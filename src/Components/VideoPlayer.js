import React from "react";
import { YOUTUBE_BASE_URL } from "../Constants/Urls";

const Videoplayer = ({ videoId }) => {
  if (!videoId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }

  return (
    <div className="video-player">
      <iframe
        title={videoId}
        className="video-iframe p-3"
        src={YOUTUBE_BASE_URL + videoId}
      />
    </div>
  );
};

export default Videoplayer;
