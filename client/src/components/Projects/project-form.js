import React, { Component } from "react";
import axios from "axios";

class ProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      projectName: "",
      projectDescription: "",
      projectBudget: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    try {
      console.log("saving new budget");
      const response = await axios.post("/api/projects", {
        projectTitle: this.state.projectTitle, //budgetname
        projectDescription: this.state.projectDescription, //budget desc
        projectBudget: this.state.projectBudget, //budget amount
        userId: this.props.user._id //user id for database access
      });
      this.props.dismissDialog();
      // dismiss dialog and refres project list

      // update the state to redirect to home
    } catch (err) {
      console.log(err);
    }
  }

  async handleCancel(event) {
    event.preventDefault();
    this.props.dismissDialog();
  }

  render() {
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.75)",
      padding: 50,
      zIndex: 101
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 15,
      maxWidth: 720,
      margin: "0 auto",
      padding: 30
    };

    if (!this.props.show) {
      return null;
    }
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="text-danger">New Budget Setup</h3>
                <hr className="m-1 border-info"/>
              </div>
              
              <div className="col-12">
                <form>
                  <div className="form-group">
                    <label htmlFor="project">Name Your Budget</label>
                    <input
                      className="form-control"
                      type="text"
                      id="projectTitle"
                      name="projectTitle"
                      placeholder="Budget Title"
                      value={this.state.projectTitle}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="project">Budget About</label>
                    <input
                      className="form-control"
                      type="text"
                      id="projectDescription"
                      name="projectDescription"
                      placeholder="Budget Description"
                      value={this.state.projectDescription}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="project">Budget Amount</label>
                    <input
                      className="form-control"
                      type="text"
                      id="projectBudget"
                      name="projectBudget"
                      placeholder="Estimate Budget Amount"
                      value={this.state.projectBudget}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-lg btn-block my-4"
                    onClick={this.handleSubmit}
                    type="submit"
                  >
                    Finished
                  </button>
                </form>
                <hr className="m-1 border-info"/>
                <button
                    className="btn btn-danger btn-lg btn-block my-4"
                    onClick={this.handleCancel}
                    type="submit"
                  >
                    Close Setup
                  </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default ProjectForm;
