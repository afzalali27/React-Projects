import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    // make sure to call parent component
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment search-bar" style={{ marginTop: "10px" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Video</label>
            <input
              value={this.state.term}
              placeholder="search video here"
              type="text"
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
