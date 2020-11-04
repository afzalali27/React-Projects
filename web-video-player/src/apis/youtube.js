import axios from "axios";
const KEY = "AIzaSyByly8C7cwc376pM-1VHyws6MweWeqsk0I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
