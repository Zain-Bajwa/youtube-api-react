import { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import Videoplayer from "./VideoPlayer";
import { YOUTUBE_SEARCH_URL } from "../Constants/Urls";

const Search = () => {
  const [videosMetaData, setVideosMetaData] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState("");
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");
  const [selectedVideoDescription, setSelectedVideoDescription] = useState("");
  const [keyword, setKeyword] = useState("");

  const onSearchChanged = async (event) => {
    setKeyword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const response = await Youtube().get(YOUTUBE_SEARCH_URL, {
      params: {
        q: keyword,
      },
    });
    setVideosMetaData(response.data.items);
    setSelectedVideoId(response.data.items[0].id.videoId);
    setSelectedVideoTitle(response.data.items[0].snippet.title);
    setSelectedVideoDescription(response.data.items[0].snippet.description);
  };

  const onVideoSelected = (selectedVideoMetaData) => {
    setSelectedVideoId(selectedVideoMetaData.id.videoId);
    setSelectedVideoTitle(selectedVideoMetaData.snippet.title);
    setSelectedVideoDescription(selectedVideoMetaData.snippet.description);
  };

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)} className="search-form">
        <div className="input-group justify-content-center">
          <div className="form-outline w-75">
            <input
              type="search"
              id="form1"
              className="form-control"
              onChange={(e) => onSearchChanged(e)}
              placeholder="Search"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => onSubmit(e)}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
      <VideoList
        onVideoSelected={onVideoSelected}
        videosMetaData={videosMetaData}
      />
      <Videoplayer videoId={selectedVideoId} />
      <div>
        <h4 className="px-3">{selectedVideoTitle}</h4>
        <p className="px-3">{selectedVideoDescription}</p>
      </div>
    </Fragment>
  );
};

export default Search;
