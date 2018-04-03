import React, { Component } from "react";
import { connect } from "react-redux";
import "./Auth.css";
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authType: this.props.match.params.type,
      email: "",
      password: "",
      username: "",
      showEmailError: false,
      showUserNameError: false,
      showPasswordError: false,
      buttonText: this.props.match.params.type === "login" ? "Login" : "Signup"
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
      showPasswordError: false
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
  doLogin() {}
  doSignup() {}
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
            <div className="row">
              <div className="col 12">
                <button
                  className="btn waves-effect waves-light todo-add-submit"
                  type="submit"
                  name="action"
                  onClick={this.onSubmit}
                >
                  {this.state.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function bindAction(dispatch) {
  return {};
}
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, bindAction)(Auth);
