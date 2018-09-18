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
          <div className="">
            {loggedIn ? (
              <section className="navbar-section">
                <Link to="/" className="p-2">
                  <small className="smFont text-dark" >HOME</small>
                </Link>
                {/* &#160;<span className="text-info">|</span>&#160; */}
                <Link to="/projects" className="p-2">
                  <small className="smFont text-dark" >BUDGETS</small>
                </Link>
                {/* &#160;<span className="text-info">|</span>&#160; */}
                <Link to="/about" className="p-2">
                  <small className="smFont text-dark" >ABOUT</small>
                </Link>
                {/* &#160;<span className="text-info">|</span>&#160; */}
                <Link to="/dashboard" className="p-2">
                  <small className="smFont text-dark" >PROFILE</small>
                </Link>
                {/* &#160;<span className="text-info">|</span>&#160; */}
                <Link to="/contact" className="p-2">
                  <small className="smFont text-dark">CONTACT</small>
                </Link>
                {/* &#160;<span className="text-info">|</span>&#160; */}
                <Link
                  to="/login"
                  className="p-2"
                  onClick={this.logout}
                >
                  <small className="smFont text-danger">LOGOUT</small>
                </Link>
              </section>
            ) : (
              <section className="navbar-section">
                <Link to="/" className="p-2">
                  <small className="smFont text-dark" >HOME</small>
                </Link>
                {/* &#160;<span className="text-info">|</span>&#160; */}
                <Link to="/signup" className="p-2">
                  <small className="smFont text-dark" >SIGNUP</small>
                </Link>
                {/* &#160;<span className="text-info">|</span>&#160; */}
                <Link to="/contact" className="p-2">
                  <small className="smFont text-dark">CONTACT</small>
                </Link>
                {/* &#160;<span className="text-info">|</span>&#160; */}
                <Link to="/login" className="p-2">
                  <small className="smFont text-danger">LOGIN</small>
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