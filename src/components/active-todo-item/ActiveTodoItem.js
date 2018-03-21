import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import './ActiveTodoItem.css';

const ActiveTodoItem = (props) => {
  return (
    <div className="TodoItem">
      <Row className="show-grid">
        <Col xs={2} md={2}>
          <div className="circleBase" />
        </Col>
        <Col xs={6} md={6}>
          <strike>{props.todoTitle}</strike>
        </Col>
        <Col xs={2} md={2}>
          <i className="fa fa-pencil" />
        </Col>
        <Col xs={2} md={2}>
          <i className="fa fa-trash-o" />
        </Col>
      </Row>
    </div>
  );
};

ActiveTodoItem.propTypes = {
  todoTitle: PropTypes.string,
};

ActiveTodoItem.defaultProps = {
  todoTitle: null,
};

export default ActiveTodoItem;
