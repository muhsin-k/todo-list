import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";
import TodoItem from "../todo-item/TodoItem";
import "./DashBoard.css";
class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="dashboard">
        <TodoItem todoTitle="Muhsin" />
        <div className="fixed-action-btn">
          <Link to="/blogs/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Dashboard);
