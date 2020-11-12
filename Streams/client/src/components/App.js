import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Header from "./Header";
import history from "../history";
const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      {/* now router will use our history object instead of its own
      but it will give warning , so to remove that warning we will use ROuter instead of 
      browser router */}
      <Router history={history}>
        <Header></Header>
        <div>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/create" exact component={StreamCreate}></Route>
          {/* after : anything is variable like id or whatever we want to pass */}
          <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
          <Route
            path="/streams/delete/:id"
            exact
            component={StreamDelete}
          ></Route>
          <Route path="/streams/show" exact component={StreamShow}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
