import React, { Component, PropTypes } from 'react';

import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode }            from 'react-dom';
import flow from 'lodash/flow';

import './Project.css';

const style = {
  marginBottom: '1rem',
  // cursor: "pointer",
};

const ItemTypes = {
  PROJECT: "project"
};

const projectSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const projectTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveProject(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};


class Project extends Component {

  panelOnClick(e) {
    e.preventDefault();
    this.context.router.push('/taskboard')
  }

  render() {
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;
    const grabbedClassName = isDragging ? "being-grabbed" : "";

    return connectDragSource(connectDropTarget(
      <div
        className={`panel panel-primary grabbable ${grabbedClassName}`}
        style={{ ...style, opacity }}
        onClick={this.panelOnClick.bind(this)}
      >
        <div className="panel-body">
          <div className="media">
            <div className="media-left media-middle">
              <img className="general-icon" src='../../png/rocket-ship.png' role="presentation" />
            </div>
            <div className="media-body">
              {this.props.title}
            </div>
          </div>

        </div>
      </div>
    ));
  }
}

Project.contextTypes = {
  router: React.PropTypes.object,
}

Project.propTypes = {
  title: PropTypes.any,
  index: PropTypes.any,
  moveProject: PropTypes.func,
}

export default flow(
  DragSource(ItemTypes.PROJECT, projectSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),

  DropTarget(ItemTypes.PROJECT, projectTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Project);


// return (
//   // <a href="/" onClick={this.panelOnClick.bind(this)}>
//
//   // </a>
// );
