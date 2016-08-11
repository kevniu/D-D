import React, { Component } from 'react';

import HeaderContainer from '../Header/HeaderContainer'
import ProjectList     from './ProjectList'

import './DashBoard.css';

class DashBoard extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ProjectList />
            </div>

            <div className="col-md-6 hidden-sm hidden-xs">
              <h3 className="lead">Something else</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
