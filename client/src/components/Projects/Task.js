import React, { Component } from "react";
import axios from "axios";
import TaskForm from "./Tasks";

class Task extends Component {
  render() {
    const theTask = this.props.data;
    return (

      <div className="container">
        <div className="row m-1 pt-3">
          <div className="col-md-5">
            <div className="row">
              <div className="col-12">
                <h5 className="text-left">{theTask.taskName}</h5>
                <p className="smFont text-left">{new Date(theTask.taskDate).toDateString()}</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <p className="smFont">Rate:<br/><span className="lgFont">${theTask.taskRate}</span>/hr</p>
          </div>
          <div className="col-md-2">
            <p className="smFont">Worked:<br/><span className="lgFont">{theTask.taskHours}</span> hr</p>
          </div>
          <div className="col-md-2">
            <p className="smFont">Earned:<br/><span className="lgFont text-danger">${theTask.taskRate * theTask.taskHours}</span></p>          
          </div>
          <div className="col-md-1">
            <div className="row">
              <div className="col-12 bg-info mb-1 rounded"><i class="fa fa-edit smFont"></i></div>
              <div className="col-12 bg-danger rounded"> <i class="fa fa-times smFont"></i></div>
            </div>
          </div>
        </div>
        <hr className="m-1 border-info"/>
      </div>
      
    );
  }
}

export default Task;