import React, { Component } from 'react';

import ProjectList     from './ProjectList';

import Helmet from "react-helmet";

import './DashBoard.css';

class DashBoard extends Component {
  render() {
    return (
      <div className="container">
        <Helmet title="DashBoard" />

        <div className="row">
          <div className="col-md-6 project-container">
            <ProjectList />
          </div>

          <div className="col-md-6 hidden-sm hidden-xs">
            <h3 className="lead">{"Something else"}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
