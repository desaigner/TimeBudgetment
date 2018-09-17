import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  async logout(event) {
    event.preventDefault();
    console.log("logging out");
    try {
      const response = await axios.post("/user/logout");
      console.log(response.data);
      this.props.updateUser({ user: null });
    } catch (err) {
      console.log("Logout error", err);
    }
  }

  render() {
    //console.log("current user ***", this.props.user);
    const loggedIn = this.props.user != null;
    //console.log("navbar render, props: ");
    //console.log(this.props);

    return (
      <div className="bg-light">
        <header className="navbar navbar-light navbg justify-content-center m-2" id="nav-container">
          <div className="row">
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                  <small >HOME</small>
                </Link>
                &#160;<span className="text-info">|</span>&#160;
                <Link to="/projects" className="btn btn-link text-secondary">
                  <small >BUDGETS</small>
                </Link>
                &#160;<span className="text-info">|</span>&#160;
                <Link to="/about" className="btn btn-link text-secondary">
                  <small >ABOUT</small>
                </Link>
                &#160;<span className="text-info">|</span>&#160;
                <Link to="/dashboard" className="btn btn-link text-secondary">
                  <small >PROFILE</small>
                </Link>
                &#160;<span className="text-info">|</span>&#160;
                <Link to="/contact" className="btn btn-link text-secondary">
                  <small>CONTACT</small>
                </Link>
                &#160;<span className="text-info">|</span>&#160;
                <Link
                  to="/login"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <small className="text-danger">LOGOUT</small>
                </Link>
              </section>
            ) : (
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                  <small >HOME</small>
                </Link>
                &#160;<span className="text-info">|</span>&#160;
                <Link to="/signup" className="btn btn-link text-secondary">
                  <small >SIGNUP</small>
                </Link>
                &#160;<span className="text-info">|</span>&#160;
                <Link to="/contact" className="btn btn-link text-secondary">
                  <small>CONTACT</small>
                </Link>
                &#160;<span className="text-info">|</span>&#160;
                <Link to="/login" className="btn btn-link text-secondary">
                  <small className="text-danger">LOGIN</small>
                </Link>
              </section>
            )}
          </div>

        </header>
        
      </div>
    );
  }
}

export default Navbar;