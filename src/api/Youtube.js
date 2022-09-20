
import axios from "axios";
const KEY = "AIzaSyASAYP4QzHBGeU6vHe9vJgvsz5sSX9hurw";

const Youtube = () => {
  const response = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
      part: "snippet",
      maxResults: 7,
      key: KEY,
    },
    headers: {},
  });
return response
};
export default Youtube;
