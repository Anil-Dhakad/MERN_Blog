import React, { Component } from "react";
import ShowAllReply from "./ShowAllReply";
import $ from "jquery";

class ShowYourPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showreply: false
    };

    this.getyourPost = this.getyourPost.bind(this);

    this.getyourPost();
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

  getyourPost = e => {
    $.ajax({
      url: "http://localhost:5000/ShowYourPost",
      type: "post",
      success: function(response) {
        console.log(response);
      }
    });
  };

  render() {
    // let len = 10;
    return (
      <div style={{ backgroundColor: "darkgrey", width: "50%" }}>
        <div>
          <br />
          <div contentEditable="true"></div>
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

export default ShowYourPost;
