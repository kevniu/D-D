import React, { Component } from 'react';

import Project        from './Project'
import ProjectBuilder from './ProjectBuilder'

import './ProjectList.css';

class ProjectList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showInput: false,
    }

    this.editOnClick = this.editOnClick.bind(this);
  }

  editOnClick() {
    this.setState({
      showInput: true
    })
  }

  displayNewProjectInputField() {
    return (
      <div className="panel panel-info">
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

            <Project />
            <Project />
            <Project />
            <Project />
            <Project />

            {inputOrButton}

          </div>
        </div>

      </div>
    );
  }
}

export default ProjectList;
