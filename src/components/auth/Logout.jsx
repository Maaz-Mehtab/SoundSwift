import React, { Component } from "react";
import api from "../../Environment";

class Logout extends Component {
  state = {};
  componentDidMount() {
    api.postMethod("logout").then((response) => {
      if (response.data.success) {
        console.log("success");
      } else {
      }
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userLoginStatus");
    localStorage.removeItem("user_picture");
    localStorage.removeItem("username");
    localStorage.removeItem("total_followers");
    localStorage.removeItem("total_followings");
    localStorage.removeItem("total_live_videos");
    localStorage.removeItem("userName");
    //  history.push("/");
    // this.props.history.push("www.soundswift.com/logout");
    window.location.replace('http://www.soundswift.com/logout')
  }
  render() {
    return "";
  }
}

export default Logout;
