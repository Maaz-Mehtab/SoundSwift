import React, { Component } from "react";
import Sidebar from "../../layouts/sidebar/Sidebar";
import { Link } from "react-router-dom";
import api from "../../../Environment";
import ToastContent from "../../helper/ToastContent";
import { withToastManager } from "react-toast-notifications";
import AddPPV from "./AddPPV";
import _ from "lodash";

const $ = window.$;

class VodListIndex extends Component {
  state = {
    vodData: null,
    loadingVod: true,
    skipCount: 0,
    loadMoreButtonDisable: false,
    loadingContent: null,
    deletedVideoId: [],
    PPVInputData: {},
    PPVLoadingContent: null,
    PPVButtonDisable: false,
    isLoadingSearch: false,
    results: [],
    selectedPPVVideo: null,
  };
  componentDidMount() {
    const inputData = {
      skip: this.state.skipCount,
    };
    this.getVodDetails(inputData);
  }

  loadMore = (event) => {
    event.preventDefault();
    this.setState({
      loadMoreButtonDisable: true,
      loadingContent: "Loading...",
    });
    const inputData = {
      skip: this.state.skipCount,
    };

    this.getVodDetails(inputData);
  };

  getVodDetails = (inputData) => {
    let items;
    api.postMethod("vod_videos_owner_list", inputData).then((response) => {
      if (response.data.success) {
        if (this.state.vodData != null) {
          items = [...this.state.vodData, ...response.data.data];
        } else {
          items = [...response.data.data];
        }
        this.setState({
          vodData: items,
          loadingVod: false,
          skipCount: response.data.data.length + this.state.skipCount,
          loadMoreButtonDisable: false,
          loadingContent: null,
        });
      } else {
      }
    });
  };

  deleteVodVideos = (event, video) => {
    event.preventDefault();
    api
      .postMethod("vod_videos_owner_delete", {
        vod_video_id: video.vod_video_id,
      })
      .then((response) => {
        if (response.data.success) {
          const deletedVideoId = [...this.state.deletedVideoId];
          deletedVideoId.push(video.vod_video_id);
          this.setState({ deletedVideoId });

          let array = [...this.state.vodData]; // make a separate copy of the array
          let index = array.indexOf(video);
          if (index !== -1) {
            array.splice(index, 1);
            this.setState({ vodData: array });
          }
          ToastContent(
            this.props.toastManager,
            response.data.message,
            "success"
          );
        } else {
          ToastContent(this.props.toastManager, response.data.error, "error");
        }
      });
  };

  updateStatus = (event, video) => {
    event.preventDefault();
    api
      .postMethod("vod_videos_owner_publish_status", {
        vod_video_id: video.vod_video_id,
      })
      .then((response) => {
        if (response.data.success) {
          let array = [...this.state.vodData]; // make a separate copy of the array
          let index = array.indexOf(video);
          if (index !== -1) {
            array[index].publish_type = response.data.data.status;
            this.setState({ vodData: array });
          }
          ToastContent(
            this.props.toastManager,
            response.data.message,
            "success"
          );
        } else {
          ToastContent(this.props.toastManager, response.data.error, "error");
        }
      });
  };

  PPVChange = ({ currentTarget: input }) => {
    const PPVInputData = { ...this.state.PPVInputData };
    PPVInputData[input.name] = input.value;
    this.setState({ PPVInputData });
  };

  addVideoID = (event, video) => {
    const PPVInputData = { ...this.state.PPVInputData };
    PPVInputData["vod_video_id"] = video.vod_video_id;
    PPVInputData["type_of_subscription"] = video.type_of_subscription;
    PPVInputData["amount"] = video.amount;
    PPVInputData["is_pay_per_view"] = video.is_pay_per_view;
    this.setState({ PPVInputData });
    this.setState({ selectedPPVVideo: video });
  };

  setPPV = (event) => {
    event.preventDefault();
    this.setState({
      PPVButtonDisable: true,
      PPVLoadingContent: "Loading...",
    });
    api
      .postMethod("vod_videos_owner_set_ppv", this.state.PPVInputData)
      .then((response) => {
        if (response.data.success) {
          let array = [...this.state.vodData]; // make a separate copy of the array
          let index = array.indexOf(this.state.selectedPPVVideo);
          if (index !== -1) {
            array[index].is_pay_per_view = 1;
            this.setState({ vodData: array });
          }
          ToastContent(
            this.props.toastManager,
            response.data.message,
            "success"
          );
        } else {
          ToastContent(this.props.toastManager, response.data.error, "error");
        }
        this.setState({
          PPVButtonDisable: false,
          PPVLoadingContent: null,
        });
        $("#add-ppv").modal("hide");
      });
  };

  removePPV = (event, video) => {
    event.preventDefault();
    api
      .postMethod("vod_videos_owner_remove_ppv", {
        vod_video_id: video.vod_video_id,
      })
      .then((response) => {
        if (response.data.success) {
          let array = [...this.state.vodData]; // make a separate copy of the array
          let index = array.indexOf(video);
          if (index !== -1) {
            array[index].is_pay_per_view = 0;
            this.setState({ vodData: array });
          }
          ToastContent(
            this.props.toastManager,
            response.data.message,
            "success"
          );
        } else {
          ToastContent(this.props.toastManager, response.data.error, "error");
        }
      });
  };

