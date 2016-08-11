import React, { Component } from 'react';

import Project        from './Project'
import ProjectBuilder from './ProjectBuilder'

import './ProjectList.css';

class ProjectList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    }

    this.editOnClick = this.editOnClick.bind(this);
  }

  editOnClick() {
    console.log("called")
  }

  render() {
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

            <ProjectBuilder editOnClick={this.editOnClick} />

          </div>
        </div>

      </div>
    );
  }
}

export default ProjectList;
