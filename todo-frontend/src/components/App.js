import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./header/Headers";
// import Landing from "./landing/Landing";
import Dashboard from "./dashboard/DashBoard";
import Auth from "./auth/Auth";
import "./styles.css";
class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container ">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/home" component={Dashboard} />
              <Route
                path="/auth/:type"
                render={props => (
                  <Auth key={props.match.params.type} {...props} />
                )}
              />
              <Route path="/" component={Auth} />
            </Switch>
          </div>
        </BrowserRouter>
        <div className="footer">
          Built by{" "}
          <a target="_blank" href="http://muhzi.com">
            Muhsin.K
          </a>© 2018
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(App);
