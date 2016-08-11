import React, { Component } from 'react';

import './Header.css';

class HeaderContainer extends Component {
  render() {
    return (
      <div className="header clearfix">
        <nav>
          <ul className="nav nav-pills pull-right">
            <li role="presentation" className="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">About</a></li>
            <li role="presentation"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <h3 className="text-muted">Fancy TODO</h3>
      </div>
    );
  }
}

export default HeaderContainer;
