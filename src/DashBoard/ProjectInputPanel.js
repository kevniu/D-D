import React, { Component, PropTypes } from 'react';

import './ProjectInputPanel.css';

class ProjectInputPanel extends Component {
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-body">

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="New project name"
              onChange={this.props.projectInputChange}
            />
            <span className="input-group-btn">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.props.saveProjectTitle}
              >
                Create
              </button>
            </span>
          </div>

        </div>
      </div>
    );
  }
}

ProjectInputPanel.propTypes = {
  projectInputChange: PropTypes.func.isRequired,
  saveProjectTitle: PropTypes.func.isRequired,
}

export default ProjectInputPanel;
