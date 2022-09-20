import {YOUTUBE_API_KEY} from "../config"
import axios from "axios";

const Youtube = () => {
  console.log(YOUTUBE_API_KEY)
  const response = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 7,
      key: YOUTUBE_API_KEY,
    },
    headers: {},
  });
return response
};
export default Youtube;
