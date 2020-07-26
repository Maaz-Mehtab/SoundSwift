import React, { Component } from "react";
import { Link } from "react-router-dom";
import ToastContent from "../../helper/ToastContent";
import { withToastManager } from "react-toast-notifications";
import Sidebar from "../../layouts/sidebar/Sidebar";

class LiveStreamingSingleViewIndex extends Component {
  state = {
    loadingVideo: true,
  };
  componentDidMount() {
    if (this.props.location.state == null) {
      ToastContent(this.props.toastManager, "Video not found", "error");
      this.props.history.push("/live-streaming/history/list");
    }
    this.setState({ loadingVideo: false });
  }
  render() {
    if (this.state.loadingVideo) {
      return "Loading...";
    } else {
      const video = this.props.location.state;
      return (
        <div className="main">
          <Sidebar />
          <div class="sec-padding livetv-view left-spacing1">
            <div class="Spacer-5"></div>
            <div class="public-video-header">{video.title}</div>
            <div class="Spacer-10"></div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="live-video-box border-zero live-video-box-small">
                  <div
                    class="public-img large-img"
                    style={{ backgroundImage: `url(${video.snapshot})` }}
                  ></div>

                  <div className="user-profile spacing">
                    <div className="row">
                      <div className="col-md-6 resp-center">
                        <h4 className="h4-s title overflow">{video.title}</h4>
                        <h5 className="h5-s desc text-grey-clr">
                          {video.description}
                        </h5>
                      </div>
                      <div className="col-md-6 ">
                        <div className="user-img text-right resp-center">
                          <img src={video.user_picture} alt="user" />
                          <h3 className="upload-txt-name">Uploaded By</h3>
                          <Link
                            to={"/other-profile"}
                            className="streamer-name overflow"
                          >
                            {video.user_name}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withToastManager(LiveStreamingSingleViewIndex);
