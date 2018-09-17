import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  async handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();

    try {
      // request to server to add a new username/password
      const response = await axios.post("/user/", {
        username: this.state.username,
        password: this.state.password
      });
      console.log(response);
      if (!response.data.errmsg) {
        console.log("successful signup");
        // redirect to login page
        this.setState({ redirectTo: "/login" });
      } else {
        console.log("username already taken");
      }
    } catch (err) {
      console.log("signup error: ", err);
    }
  }

  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-md-6 d-{xs,sm}-none">
      <img src={require('../../assets/images/bg/02.png')} width="100%"/>
      </div>
      <div className="col-md-6 col-sm-12 p-5">
        <h2 className="mb-5">Register</h2>
        <form>
          <div class="form-group">
            <label className="form-label" htmlFor="username"><small>USERNAME</small></label>
            <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />    
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label className="form-label" htmlFor="password"> <small>PASSWORD </small>{" "}</label>
            <input
                className="form-control"
                placeholder="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
          </div>

          <button
            className="btn btn-primary btn-lg btn-block my-5"
            onClick={this.handleSubmit}
            type="submit"
          >
            Sign Up
          </button>
        </form>

      </div>        
      </div>
      </div>
    );
  }
}

export default Signup;