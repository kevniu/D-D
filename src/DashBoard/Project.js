import React, { Component, PropTypes } from 'react';

import './Project.css';

class Project extends Component {

  // panelOnClick(e) {
  //   e.preventDefault();
  //   this.context.router.push('/taskboard')
  // }

  render() {
    return (
      // <a href="/" onClick={this.panelOnClick.bind(this)}>
        <div className="panel panel-primary">
          <div className="panel-body">
            <div className="media">
              <div className="media-left media-middle">
                <img className="general-icon" src='../../png/rocket-ship.png' role="presentation" />
              </div>
              <div className="media-body">
                Project {this.props.title}
              </div>
            </div>

          </div>
        </div>
      // </a>
    );
  }
}

Project.contextTypes = {
  router: React.PropTypes.object,
}

Project.propTypes = {
  title: PropTypes.any,
}

export default Project;
