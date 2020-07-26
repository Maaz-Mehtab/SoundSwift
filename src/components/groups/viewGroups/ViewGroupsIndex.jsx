import React, { Component } from "react";
import ViewGroupCard from "./ViewGroupCard";
import Sidebar from "../../layouts/sidebar/Sidebar";
import api from "../../../Environment";
import { Link } from "react-router-dom";

class ViewGroupsIndex extends Component {
  state = {
    groupData: {},
    loadingGroup: true,
  };
  componentDidMount() {
    this.getGroupsDetails();
  }
  getGroupsDetails = () => {
    api.postMethod("live_groups_index").then((response) => {
      if (response.data.success) {
        this.setState({
          groupData: response.data.data,
          loadingGroup: false,
        });
      } else {
      }
    });
  };
  render() {
    const { groupData, loadingGroup } = this.state;
    return (
      <div className="main">
        <Sidebar />
        <div className="sec-padding group left-spacing1">
          <div className="row">
            <div className="Spacer-10"></div>
            <div className="public-video-header">List of Groups</div>
            <div className="row small-padding">
              <div className="Spacer-10"></div>

              {localStorage.getItem("isStreamer") ? (
                <div className="col-sm-12 text-right">
                  <Link to={"/group/create"}>
                    <button className="btn2">Create Group</button>
                  </Link>
                </div>
              ) : (
                ""
              )}
              <div className="margin-top-xl"></div>
              <div className="col-md-12">
                {loadingGroup ? (
                  "laoding..."
                ) : groupData.groups.length > 0 ? (
                  groupData.groups.map((group) => (
                    <ViewGroupCard group={group} />
                  ))
                ) : (
                  <div className="no-data-found-img">
                    <div className="Spacer-10"></div>
                    <img src="../assets/img/no-data-found.png"></img>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewGroupsIndex;
