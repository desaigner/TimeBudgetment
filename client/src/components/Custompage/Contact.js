import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <container className="container bg-light">
      <div className="p-5">
        <h3>No one is rich, no one is poor, <span className="wordwrap">we have got 24 hours each.</span></h3>
        <div className="aboutDescription m-2">
          We are happy to help!
        </div>
        <div className="aboutHowItWorks p-5 center">
          <h4>Contact us:</h4>
          <h2 className="text-danger">help@timebudetment.com</h2>
          
        </div>
      </div>

      </container>
    );
  }
}

export default Contact;