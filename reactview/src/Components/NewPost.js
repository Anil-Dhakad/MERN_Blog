import React, { Component } from "react";
import $ from "jquery";

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      error: ""
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      comment: e.target.value
    });
  };
  submitHandler = e => {
    // e.preventDefault();
    // console.log("comment: ", this.state.comment);
    // console.log('id: ', this.props.user_id);
    // window.location='/home'
    $.ajax({
      url: "http://localhost:5000/Inserpost",
      xhrFields: { withCredentials: true },
      type: "post",
      data: { comment: this.state.comment },
      success: function(response) {
        console.log("response: ", response);
        if (response === "1") {
          window.location = "/Home";
        } else if (response === "0") {
          this.setState({
            error: <strong>Post not submited...</strong>
          });
        }
      }.bind(this),
      error: function(err) {
        console.log("err: ", err);
      }
    });
  };

  render() {
    // const { comment, onChangeValue } = this.props;
    return (
      <form onSubmit={this.submitHandler}>
        <textarea
          type="text"
          name="comment"
          autoFocus
          required="#"
          onChange={this.changeHandler}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
        <br />
        {this.state.error}
      </form>
    );
  }
}

export default NewPost;
