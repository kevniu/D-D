import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import './ProjectInputPanel.css';

class ProjectInputPanel extends Component {

  componentDidMount() {
    window.addEventListener('click', this.handleDocumentClick);
    // this.props.handleFocus()
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = (evt) => {
    const area = ReactDOM.findDOMNode(this.refs.inputPanel);

    if (!area.contains(evt.target)) {
      this.props.closeProjectInputPanel()
    }
  }

  render() {
    return (
      <div className="panel panel-success" ref="inputPanel">
        <div className="panel-body">

          <div className="input-group">
            <input
              autoFocus={true}
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
