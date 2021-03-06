import React, { Component } from "react";
import $ from "jquery";
import NewPost from "./NewPost";
import ShowOtherPost from "./ShowOtherPost";
import ShowYourPost from "./ShowYourPost";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   user_id: "",
      user_name: "",
      user_dob: "",
      user_email: "",
      error: "",
      postbtn: "New Post",
      showpostsbtn: "Your Posts",
      showPosts: false,
      showNewPost: false
    };
    this.getUser = this.getUser.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);

    this.getUser();
  }

  getUser = () => {
    $.ajax({
      url: "http://localhost:5000/Home",
      xhrFields: { withCredentials: true },
      type: "post",
      success: function(response) {
        // console.log("response: ", response);
        if (response === "1") {
          window.location = "/Login";
        } else {
          this.setState({
            // user_id: response[0]._id,
            user_name: response.uname,
            user_dob: response.udob,
            user_email: response.uemail
          });
        }
      }.bind(this),
      error: function(error) {
        console.log(error);
      }
    });
  };

  handleClick1 = event => {
    // switch the value of the showModal state
    this.setState({
      showNewPost: !this.state.showNewPost
    });
    if (this.state.postbtn === "Close") {
      this.setState({
        postbtn: "New Post"
      });
    } else {
      this.setState({
        postbtn: "Close"
      });
    }
  };
  handleClick2 = event => {
    // switch the value of the showModal state
    this.setState({
      showPosts: !this.state.showPosts
    });
    if (this.state.showpostsbtn === "Your Posts") {
      this.setState({
        showpostsbtn: "Other Posts"
      });
    } else {
      this.setState({
        showpostsbtn: "Your Posts"
      });
    }
  };
  getComponent1() {
    // const { user_id } = this.state;
    if (this.state.showNewPost) {
      // show the modal if state showModal is true
      return <NewPost />;
    } else {
      return null;
    }
  }
  getComponent2() {
    // const { user_id } = this.state;
    if (this.state.showpostsbtn === "Your Posts") {
      return <ShowOtherPost />;
    } else {
      return <ShowYourPost />;
    }
  }

  render() {
    const { user_name, user_dob, user_email } = this.state;
    return (
      <div>
        <div>
          <label>Name: </label>
          {user_name}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>Date of Birth: </label>
          {user_dob}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>Email: </label>
          {user_email}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button>Logout</button>
        </div>
        <br />
        <button onClick={this.handleClick1}> {this.state.postbtn} </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.handleClick2}> {this.state.showpostsbtn} </button>
        <br />
        <br />
        {this.getComponent1()}
        <br />
        <br />
        <center>{this.getComponent2()}</center>
      </div>
    );
  }
}

export default Home;