  handleSearchChange = ({ currentTarget: input }) => {
    this.setState({ isLoadingSearch: true });

    setTimeout(() => {
      if (input.value < 1)
        return this.setState({
          isLoadingSearch: false,
          results: [],
        });

      const re = new RegExp(_.escapeRegExp(input.value), "i");
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoadingSearch: false,
        results: _.filter(this.state.vodData, isMatch),
      });
    }, 300);
  };

  render() {
    const {
      loadingVod,
      vodData,
      deletedVideoId,
      PPVButtonDisable,
      PPVInputData,
      PPVLoadingContent,
    } = this.state;
    let renderData;
    if (this.state.results.length > 0) {
      renderData = this.state.results;
    } else {
      renderData = vodData;
    }
    return (
      <div className="main">
        <Sidebar />
        <div className="sec-padding vodlist left-spacing1">
          <div className="Spacer-5"></div>
          <div className="public-video-header">Vod Manager</div>
          <div className="Spacer-10"></div>
          {loadingVod ? (
            "Loading..."
          ) : renderData.length > 0 ? (
            <div className="row small-padding">
              <div className="col-md-12 video-list">
                <div className="table-default left-adjust table-responsive newtable">
                  <div className="Spacer-5"></div>
                  <div className="row">
                    <div className="col-md-12">
                      <Link to={"/vod/upload"}>
                        <button className="btn2 pull-right m-r-10">
                          Upload Video
                        </button>
                      </Link>
                      <div id="wrap" className="pull-right">
                        <form action="" autocomplete="on">
                          <input
                            name="search"
                            type="text"
                            onChange={this.handleSearchChange}
                            placeholder="Search"
                          />
                          <i className="fas fa-search"></i>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="Spacer-8"></div>
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th scope="col">Sl No</th>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Title</th>
                        <th scope="col">Published date and time</th>
                        <th scope="col"> PPV (Yes,No)</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loadingVod
                        ? "Loading..."
                        : renderData.length > 0
                        ? renderData.map((video, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>
                                <a href="#" className="user-profile">
                                  <img src={video.image} alt="" />
                                </a>
                              </td>
                              <td>
                                <h5 className="listing-table-title">
                                  {video.title}
                                </h5>
                              </td>
                              <td>
                                <span className="listing-table-date">
                                  {video.date}
                                </span>
                              </td>
                              <td className="listing-table-ppv">
                                {video.is_pay_per_view == 1 ? (
                                  <React.Fragment>
                                    <span className="text-success text-bold">
                                      Yes
                                    </span>
                                    {"  "}
                                    <a
                                      href="#"
                                      onClick={(event) =>
                                        this.removePPV(event, video)
                                      }
                                    >
                                      <span className="text-danger text-bold pull-right">
                                        <i className="fa fa-times "></i> Remove
                                      </span>
                                    </a>
                                  </React.Fragment>
                                ) : (
                                  "No"
                                )}
                              </td>
                              <td>
                                <span className="badge badge-warning">
                                  {video.publish_type == 1
                                    ? "Published"
                                    : "Unpublished"}
                                </span>
                              </td>
                              <td>
                                <div className="btn-group action-btn">
                                  <label
                                    type="button"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="fa fa-ellipsis-h"></i>
                                  </label>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <Link
                                        to={{
                                          pathname: `/vod/edit/${video.title}`,
                                          state: video,
                                        }}
                                      >
                                        <i className="fa fa-edit icon"></i>Edit
                                        video
                                      </Link>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        onClick={(event) =>
                                          this.deleteVodVideos(event, video)
                                        }
                                      >
                                        <i className="fa fa-trash icon"></i>
                                        Delete video
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        onClick={(event) =>
                                          this.updateStatus(event, video)
                                        }
                                      >
                                        <i className="fa fa-window-close icon"></i>{" "}
                                        {video.publish_type == 1
                                          ? "Unpublish"
                                          : "Publish"}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#add-ppv"
                                        onClick={(event) =>
                                          this.addVideoID(event, video)
                                        }
                                      >
                                        <i className="fa fa-eye icon"></i>Pay
                                        Per View
                                      </a>
                                    </li>
                                    <li>
                                      <Link
                                        to={{
                                          pathname: `/vod/single-view/${video.title}`,
                                          state: video,
                                        }}
                                      >
                                        <i className="fa fa-eye icon"></i>
                                        View
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          ))
                        : ""}
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <button
                        className="show-more-btn"
                        type="button"
                        onClick={this.loadMore}
                        disabled={this.state.loadMoreButtonDisable}
                      >
                        {this.state.loadingContent != null
                          ? this.state.loadingContent
                          : "Load More"}
                      </button>
                    </div>
                  </div>
                  <div className="Spacer-5"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row small-padding live-streaming-history">
              <div className="col-md-12 video-list">
                <div className="text-center">
                  <h4 className="text-muted">
                    Seem's you haven't uploaded any video.
                  </h4>
                  <div className="Spacer10"></div>
                  <Link className="btn1 btn-sm" to={"/vod/upload"}>
                    Upload Video Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="Spacer-8"></div>
        <AddPPV
          PPVButtonDisable={PPVButtonDisable}
          PPVInputData={PPVInputData}
          PPVLoadingContent={PPVLoadingContent}
          PPVChange={this.PPVChange}
          setPPV={this.setPPV}
        />
      </div>
    );
  }
}

export default withToastManager(VodListIndex);
