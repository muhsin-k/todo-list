import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TodoItem from "../todo-item/TodoItem";
import { fetchAllItems, updateItem, deleteItem } from "../../actions/index";
import "./DashBoard.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.changeTodoStatus = this.changeTodoStatus.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllItems();
  }
  changeTodoStatus(key) {
    this.props.updateItem({
      _id: key.todoId,
      isActive: !key.todoActive
    });
  }
  deleteItem(key) {
    this.props.deleteItem({
      _id: key.todoId
    });
  }

  renderItems() {
    if (this.props.items.allItems) {
      return (
        <div className="dashboard">
          {this.props.items.allItems.map((item, i) => (
            <TodoItem
              todoTitle={item.title}
              todoActive={item.isActive}
              todoId={item._id}
              key={item._id}
              changeTodoStatus={this.changeTodoStatus.bind(this)}
              deleteItem={this.deleteItem.bind(this)}
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

  render() {
    if (this.props.items.isFetching) {
      return (
        <div className="dashboard">
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>{this.renderItems()}</div>;
    }
  }
}
function bindAction(dispatch) {
  return {
    fetchAllItems: () => dispatch(fetchAllItems()),
    updateItem: obj => dispatch(updateItem(obj)),
    deleteItem: obj => dispatch(deleteItem(obj))
  };
}
function mapStateToProps(state) {
  return { items: state.items };
}

export default connect(mapStateToProps, bindAction)(Dashboard);
