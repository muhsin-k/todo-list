import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import './Home.css';
import ActiveTodoItem from '../../components/active-todo-item/ActiveTodoItem';

import CompleteTodoItem from '../../components/complete-todo-item/CompleteTodoItem';

class Home extends Component {
  render() {
    return (
      <div className="product-pitch">
        <Grid>
          <Row className="show-grid">Active</Row>
        </Grid>
        <Grid>
          <Row className="show-grid">
            <CompleteTodoItem todoTitle="Lunch with Cousin" />
          </Row>
        </Grid>
        <Grid>
          <Row className="show-grid">Completed</Row>
        </Grid>
        <Grid>
          <Row className="show-grid">
            <ActiveTodoItem todoTitle="Learn Vuejs" />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Home;
