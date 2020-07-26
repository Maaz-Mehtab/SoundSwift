import React, { Component } from "react";

class ProfileNavSec extends Component {
  state = {};
  render() {
    const { getGalleryDetails, getBlockedUserDetails } = this.props;
    return (
      <div className="overlay1 container">
        <ul className="nav nav-tabs profile-tab" role="tablist">
          <li role="presentation" className="active">
            <a
              href="#about"
              aria-controls="home"
              role="tab"
              data-toggle="tab"
              className="white-text hidden-xs"
            >
              About
            </a>
            <a
              href="#about"
              aria-controls="home"
              role="tab"
              data-toggle="tab"
              className="white-text visible-xs"
            >
              <i className="fa fa-info"></i>
            </a>
          </li>
          <li role="presentation">
            <a
              href="#blocked-list"
              aria-controls="blocked-list"
              role="tab"
              data-toggle="tab"
              className="white-text hidden-xs"
              onClick={getBlockedUserDetails}
            >
              Blocked List
            </a>
            <a
              href="#blocked-list"
              aria-controls="blocked-list"
              role="tab"
              data-toggle="tab"
              className="white-text visible-xs"
            >
              <i className="fa fa-ban"></i>
            </a>
          </li>
          {/* <li role="presentation" className="right-align">
            <a
              href="#delete"
              aria-controls="messages"
              role="tab"
              data-toggle="tab"
              className="white-text hidden-xs"
            >
              Delete Account
            </a>
            <a
              href="#delete"
              aria-controls="messages"
              role="tab"
              data-toggle="tab"
              className="white-text visible-xs"
            >
              <i className="fa fa-trash"></i>
            </a>
          </li> */}
          {/* <li role="presentation" className="right-align">
            <a
              href="#change"
              aria-controls="settings"
              role="tab"
              data-toggle="tab"
              className="white-text hidden-xs"
            >
              Change Password
            </a>
            <a
              href="#change"
              aria-controls="settings"
              role="tab"
              data-toggle="tab"
              className="white-text visible-xs"
            >
              <i className="fa fa-key"></i>
            </a>
          </li> */}
          {/* <li role="presentation" className="right-align">
            <a
              href="#update"
              aria-controls="settings"
              role="tab"
              data-toggle="tab"
              className="white-text hidden-xs"
            >
              Update Profile
            </a>
            <a
              href="#update"
              aria-controls="settings"
              role="tab"
              data-toggle="tab"
              className="white-text visible-xs"
            >
              <i className="fa fa-pencil-square-o"></i>
            </a>
          </li> */}
          {/* <li role="presentation" className="right-align">
            <a
              href="#gallery"
              aria-controls="settings"
              role="tab"
              data-toggle="tab"
              className="white-text hidden-xs"
              onClick={getGalleryDetails}
            >
              Gallery
            </a>
            <a
              href="#gallery"
              aria-controls="settings"
              role="tab"
              data-toggle="tab"
              className="white-text visible-xs"
            >
              <i class="fas fa-images"></i>
            </a>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default ProfileNavSec;
