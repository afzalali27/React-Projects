import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";
class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "481093802868-nevmk0p5e55anq54lr91t0sub3lmhuik.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          // exec when gapi loaded
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  renderAuthButton() {
    if (this.props.isSignedIn == null) return null;
    else if (this.props.isSignedIn)
      return (
        <button className="ui red google button" onClick={this.signOutGoogle}>
          <i className="google icon"></i>
          Sign Out
        </button>
      );
    else
      return (
        <button
          className="ui red google button"
          onClick={this.signInWithGoogle}
        >
          <i className="google icon"></i>
          Sign In with Google
        </button>
      );
  }

  signInWithGoogle = () => {
    //console.log(this.auth.currentUser.get().getId());
    this.auth.signIn();
  };
  signOutGoogle = () => {
    this.auth.signOut();
  };
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
