import React, { Component, PropTypes } from 'react';

import './ProjectInputPanel.css';

class ProjectInputPanel extends Component {
  render() {
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
    );
  }
}

ProjectInputPanel.propTypes = {
  editOnClick: PropTypes.func.isRequired,
}

export default ProjectInputPanel;
