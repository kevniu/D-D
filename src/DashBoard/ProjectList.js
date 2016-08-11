import React, { Component } from 'react';

import './ProjectList.css';

class ProjectList extends Component {
  render() {
    return (
      <div>
        <h3 className="lead">Projects</h3>

        <div className="row">
          <div className="col-xs-7">

            <div className="panel panel-info">
              <div className="panel-body">
                Project 1
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default ProjectList;
