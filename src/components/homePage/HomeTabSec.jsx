import React, { Component } from "react";

class HomeTabSec extends Component {
  state = {};
  render() {
    const {
      getLiveVideoPublicDetails,
      getLiveVideoPrivateDetails,
    } = this.props;
    return (
      <ul className="nav nav-tabs home-sec-tab" role="tablist">
        <li role="presentation" className="active">
          <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
            Home
          </a>
        </li>
        <li role="presentation">
          <a
            href="#public"
            aria-controls="messages"
            role="tab"
            data-toggle="tab"
            onClick={getLiveVideoPublicDetails}
          >
            Public
          </a>
        </li>
        <li role="presentation">
          <a
            href="#private"
            aria-controls="settings"
            role="tab"
            data-toggle="tab"
            onClick={getLiveVideoPrivateDetails}
          >
            Private
          </a>
        </li>
      </ul>
    );
  }
}

export default HomeTabSec;
