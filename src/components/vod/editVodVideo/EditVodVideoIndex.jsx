import React, { Component } from "react";
import Sidebar from "../../layouts/sidebar/Sidebar";
import { Progress } from "reactstrap";
import api from "../../../Environment";
import Helper from "../../helper/Helper";
import ToastContent from "../../helper/ToastContent";
import { withToastManager } from "react-toast-notifications";

class EditVodVideoIndex extends Helper {
  state = {
    loaded: 0,
    inputData: {},
    loadingContent: null,
    buttonDisable: false,
    imagePreviewUrl: null,
    videoPreviewUrl: null,
    displayPublishTime: false,
    loadingVideo: true,
  };

  componentDidMount() {
    if (this.props.location.state == null) {
      ToastContent(this.props.toastManager, "Video not found", "error");
      this.props.history.push("/live-tv/view-all");
    }
    const video = this.props.location.state;
    const inputData = { ...this.state.inputData };
    inputData["title"] = video.title;
    inputData["publish_type"] = video.publish_type;
    inputData["description"] = video.description;
    this.setState({ inputData });
    this.setState({ loadingVideo: false });
  }

  saveVideo = (event) => {
    event.preventDefault();
    this.setState({
      buttonDisable: true,
      loadingContent: "UpLoading....",
    });
    api
      .postMethod("vod_videos_owner_save", this.state.inputData)
      .then((response) => {
        if (response.data.success) {
          ToastContent(
            this.props.toastManager,
            response.data.message,
            "success"
          );
          this.props.history.push("/vod/list");
        } else {
          ToastContent(this.props.toastManager, response.data.error, "error");
        }
        this.setState({
          buttonDisable: false,
          loadingContent: null,
        });
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  publishTypeStatus = (type) => {
    this.setState({ displayPublishTime: type });
  };

  render() {
    if (this.state.loadingVideo) {
      return "Loading...";
    } else {
      const video = this.props.location.state;
      const {
        inputData,
        loadingContent,
        buttonDisable,
        imagePreviewUrl,
        videoPreviewUrl,
        displayPublishTime,
      } = this.state;
      return (
        <div className="main">
          <Sidebar />
          <div className="sec-padding upload-img-vido left-spacing1">
            <div className="Spacer-10"></div>
            <div class="public-video-header">Upload Your video</div>
            <div className="row small-padding">
              <div className="Spacer-9"></div>

              <div className="col-md-12 p-0">
                <form className="upload-form box-shadow-1">
                  <div className="form-group">
                    <label className="control-label">Title</label>
                    <input
                      className="form-control"
                      placeholder="Enter title"
                      name="title"
                      value={inputData.title}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group size-16 m-t-2em">
                    <div className="row">
                      <div className="col-md-12">
                        <label>Publish type:</label>
                      </div>

                      <div className="col-md-2">
                        <label className="custom-radio-btn">
                          Now
                          <input
                            type="radio"
                            name="publish_type"
                            value="now"
                            onChange={this.handleChange}
                            onClick={(event) => this.publishTypeStatus(false)}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="col-md-2">
                        <label className="custom-radio-btn">
                          Later
                          <input
                            type="radio"
                            name="publish_type"
                            value="later"
                            onChange={this.handleChange}
                            onClick={(event) => this.publishTypeStatus(true)}
                          />
                          <span className="checkmark choose-date-check"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  {displayPublishTime ? (
                    <div className="input-group choose-date mb-65">
                      <label>Choose Publish Date</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Choose Date"
                        aria-describedby="basic-addon2"
                        name="publish_time"
                        onChange={this.handleChange}
                      />
                      <span className="input-group-addon" id="basic-addon2">
                        <i className="fa fa-calendar-alt"></i>
                      </span>
                    </div>
                  ) : null}
                  <div className="form-group">
                    <label className="control-label">Description</label>

                    <textarea
                      className="form-control"
                      placeholder="Enter your description here"
                      name="description"
                      value={inputData.description}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <p className="pt-85">
                        <b>Choose Your Image</b>(Please enter .png .jpeg .jpg
                        images only. Upload Rectangle images 4:3 Ratio Ex: 400 *
                        300)
                      </p>
                      <div className="upload-file-info pt-86">
                        <input
                          type="file"
                          id="file"
                          name="image"
                          accept="image/*"
                          onChange={this.handleChangeImage}
                        />
                        <label htmlFor="file" className="btn-2 btn-2-inverse">
                          Upload Image
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="user-profile1"
                        style={{
                          backgroundImage: `url(${
                            imagePreviewUrl != null
                              ? imagePreviewUrl
                              : video.image
                          })`,
                        }}
                      ></div>
                    </div>
                    <Progress
                      max="100"
                      color="success"
                      value={this.state.loaded}
                    >
                      {Math.round(this.state.loaded, 2)}%
                    </Progress>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <p className="pt-85">
                        <b>Choose Your Video</b>(Please enter .mp4 videos only)
                      </p>
                      <div className="upload-file-info pt-87">
                        <input
                          type="file"
                          id="files"
                          accept="video/mp4,video/x-m4v,video/*"
                          name="video"
                          onChange={this.handleChangeImage}
                        />
                        <label htmlFor="files" className="btn-2 btn-2-inverse">
                          Upload Video
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 text-center">
                      {videoPreviewUrl != null ? (
                        <video
                          autoplay
                          controls
                          id="myVideo"
                          className="user-profile1"
                        >
                          <source src={videoPreviewUrl} type="video/mp4" />
                        </video>
                      ) : (
                        <video
                          autoplay
                          controls
                          id="myVide2o"
                          className="user-profile1"
                        >
                          <source src={video.video} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <button
                        className="btn btn-block"
                        type="submit"
                        onClick={this.saveVideo}
                        disabled={buttonDisable}
                      >
                        {loadingContent != null ? loadingContent : "Upload Now"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="Spacer-10"></div>
          </div>
        </div>
      );
    }
  }
}

export default withToastManager(EditVodVideoIndex);
