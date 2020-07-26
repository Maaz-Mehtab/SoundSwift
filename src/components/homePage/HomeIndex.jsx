import React, { Component } from "react";
import HomeSec from "./HomeSec";
import HomePublic from "./HomePublic";
import HomePrivate from "./HomePrivate";
import HomeTabSec from "./HomeTabSec";
import HomeRightSideSec from "./HomeRightSideSec";
import Sidebar from "../layouts/sidebar/Sidebar";
import api from "../../Environment";

class HomeIndex extends Component {

  state = {
    liveVideoData: null,
    loadingLiveVideo: true,
    skipCountLiveVideo: 0,
    liveVideoPublicData: null,
    loadingLiveVideoPublic: true,
    skipCountLiveVideoPublic: 0,
    liveVideoPrivateData: null,
    loadingLiveVideoPrivate: true,
    skipCountLiveVideoPrivate: 0,
    loadMoreButtonDisable: false,
    loadingContent: null,
    popularLiveVideoData: null,
    loadingPopularLiveVideoData: true,
    skipCountPopularLiveVideo: 0,
    userSuggesstionData: null,
    loadingUserSuggesstionData: true,
    skipCountUserSuggesstion: 0,
  };
  // constructor(props) {
  //   super(props);
  //   var param = "https://soundswift.net/?email=streamer@streamnow.com&password=123456&login_type=creator&login_by=manual&device_type=web&username='soundwift'&logout='login'"

  //   var param2 = param.split("?")[1];
  //   if (param2 != undefined) {

  //     var param3 = param2.split("&");

  //     var check = param3[param3.length - 1].split("=")[1]

  //     if (check == "'login'") {

  //       var LoginObj = {
  //         email: param3[0].split("=")[1],
  //         password: param3[1].split("=")[1],
  //         login_type: param3[2].split("=")[1],
  //         login_by: param3[3].split("=")[1],
  //         device_type: param3[4].split("=")[1],
  //       }

  //     }
  //   }

  // }

  componentDidMount() {
    const inputData = {
      skip: this.state.skipCountLiveVideo,
    };
    this.getLiveVideoAPI(inputData);
    this.getPopularLiveVideo();
    this.getUserSuggesstion();
  }

  loadMore = (event, type) => {
    event.preventDefault();
    this.setState({
      loadMoreButtonDisable: true,
      loadingContent: "Loading...",
    });
    let inputData;
    if (type == "home") {
      inputData = {
        skip: this.state.skipCountLiveVideo,
      };
      this.getLiveVideoAPI(inputData);
    }
    if (type == "public") {
      inputData = {
        skip: this.state.skipCountLiveVideoPublic,
      };
      this.getLiveVideoPublicAPI(inputData);
    }
    if (type == "private") {
      inputData = {
        skip: this.state.skipCountLiveVideoPrivate,
      };
      this.getLiveVideoPrivateAPI(inputData);
    }
  };

  getLiveVideoAPI = (inputData) => {
    let items;
    api.postMethod("home", inputData).then((response) => {
      if (response.data.success) {
        if (this.state.liveVideoData != null) {
          items = [...this.state.liveVideoData, ...response.data.data];
        } else {
          items = [...response.data.data];
        }
        this.setState({
          liveVideoData: items,
          loadingLiveVideo: false,
          skipCountLiveVideo:
            response.data.data.length + this.state.skipCountLiveVideo,
          loadMoreButtonDisable: false,
          loadingContent: null,
        });
      } else {
      }
    });
  };

  getLiveVideoPublicDetails = () => {
    const inputData = {
      skip: this.state.skipCountLiveVideoPublic,
    };
    if (this.state.liveVideoPublicData == null)
      this.getLiveVideoPublicAPI(inputData);
  };

  getLiveVideoPublicAPI = (inputData) => {
    let items;
    api.postMethod("live_videos_public", inputData).then((response) => {
      if (response.data.success) {
        if (this.state.liveVideoPublicData != null) {
          items = [...this.state.liveVideoPublicData, ...response.data.data];
        } else {
          items = [...response.data.data];
        }
        this.setState({
          liveVideoPublicData: items,
          loadingLiveVideoPublic: false,
          skipCountLiveVideoPublic:
            response.data.data.length + this.state.skipCountLiveVideoPublic,
          loadMoreButtonDisable: false,
          loadingContent: null,
        });
      } else {
      }
    });
  };

  getLiveVideoPrivateDetails = () => {
    const inputData = {
      skip: this.state.skipCountLiveVideoPrivate,
    };
    if (this.state.liveVideoPrivateData == null)
      this.getLiveVideoPrivateAPI(inputData);
  };

