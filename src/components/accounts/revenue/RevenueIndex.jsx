import React, { Component } from "react";
import Sidebar from "../../layouts/sidebar/Sidebar";
import api from "../../../Environment";

class RevenueIndex extends Component {
  state = {
    revenueData: null,
    loadingRevenueData: true,
  };
  componentDidMount() {
    this.getRevenueDetails();
  }
  getRevenueDetails = () => {
    api.postMethod("vod_videos_owner_dashboard").then((response) => {
      if (response.data.success) {
        this.setState({
          revenueData: response.data.data,
          loadingRevenueData: false,
        });
      } else {
      }
    });
  };
  render() {
    const { loadingRevenueData, revenueData } = this.state;
    return (
      <div className="main">
        <Sidebar />
        {loadingRevenueData ? (
          "Loading..."
        ) : (
          <div className="sec-padding vodrevenue left-spacing1">
          <div className="Spacer-15"></div>
            <div className="public-video-header">Revenue Dashboard</div>
            <div className="Spacer-20"></div>
            <div className="row small-padding">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 resp-width-full">
                <div className="display-inline video-details">
                  <div className="video-left">
                    <img
                      className="video-icons"
                      src={
                        window.location.origin + "/assets/img/video-camera.png"
                      }
                    />
                  </div>
                  <div className="video-right">
                    <p className="text-grey-clr mt-0 size-16">total videos</p>
                    <h3 className="m-0">{revenueData.total_videos} videos</h3>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 resp-width-full">
                <div className="display-inline video-details">
                  <div className="video-left">
                    <img
                      className="video-icons"
                      src={
                        window.location.origin + "/assets/img/video-cash.png"
                      }
                    />
                  </div>
                  <div className="video-right">
                    <p className="text-grey-clr mt-0 size-16">
                      total paid videos
                    </p>
                    <h3 className="m-0">0 videos</h3>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 resp-width-full">
                <div className="display-inline video-details">
                  <div className="video-left">
                    <img
                      className="video-icons"
                      src={window.location.origin + "/assets/img/dollar.png"}
                    />
                  </div>
                  <div className="video-right">
                    <p className="text-grey-clr mt-0 size-16">Revenue</p>
                    <h3 className="m-0">
                      {revenueData.total_revenue_formatted}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default RevenueIndex;
