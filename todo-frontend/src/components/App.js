import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./header/Headers";
import Dashboard from "./dashboard/DashBoard";
import Auth from "./auth/Auth";
import "./styles.css";
class App extends Component {
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
              <Route path="/" component={Dashboard} />
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

export default App;
