import React, { Component } from 'react';

import Project           from './Project'
import ProjectBuilder    from './ProjectBuilder'
import ProjectInputPanel from './ProjectInputPanel'

import './ProjectList.css';

class ProjectList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showInput: false,
      projects: [1, 2, 3, 4, 5],
      newProjectInput: false,
    }

    this.editOnClick        = this.editOnClick.bind(this);
    this.displayProjects    = this.displayProjects.bind(this);
    this.projectInputChange = this.projectInputChange.bind(this);
    this.saveProjectTitle   = this.saveProjectTitle.bind(this);
  }

  projectInputChange(event) {
    this.setState({
      newProjectInput: event.target.value,
    })
  }

  saveProjectTitle() {
    if (this.state.newProjectInput) {
      this.state.projects.push(this.state.newProjectInput);
      this.setState({
        showInput: false,
        newProjectInput: false,
      })
    }else {
      this.setState({
        showInput: false,
      })
    }
  }

  editOnClick() {
    this.setState({
      showInput: true
    })
  }

  displayProjects() {
    return this.state.projects.map((project, index) => {
      return (
        <Project key={index} title={project} />
      )
    })
  }

  render() {
    const inputOrButton = this.state.showInput ? <ProjectInputPanel saveProjectTitle={this.saveProjectTitle} projectInputChange={this.projectInputChange} /> : <ProjectBuilder editOnClick={this.editOnClick} />
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
