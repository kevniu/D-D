import React, { Component } from 'react';

import Project        from './Project'
import ProjectBuilder from './ProjectBuilder'

import './ProjectList.css';

class ProjectList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showInput: false,
      projects: [1, 2, 3, 4, 5],
    }

    this.editOnClick     = this.editOnClick.bind(this);
    this.displayProjects = this.displayProjects.bind(this);
  }

  editOnClick() {
    this.setState({
      showInput: true
    })
  }

  displayProjects() {
    return this.state.projects.map((project) => {
      return (
        <Project title={project} />
      )
    })
  }

  displayNewProjectInputField() {
    return (
      <div className="panel panel-success">
        <div className="panel-body">
          <input
            type="text"
            className="form-control"
            placeholder="New project name"
          />
        </div>
      </div>
    )
  }

  render() {
    const inputOrButton = this.state.showInput ? this.displayNewProjectInputField() : <ProjectBuilder editOnClick={this.editOnClick} />
    return (
      <div>
        <h3 className="lead">Projects</h3>

        <div className="row">
          <div className="col-xs-7">

            {this.displayProjects()}

            {inputOrButton}

          </div>
        </div>

      </div>
    );
  }
}

export default ProjectList;
