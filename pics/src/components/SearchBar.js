import React from "react";

class SearchBar extends React.Component {
  // initializations
  state = { term: "" };

  // helper functions

  //   onInputChange(event) {
  //     var search = event.target.value;
  //     // console.log("input changed ", search);
  //     this.setState({ term: search });
  //   }

  onFormSubmit = (event) => {
    event.preventDefault();
    // get text
    //console.log(this.state.term);
    // calling callback function of parent function
    this.props.onSubmit(this.state.term);
  };
  // render function
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Type any keyword to search images"
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
