import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import logo from "../../logo.svg";
import axios from "axios";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
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
    event.preventDefault();

    try {
      const response = await axios.post("/user/login", {
        username: this.state.username,
        password: this.state.password
      });

      console.log("login response: ", response);
      const { password, ...user } = response.data.user; // remove password from user
      // update App.js state
      this.props.updateUser({ user: user });
      // update the state to redirect to home
      this.setState({ redirectTo: "/" });
    } catch (err) {
      console.log("login error: ", err);
    }
  }

  render() {
    return this.state.redirectTo ? (
      <Redirect to={{ pathname: this.state.redirectTo }} />
    ) : (
      <div className="container">
      <div className="row">
      <div className="col-md-6 d-{xs,sm}-none">
      <img src={require('../../assets/images/bg/01.png')} width="100%"/>
      </div>
      <div className="col-md-6 col-sm-12 p-5">
        <h2 className="mb-5">Login</h2>
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
              placeholder="Password"
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
          >Login</button>
        </form>

      </div>        
      </div>
      </div>
    );
  }
}

export default LoginForm;
