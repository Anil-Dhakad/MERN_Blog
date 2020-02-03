import React, { Component } from "react";
import ShowAllReply from "./ShowAllReply";

class ShowOtherPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showreply: false
    };
  }

  repliesHandler = e => {
    this.setState({
      showreply: true
    });
  };

  showReplies = e => {
    if (this.state.showreply) {
      return <ShowAllReply />;
    }
  };

  render() {
    // let len = 10;
    return (
      <div style={{ backgroundColor: "grey", width: "50%" }}>
        <div>
          <div>
            <br />
            <div style={{ float: "left" }}>
              <strong>Name Dhakad:</strong>
              <br />
              <button onClick={this.repliesHandler}>Show all replies</button>
            </div>
            <textarea
              type="text"
              rows="3"
              cols="35"
              style={{ resize: "both", overflow: "auto" }}
            ></textarea>
          </div>
          {this.showReplies()}
          <br />
          <input type="text" name="reply" placeholder="Reply" />
          &nbsp;&nbsp;<button>Reply</button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default ShowOtherPost;
