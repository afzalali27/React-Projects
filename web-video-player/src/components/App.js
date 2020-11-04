import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VdieoDetail from "./VideoDetail";
import VideoList from "./VideoList";

//
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // to laod some defaults videos
  componentDidMount() {
    this.onSearchVideo("Nature Videos");
  }

  onSearchVideo = async (term) => {
    console.log("search: ", term);
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(res);
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  onVideoSelect = (video) => {
    // console.log("from app", video);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchVideo}> </SearchBar>
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VdieoDetail video={this.state.selectedVideo}></VdieoDetail>
            </div>
            <div className="six wide column">
              {this.state.videos.length} video(s) found!
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
