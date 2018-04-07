import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { initLogin, completeLogin, errorLogin } from "../../actions/index";
import "./Auth.css";
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authType: this.props.match.params.type || "login",
      email: "muhsinkeramam@gmail.com",
      password: "muhsin",
      username: "muhzi4u",
      showEmailError: false,
      showUserNameError: false,
      showPasswordError: false,
      showError: false,
      errorMessage: "",
      showLoading: false,
      buttonText: this.props.match.params.type === "signup" ? "Signup" : "Login"
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }
  onSubmit() {
    this.setState({
      showEmailError: false,
      showUserNameError: false,
      showPasswordError: false,
      showError: false
    });
    this.doValidations();
  }
  doValidations() {
    if (this.state.authType === "login") {
      if (!this.state.email) {
        this.setState({
          showEmailError: true
        });
      }
      if (!this.state.password) {
        this.setState({
          showPasswordError: true
        });
      }
      if (this.state.email && this.state.password) {
        this.doLogin();
      }
    } else {
      if (!this.state.email) {
        this.setState({
          showEmailError: true
        });
      }
      if (!this.state.password) {
        this.setState({
          showPasswordError: true
        });
      }
      if (!this.state.username) {
        this.setState({
          showUserNameError: true
        });
      }
      if (this.state.email && this.state.password && this.state.username) {
        this.doSignup();
      }
    }
  }
  doLogin() {
    const requestUrl = "/api/user/login";
    const obj = {
      emailId: this.state.email,
      password: this.state.password
    };
    this.props.initLogin();
    axios
      .post(requestUrl, obj)
      .then(response => {
        localStorage.setItem("todoId", response.data._id);
        localStorage.setItem("todoUserName", response.data.userName);
        this.props.history.push("/home");
        this.props.completeLogin();
      })
      .catch(e => {
        this.setState({
          errorMessage: "Invalid email id or password",
          showError: true
        });
        this.props.errorLogin(e);
      });
  }
  doSignup() {
    const requestUrl = "/api/user/signup";
    const obj = {
      emailId: this.state.email,
      password: this.state.password,
      userName: this.state.username
    };
    axios
      .post(requestUrl, obj)
      .then(response => {
        console.log("Response: " + response);
        localStorage.setItem("todoId", response.data._id);
        localStorage.setItem("todoUserName", response.data.userName);

        this.props.history.push("/home");
      })
      .catch(e => {
        this.setState({
          errorMessage: "Email  already exist",
          showError: true
        });
        console.log("Error: " + e);
      });
  }
  renderButton() {
    if (!this.props.auth.isFetching) {
      return (
        <div className="row auth-div">
          <button
            className="btn waves-effect waves-light auth-button"
            type="submit"
            name="action"
            onClick={this.onSubmit}
          >
            {this.state.buttonText}
          </button>
        </div>
      );
    } else {
      return (
        <div className="loader">
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
    }
  }
  render() {
    return (
      <div className="auth">
        <div className="row">
          <div className="col s12">
            {this.state.authType === "signup" && (
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="username"
                    type="text"
                    className="validate"
                    placeholder="User name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleUserInput.bind(this)}
                  />
                  {this.state.showUserNameError && (
                    <div className="formError">User name is required</div>
                  )}
                </div>
              </div>
            )}

            <div className="row">
              <div className="input-field col s12">
                <input
                  id="email"
                  type="email"
                  className="validate"
                  placeholder="Email Id"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleUserInput.bind(this)}
                />
                {this.state.showEmailError && (
                  <div className="formError">Email id is required</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleUserInput.bind(this)}
                />
                {this.state.showPasswordError && (
                  <div className="formError">Password is required</div>
                )}
              </div>
            </div>
            <div className="row showError">
              {this.props.auth.errorMessage && (
                <div className="formError">{this.props.auth.errorMessage}</div>
              )}
            </div>
            {this.renderButton()}
          </div>
        </div>
      </div>
    );
  }
}
function bindAction(dispatch) {
  return {
    initLogin: () => dispatch(initLogin()),
    completeLogin: () => dispatch(initLogin()),
    errorLogin: obj => dispatch(errorLogin(obj))
  };
}
function mapStateToProps(state) {
  console.log("Store-->", state.auth);
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, bindAction)(Auth);
