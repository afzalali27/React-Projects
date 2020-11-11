import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = (formValues) => {
    // console.log("updated data", formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream)
      return (
        <div class="ui segment" style={{ padding: "50px" }}>
          <div class="ui active dimmer">
            <div class="ui text loader">Loading</div>
          </div>
        </div>
      );
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        ></StreamForm>
      </div>
    );
  }
}
// own props are the props of component
const mapStateToProps = (state, ownProps) => {
  // select the appropriate stream we want to edit
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
