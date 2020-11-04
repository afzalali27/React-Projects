import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h3>Warning!</h3>
        Are you sure you want to approve this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="afzal"
          date="Today 6:00 PM"
          comment="Nice post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <CommentDetail
        author="jacob"
        date="Today 7:00 PM"
        comment="This blog is really helpful"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="alice"
        date="Today 9:30 AM"
        comment="I appreciate the post , just keep it up"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
