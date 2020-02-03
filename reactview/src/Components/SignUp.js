import React, { Component } from "react";
import $ from "jquery";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      dob: "",
      email: "",
      pwd: "",
      cpwd: "",
      error: ""
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler = event => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  submitHandler = e => {
    e.preventDefault();
    const { name, email, pwd, cpwd } = this.state;
    // console.log(pwd, cpwd)
    var err = "";
    if (name !== "" && email !== "" && pwd !== "" && cpwd !== "") {
      if (pwd === cpwd) {
        $.ajax({
          url: "http://localhost:5000/Signup",
          type: "post",
          data: {
            name: this.state.name,
            dob: this.state.dob,
            email: this.state.email,
            pwd: this.state.pwd,
            cpwd: this.state.cpwd
          },
          success: function(response) {
            console.log("response: " + response);
            if (response === "1") window.location = "/Login";
            else {
              this.setState({
                error: response
              });
            }
          }.bind(this),
          error: function(err) {
            console.log("err: " + err);
          }
        });
      } else err = <strong>Password not matched</strong>;
    } else err = <strong>Enter required fields</strong>;
    this.setState({
      error: err
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <table>
          <caption>SignUp</caption>
          <tbody>
            <tr>
              <td>NAME</td>
              <td>
                <input
                  type="text"
                  name="name"
                  required="#"
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>DATE OF BIRTH</td>
              <td>
                <input
                  type="date"
                  name="dob"
                  required="#"
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>EMAIL-ID</td>
              <td>
                <input
                  type="email"
                  name="email"
                  required="#"
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>PASSWORD</td>
              <td>
                <input
                  type="password"
                  name="pwd"
                  required="#"
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>CONFIRM PASSWORD</td>
              <td>
                <input
                  type="password"
                  name="cpwd"
                  required="#"
                  onChange={this.changeHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">SUBMIT</button>
              </td>
              <td>
                <strong>{this.state.error}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default SignUp;