  getLiveVideoPrivateAPI = (inputData) => {
    let items;
    api.postMethod("live_videos_private", inputData).then((response) => {
      if (response.data.success) {
        if (this.state.liveVideoPrivateData != null) {
          items = [...this.state.liveVideoPrivateData, ...response.data.data];
        } else {
          items = [...response.data.data];
        }
        this.setState({
          liveVideoPrivateData: items,
          loadingLiveVideoPrivate: false,
          skipCountLiveVideoPrivate:
            response.data.data.length + this.state.skipCountLiveVideoPrivate,
          loadMoreButtonDisable: false,
          loadingContent: null,
        });
      } else {
      }
    });
  };

  getPopularLiveVideo = () => {
    const inputData = {
      skip: this.state.skipCountPopularLiveVideo,
    };
    if (this.state.popularLiveVideoData == null)
      this.getPopularLiveVideoAPI(inputData);
  };
  getPopularLiveVideoAPI = (inputData) => {
    let items;
    api.postMethod("live_videos_popular", inputData).then((response) => {
      if (response.data.success) {
        if (this.state.popularLiveVideoData != null) {
          items = [...this.state.popularLiveVideoData, ...response.data.data];
        } else {
          items = [...response.data.data];
        }
        this.setState({
          popularLiveVideoData: items,
          loadingPopularLiveVideoData: false,
          skipCountPopularLiveVideo:
            response.data.data.length + this.state.skipCountPopularLiveVideo,
          loadMoreButtonDisable: false,
          loadingContent: null,
        });
      } else {
      }
    });
  };

  getUserSuggesstion = () => {
    const inputData = {
      skip: this.state.skipCountPopularLiveVideo,
    };
    if (this.state.userSuggesstionData == null)
      this.getUserSuggesstionAPI(inputData);
  };
  getUserSuggesstionAPI = (inputData) => {
    let items;
    api.postMethod("users_suggestions", inputData).then((response) => {
      if (response.data.success) {
        if (this.state.userSuggesstionData != null) {
          items = [...this.state.userSuggesstionData, ...response.data.data];
        } else {
          items = [...response.data.data];
        }
        this.setState({
          userSuggesstionData: items,
          loadingUserSuggesstionData: false,
          skipCountUserSuggesstion:
            response.data.data.length + this.state.skipCountUserSuggesstion,
          loadMoreButtonDisable: false,
          loadingContent: null,
        });
      } else {
      }
    });
  };

  render() {
    const {
      liveVideoData,
      liveVideoPrivateData,
      liveVideoPublicData,
      loadMoreButtonDisable,
      loadingContent,
      loadingLiveVideo,
      loadingLiveVideoPrivate,
      loadingLiveVideoPublic,
      popularLiveVideoData,
      loadingPopularLiveVideoData,
      userSuggesstionData,
      loadingUserSuggesstionData,
    } = this.state;
    return (
      <div class="main video-stream">
        <Sidebar />
        <div class="row left-spacing1">
          <div class="stn-live-video" id="above-full">
            <div
              class="col-xs-12 col-sm-8 col-md-8 col-lg-8 zero-padding"
              id="full-view"
            >

              <div class="card">
                <HomeTabSec
                  getLiveVideoPublicDetails={this.getLiveVideoPublicDetails}
                  getLiveVideoPrivateDetails={this.getLiveVideoPrivateDetails}
                />
                <div className="tab-content">
                  <HomeSec
                    liveVideoData={liveVideoData}
                    loadingLiveVideo={loadingLiveVideo}
                    loadingContent={loadingContent}
                    loadMoreButtonDisable={loadMoreButtonDisable}
                  />
                  <HomePublic
                    liveVideoPublicData={liveVideoPublicData}
                    loadingLiveVideoPublic={loadingLiveVideoPublic}
                    loadingContent={loadingContent}
                    loadMoreButtonDisable={loadMoreButtonDisable}
                  />
                  <HomePrivate
                    liveVideoPrivateData={liveVideoPrivateData}
                    loadingLiveVideoPrivate={loadingLiveVideoPrivate}
                    loadingContent={loadingContent}
                    loadMoreButtonDisable={loadMoreButtonDisable}
                  />
                </div>
              </div>
            </div>

            <HomeRightSideSec
              loadingPopularLiveVideoData={loadingPopularLiveVideoData}
              popularLiveVideoData={popularLiveVideoData}
              userSuggesstionData={userSuggesstionData}
              loadingUserSuggesstionData={loadingUserSuggesstionData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeIndex;
