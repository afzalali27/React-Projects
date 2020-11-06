import unsplash from "../api/unsplash";
import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  // initialization
  state = { images: [] };
  // functions
  onSearchSubmit = async (term) => {
    // console.log(term);
    // call api
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    // console.log("resultant images ", res.data.results);
    this.setState({ images: res.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        Found {this.state.images.length} images
        <ImageList images={this.state.images}></ImageList>
        <div
          class="ui inverted vertical footer segment"
          style={{
            marginTop: "100px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <div class="ui container">
            Image Crawler from unsplash by{" "}
            <a href="https://www.fiverr.com/dur_e_najaf555">Duram</a> -
            Copyright&copy; 2020 All Rights Reserved
          </div>
        </div>
      </div>
    );
  }
}

export default App;
