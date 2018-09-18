import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <container className="container bg-light">
        <div className="row p-5">
          <div className="col-md-3 p-5 m-0 bg-info"></div>
          <div className="col-md-3 p-5 m-0 bg-danger"></div>
          <div className="col-md-3 p-5 m-0 bg-success"></div>
          <div className="col-md-3 p-5 m-0 bg-dark"></div>
        </div>
      </container>
    );
  }
}

export default Dashboard;