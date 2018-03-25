import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TodoItem from "../todo-item/TodoItem";
import { fetchAllItems } from "../../actions/index";
import "./DashBoard.css";
class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    if (!this.props.items.allItems) {
      return <div className="todoType">Completed</div>;
    } else {
      return (
        <div className="dashboard">
          {this.props.items.allItems.map((item, i) => (
            <TodoItem
              todoTitle={item.title}
              todoActive={item.isActive}
              key={item._id}
            />
          ))}

          <div className="fixed-action-btn">
            <Link to="/blogs/new" className="btn-floating btn-large red">
              <i className="material-icons">add</i>
            </Link>
          </div>
        </div>
      );
    }
  }
}
function bindAction(dispatch) {
  return {
    fetchAllItems: () => dispatch(fetchAllItems())
  };
}
function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps, bindAction)(Dashboard);
