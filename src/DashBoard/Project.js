import React, { Component, PropTypes } from 'react';

import './Project.css';

class Project extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-body">
          Project {this.props.title}
        </div>
      </div>
    );
  }
}


// Project.propTypes = {
//   title:
// }

export default Project;
