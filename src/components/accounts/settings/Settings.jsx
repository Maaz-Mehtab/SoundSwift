import React, { Component } from "react";
import Sidebar from "../../layouts/sidebar/Sidebar";
import { Link } from "react-router-dom";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <Sidebar />
        {localStorage.getItem("one_time_subscription") == 0 ?
          <div className="sec-padding settings left-spacing1">
            <h3 className="heading-element text-center">Settings</h3>
            <div className="row">
              <Link to={"/live-streaming/history/list"}>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="subcription-card">
                    <div className="text-center">
                      <i className="fa fa-video-camera"></i>
                      <h3>My streaming histroy</h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/subscriptions"}>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="subcription-card">
                    <div className="text-center">
                      <i className="fa fa-paypal"></i>
                      <h3>subscribe</h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/group/view-all"}>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="subcription-card">
                    <div className="text-center">
                      <i className="fa fa-users"></i>
                      <h3>Groups</h3>
                    </div>
                  </div>
                </div>
              </Link>



            </div>
          </div>
          :

          <div className="sec-padding settings left-spacing1">
            <h3 className="heading-element text-center">Settings</h3>
            <div className="row">
              <Link to={"/live-streaming/history/list"}>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="subcription-card">
                    <div className="text-center">
                      <i className="fa fa-video-camera"></i>
                      <h3>My streaming histroy</h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/subscriptions"}>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="subcription-card">
                    <div className="text-center">
                      <i className="fa fa-paypal"></i>
                      <h3>subscribe</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={"/paid-live-streaming-history"}>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="subcription-card">
                    <div className="text-center">
                      <i className="fa fa-play-circle"></i>
                      <h3>paid streaming histroy</h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/group/view-all"}>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="subcription-card">
                    <div className="text-center">
                      <i className="fa fa-users"></i>
                      <h3>Groups</h3>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to={"/my-subscription-plans"}>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="subcription-card">
                    <div className="text-center">
                      <i className="fa fa-history"></i>
                      <h3>My Subscriptions history</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={"/revenue-dashboard"}>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="subcription-card">
                    <div className="text-center">
                      <i className="fa fa-dollar"></i>
                      <h3>Revenue Dashboard</h3>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to={"/redeem"}>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="subcription-card">
                    <div className="text-center">
                      <i className="fa fa-usd"></i>
                      <h3>Cashout</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>


        }
        {/* <div className="sec-padding settings left-spacing1">
          <h3 className="heading-element text-center">Settings</h3>
          <div className="row">
            <Link to={"/account"}>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="subcription-card">
                  <div className="text-center">
                    <i className="fa fa-user"></i>
                    <h3>profile</h3>
                  </div>
                </div>
              </div>
            </Link>


            {localStorage.getItem("isStreamer") == 1 ? (
              <span>
                <Link to={"/subscriptions"}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="subcription-card">
                      <div className="text-center">
                        <i className="fa fa-paypal"></i>
                        <h3>subscriptions</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/my-subscription-plans"}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="subcription-card">
                      <div className="text-center">
                        <i className="fa fa-history"></i>
                        <h3>My Subscriptions</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/paid-live-streaming-history"}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="subcription-card">
                      <div className="text-center">
                        <i className="fa fa-play-circle"></i>
                        <h3>paid streaming histroy</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/live-streaming/history/list"}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="subcription-card">
                      <div className="text-center">
                        <i className="fa fa-video-camera"></i>
                        <h3>streaming histroy</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/vod/list"}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="subcription-card">
                      <div className="text-center">
                        <i className="fa fa-video-camera"></i>
                        <h3>VOD Manager</h3>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to={"/revenue-dashboard"}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="subcription-card">
                      <div className="text-center">
                        <i className="fa fa-dollar"></i>
                        <h3>Revenue Dashboard</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/view-card-details"}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="subcription-card">
                      <div className="text-center">
                        <i className="fa fa-credit-card"></i>
                        <h3>cards</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/redeem"}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="subcription-card">
                      <div className="text-center">
                        <i className="fa fa-usd"></i>
                        <h3>redeems</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/group/view-all"}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="subcription-card">
                      <div className="text-center">
                        <i className="fa fa-users"></i>
                        <h3>Groups</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/live-tv/list"}>
                  <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="subcription-card">
                      <div className="text-center">
                        <i className="fa fa-video-camera"></i>
                        <h3>Live Tv</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </span>
            ) : (
                <span>
                  <Link to={"/view-card-details"}>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                      <div className="subcription-card">
                        <div className="text-center">
                          <i className="fa fa-credit-card"></i>
                          <h3>cards</h3>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link to={"/paid-live-streaming-history"}>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                      <div className="subcription-card">
                        <div className="text-center">
                          <i className="fa fa-play-circle"></i>
                          <h3>paid streaming histroy</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/group/view-all"}>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                      <div className="subcription-card">
                        <div className="text-center">
                          <i className="fa fa-users"></i>
                          <h3>Groups</h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </span>
              )}
          </div>
        </div> */}
      </div>
    );
  }
}

export default Settings;
