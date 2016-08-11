import React, { Component, PropTypes } from 'react';

import './ProjectBuilder.css';

class ProjectBuilder extends Component {


  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-success btn-lg btn-block"
          onClick={this.props.editOnClick}>
          <img className="general-icon" src='../../png/pencil.png' role="presentation" />
        </button>
      </div>
    );
  }
}

ProjectBuilder.propTypes = {
  editOnClick: PropTypes.func.isRequired,
}

export default ProjectBuilder;

//
// <div
//   className="panel panel-info creating-panel"
// >
//   <div className="panel-body">
//
//   </div>
// </div>
