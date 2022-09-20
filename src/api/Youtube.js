import {YOUTUBE_API_KEY, YOUTUBE_API_BASE_URL} from "../config"
import axios from "axios";

const Youtube = () => {
  //console.log(YOUTUBE_API_KEY)
  const response = axios.create({
    baseURL: YOUTUBE_API_BASE_URL,
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
