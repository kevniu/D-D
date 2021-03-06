import React, { Component, PropTypes } from 'react';

import Helmet from "react-helmet";

import './TaskBoard.css';

class TaskBoard extends Component {
  render() {
    return (
      <div className="container">
        <Helmet title="something" />

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
