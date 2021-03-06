import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
import streamReducer from "../../reducers/streamReducer";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdminButtons(stream) {
    if (stream.userId === this.props.currentUserId)
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    return null;
  }
  renderCreateButtonForAdmin() {
    if (this.props.isSignedIn)
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/create" className="ui button black">
            Create Stream
          </Link>
        </div>
      );
  }
  listOfStreams() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdminButtons(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props.streams);
    return (
      <div>
        <h2>My Streams</h2>
        <div className="ui celled list">{this.listOfStreams()}</div>
        {this.renderCreateButtonForAdmin()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  }; // convert object values to array
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
