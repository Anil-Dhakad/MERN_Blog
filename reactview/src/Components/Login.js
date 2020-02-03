import React, { Component } from "react";
import $ from "jquery";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pwd: "",
      error: ""
    };
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
  submitHandler = event => {
    event.preventDefault();
    let err = "";
    if (this.state.email !== "" && this.state.pwd !== "") {
      // fetch("http://localhost:5000/Login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({ email: this.state.email, pwd: this.state.pwd }),
      //   credentials: "include"
      // })
      //   .then(res => {
      //     if (res === "1") {
      //       this.setState({
      //         error: "Invalid Email-Id and Password"
      //       });
      //     } else {
      //       this.setState({
      //         error: "Logged In "
      //       });
      //       window.location = "/Home";
      //     }
      //   })
      //   .catch(err => console.log("LOGIN :", err));
      $.ajax({
        url: "http://localhost:5000/Login",
        xhrFields: { withCredentials: true },
        type: "post",
        data: {
          email: this.state.email,
          pwd: this.state.pwd
        },
        success: function(response) {
          console.log("response: " + response);
          if (response === "1") {
            this.setState({
              error: "Invalid Email-Id and Password"
            });
          } else {
            // this.setState({
            //   error: "Logged In"
            // });
            window.location = "/Home";
          }
        }.bind(this),
        error: function(err) {
          console.log(err);
        }
      });
    } else {
      err = <strong>Enter required fields</strong>;
    }

    this.setState({
      error: err
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <table>
            <caption>LOGIN</caption>
            <tbody>
              <tr>
                <td>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email-Id"
                    onChange={this.changeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="pwd"
                    placeholder="Password"
                    required="#"
                    onChange={this.changeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit">LOGIN</button>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{this.state.error}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default Login;
