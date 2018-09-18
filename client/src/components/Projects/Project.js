import React, { Component } from "react";
import axios from "axios";
import Task from "./Task";

class Project extends Component {
  render() {
    const aProject = this.props.data;
    console.log(this.props.handleExpand);

    const x = aProject.projectBudget;
    const y = aProject.actualBudget;

    const x1 = x.valueOf();
    const y1 = y.valueOf();

    const z = x1-y1;

    return (
      <div className="container p-0 m-0">

        <div className="row p-0 border border-danger rounded m-1">
          <div className="col-12">
            <div className="row">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-6"><h3 className="text-left pl-3 pt-2">{aProject.projectTitle}</h3></div>
                  <div className="col-md-6"><p className="text-left pt-2 smFont">{aProject.projectDescription}</p></div>
                </div>
              
              </div>
              <div className="col-md-5">
                <div className="row pt-2">
                  <div className="col-9"><p className="text-muted text-left smFont pt-2 ">{new Date(aProject.projectDate).toDateString()}</p></div>
                  <div className="col-3">
                    <button className="btn btn2 btn-light" onClick={event => this.props.handleDelete(event, aProject._id)}><i class="fa fa-times text-danger"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="p-2 m-0 border-info"/>
            <div className="row">
              <div className="col-md-4">
                <p className="smFont">Estimated Budget: <span className="lgFont">${aProject.projectBudget}</span></p>
              </div>
              <div className="col-md-4">
                <p className="smFont">Actual Budget: <span className="lgFont">${aProject.actualBudget}</span></p>              
              </div>
              <div className="col-md-4">
                <p className="smFont">Budget Remain: <span className="lgFont">${z}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-1">
          <div className="col-6">
            <button className="btn btn-lg btn-block btn-light" onClick={() => this.props.handleExpand(aProject._id)}><p className="smFont">View Tasks</p></button>
          </div>
          <div className="col-6">
            <button className="btn btn-lg btn-block btn-light" onClick={event => this.props.handleAddTask(event, aProject._id)}><p className="smFont">Add Task</p></button>
          </div>
        </div>
        <hr className="m-1 border-info"/>
        <div class="taskinfo">
          {this.props.expand
            ? aProject.tasks.map(t => <Task data={t} />)
            : null}
        </div>
        
      </div>
      
    );
  }
}

export default Project;