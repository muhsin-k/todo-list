import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";

class TodoItem extends Component {
  onChangeStatus() {
    this.props.changeTodoStatus(this.props);
  }
  render() {
    if (this.props.todoActive) {
      return (
        <div className="active-todo-item">
          <div className="row">
            <div className="col s2">
              <div
                className="todo-active-circle"
                onClick={this.onChangeStatus.bind(this)}
              />
            </div>
            <div className="col s6 todo-active-text">
              {this.props.todoTitle}
            </div>
            <div className="col s2 todo-active-icon">
              <i className="small material-icons">edit</i>
            </div>
            <div className="col s2 todo-active-icon">
              <i className="small material-icons">delete</i>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="in-active-todo-item">
          <div className="row">
            <div className="col s2">
              <div
                className="todo-in-active-circle"
                // onClick={props.onClickStatus}
              />
            </div>
            <div className="col s6 todo-in-active-text">
              <strike>{this.props.todoTitle}</strike>
            </div>
            <div className="col s2 todo-in-active-icon">
              {/* <i className="small material-icons">edit</i> */}
            </div>
            <div className="col s2 todo-in-active-icon">
              <i className="small material-icons">delete</i>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default TodoItem;
