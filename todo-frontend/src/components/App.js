import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./header/Headers";
import Landing from "./Landing";
import Dashboard from "./dashboard/DashBoard";
import "./styles.css";
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <main>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route path="/home" component={Dashboard} />
                <Route path="/" component={Landing} />
              </Switch>
            </div>
          </BrowserRouter>
        </main>
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
