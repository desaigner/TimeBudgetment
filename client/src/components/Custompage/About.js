import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <container className="container bg-light">
      <div className="p-5">
        <h3>Everyday is a bank account, and time is our currency.</h3>
        <div className="aboutDescription m-2">
          This is a simple web application perfect for freelancers, remote
          workers, or anyone who doesn't work a 9 to 5 job that would like to
          keep track of employment related expenses and earnings!
        </div>
        <div className="aboutHowItWorks p-5">
          <h4>How it works is simple:</h4>
          <ul className="list-group">
            <li className="list-group-item list-group-item-info">Sign In or Create and Account</li>
            <li className="list-group-item list-group-item-info">Create or Select A Project</li>
            <li className="list-group-item list-group-item-info">
            View, Create, and Update the tasks associated with the project
            </li>
            <li className="list-group-item list-group-item-info">Add Costs and Expenses for each task</li>
          </ul>
          
        </div>
      </div>

      </container>
    );
  }
}

export default About;