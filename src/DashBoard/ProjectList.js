import React, { Component } from 'react';

import update from 'react/lib/update';

import Project           from './Project';
import ProjectBuilder    from './ProjectBuilder';
import ProjectInputPanel from './ProjectInputPanel';

import { DragDropContext } from 'react-dnd';
import HTML5Backend        from 'react-dnd-html5-backend';

import './ProjectList.css';


class ProjectList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showInput: false,
      projects: [{content: "dsafsd", id: 22}, {content: "Dfasfsdfsdfsa", id: 23}, {content: "dsafsfsd", id: 24}, {content: "sddd", id: 25}],
      newProjectInput: false,
    }

    this.closeProjectInputPanel = this.closeProjectInputPanel.bind(this);
    this.editOnClick            = this.editOnClick.bind(this);
    this.displayProjects        = this.displayProjects.bind(this);
    this.projectInputChange     = this.projectInputChange.bind(this);
    this.saveProjectTitle       = this.saveProjectTitle.bind(this);

    this.moveProject = this.moveProject.bind(this);
  }

  projectInputChange(event) {
    this.setState({
      newProjectInput: event.target.value,
    })
  }

  saveProjectTitle() {
    if (this.state.newProjectInput) {
      this.state.projects.push(this.state.newProjectInput);
      this.setState({
        showInput: false,
        newProjectInput: false,
      })
    }else {
      this.setState({
        showInput: false,
      })
    }
  }

  editOnClick(e) {
    // stop click event propgation to the input field
    e.stopPropagation();
    this.setState({
      showInput: true,
    })
    // console.log("here onClick Button")
  }

  closeProjectInputPanel() {
    this.setState({
      showInput: false,
    })
    // console.log("here anywhere else")
  }

  moveProject(dragIndex, hoverIndex) {
    const { projects } = this.state;
    const dragProject = projects[dragIndex];

    this.setState(update(this.state, {
      projects: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragProject]
        ]
      }
    }));
  }

  displayProjects() {
    return this.state.projects.map((project, index) => {
      return (
        <Project key={project.id} index={index} id={project.id} title={project.content} moveProject={this.moveProject} />
      )
    })
  }


  render() {
    const inputOrButton = this.state.showInput ? <ProjectInputPanel closeProjectInputPanel={this.closeProjectInputPanel} saveProjectTitle={this.saveProjectTitle} projectInputChange={this.projectInputChange} /> : <ProjectBuilder editOnClick={this.editOnClick} />
    return (
      <div>
        <h3 className="lead">Projects</h3>

        <div className="row">
          <div className="col-xs-7">

            {this.displayProjects()}

            {inputOrButton}

          </div>
        </div>

      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ProjectList);
