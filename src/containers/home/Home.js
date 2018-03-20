import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="start-chat">
        <div className="row">
          <div className="columns small-1 large-3 " />
          <div className="columns small-10 large-6 large-centered small-centered">
            <div className="row start-chat__main-heading">
              <h4>Start a Live Chat</h4>
            </div>
          </div>
          <div className="columns small-1 large-3 " />
        </div>
      </div>
    );
  }
}

export default Home;
