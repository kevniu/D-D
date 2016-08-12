import React, { Component, PropTypes } from 'react';

import './TaskBoard.css';

class TaskBoard extends Component {
  render() {
    console.log("called")
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 project-container">
            <h3 className="lead">{"Tasks"}</h3>
          </div>

          <div className="col-md-6 hidden-sm hidden-xs">
            <h3 className="lead">{"Something else"}</h3>
          </div>
        </div>
      </div>
    );
  }
}


TaskBoard.propTypes = {
  title: PropTypes.any,
}

export default TaskBoard;
