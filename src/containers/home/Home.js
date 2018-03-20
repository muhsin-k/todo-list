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
            <div className="row">
              <h6>How can we help you today?</h6>
            </div>
            <div className="row ">
              <textarea
                className="start-chat__start_text"
                placeholder="Please type here...."
              />
            </div>
            <div className="row">
              <a
                className="button small expanded start-chat__start_call"
                href="home"
              >
                Start Call
              </a>
            </div>
          </div>
          <div className="columns small-1 large-3 " />
        </div>
      </div>
    );
  }
}

export default Home;
