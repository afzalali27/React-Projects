import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    console.log("component mounted");
    // getting location
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // success
        console.log(position);
        var l = position.coords.latitude;
        this.setState({ lat: l });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }
  componentDidUpdate() {
    console.log("component updated!");
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }
    return <Spinner text="Please accept location request!"></Spinner>;
  }
  render() {
    return <div className="SomeClass">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
