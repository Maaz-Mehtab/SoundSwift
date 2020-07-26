import React, { Component } from "react";

class ProfileAboutSec extends Component {
  state = {};
  render() {
    return (
      <div id="about" className=" tab-pane fade in active zero-padding">
        <div className="container top-bottom-spacing padd">
          <h2 className="tab-head">About me</h2>
          <h4>{this.props.profileData.description}</h4>
        </div>
      </div>
    );
  }
}

export default ProfileAboutSec;
