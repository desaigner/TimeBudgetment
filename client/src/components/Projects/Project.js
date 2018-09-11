import React, { Component } from "react";
import axios from "axios";
import Task from "./Task";

class Project extends Component {
  render() {
    const aProject = this.props.data;
    return (
      <div>
        {/* <h3>{aProject.projectTitle}</h3>
        {aProject.tasks.map(t => (
          <Task data={t} />
        ))} */}
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {aProject.projectTitle}
            <div className="projectCard">
                    {aProject.tasks.map(aTask => {
                      return (
                        <div>
                          {aTask.taskName} <br /> {aTask.taskDescription}
                        </div>
                      );
                    })}
                    <button>View</button>
                    <button>Delete</button>
                  </div>
          </li>
        </ul>
        {/* <p>{aProject.projectTitle}</p>
          <div className="projectCard">
            {aProject.tasks.map(aTask => {
              return (
                <div>
                  {aTask.taskName} <br /> {aTask.taskDescription}
                </div>
              );
            })}

            <button>View/Add Project Details</button>
            <p>
              <button>Delete Project</button>
            </p>
          </div> */}
      </div>
    );
  }
}

export default Project;