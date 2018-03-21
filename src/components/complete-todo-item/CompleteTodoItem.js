import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import './CompleteTodoItem.css';

const CompleteTodoItem = (props) => {
  return (
    <div className="TodoItem">
      <Row className="show-grid">
        <Col xs={2} md={2}>
          <div className="circleBase" />
        </Col>
        <Col xs={6} md={6}>
          {props.todoTitle}
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

CompleteTodoItem.propTypes = {
  todoTitle: PropTypes.string,
};

CompleteTodoItem.defaultProps = {
  todoTitle: null,
};

export default CompleteTodoItem;
