import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID urpZdOWWrkJhllNZDvtmdfqqQeWf4beqGGI2KGhajOk",
  },
});
