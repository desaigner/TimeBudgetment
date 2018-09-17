import React, { Component } from "react";
import logo from "../../logo.svg";


class Home extends Component {
  render() {

    return (
      <div className="container-fluid bg-light p-5">
        <div className="row p-3">
          <img src={logo} className="App-logo mx-auto d-block" alt="logo" />
        </div>
        <div className="aboutDescription p-5"><h3>Everyday is a bank account, and <span className="wordwrap">time is our currency.</span></h3>
          This is a simple web application perfect for freelancers, remote
          workers, or anyone who doesn't work a 9 to 5 job that would like to
          keep track of employment related expenses and earnings!
          

        </div>
      </div>
    );
  }
}
export default Home;