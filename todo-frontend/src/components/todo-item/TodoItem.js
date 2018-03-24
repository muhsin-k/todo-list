import React from "react";
import PropTypes from "prop-types";
import "./TodoItem.css";

const ActiveTodoItem = props => {
  return (
    <div className="TodoItem">
      <div className="row">
        <div className="col s2">
          <div className="circleBase" />
        </div>
        <div className="col s6 todo-text">{props.todoTitle}</div>
        <div className="col s2 todo-icon">
          <i className="small material-icons">edit</i>
        </div>
        <div className="col s2 todo-icon">
          <i className="small material-icons">delete</i>
        </div>
      </div>
    </div>
  );
};

ActiveTodoItem.propTypes = {
  todoTitle: PropTypes.string
};

ActiveTodoItem.defaultProps = {
  todoTitle: null
};

export default ActiveTodoItem;
