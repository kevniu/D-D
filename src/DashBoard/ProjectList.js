import React, { Component } from 'react';

import Project from './Project'

import './ProjectList.css';

class ProjectList extends Component {
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
            <Project />
            <Project />
            <Project />
            <Project />

          </div>
        </div>

      </div>
    );
  }
}

export default ProjectList;
