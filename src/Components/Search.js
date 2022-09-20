import { useState, useEffect, Fragment } from "react";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import Videoplayer from "./VideoPlayer";

const Search = () => {
  const [videosMetaData, setVideosMetaData] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [keyword, setKeyword] = useState("");

  const onSearchChanged = async (event) => {
    console.log(event.target.value);
    setKeyword(event.target.value);
  };

  const onSubmit = async (event) => {
    // debugger
    console.log(keyword);
    event.preventDefault();
    const response = await Youtube().get("/search", {
      params: {
        q: keyword,
      },
    });

    // event.preventDefault();
    setVideosMetaData(response.data.items);
    setSelectedVideoId(response.data.items[0].id.videoId);
  };

  useEffect(() => {
    console.log(selectedVideoId);
  }, [selectedVideoId]);

  const onVideoSelected = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)} className="search-form">
        <div className="form-controls">
          <label>Search</label>
          <input
            type="text"
            onChange={(e) => onSearchChanged(e)}
            placeholder="Enter Search Keyword"
          />
        </div>
      </form>
      <VideoList onVideoSelected={onVideoSelected} data={videosMetaData} />
      <Videoplayer videoId={selectedVideoId} />
    </Fragment>
  );
};

export default Search;
