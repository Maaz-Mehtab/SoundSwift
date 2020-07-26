import React, { Component } from "react";

class OtherProFollowerSecCard extends Component {
  state = {};
  render() {
    const {
      user,
      followbuttonLoadingContent,
      followButtonDisable,
      followInputData,
      followUser,
      unFollowUser,
    } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 top-margin bottom-space">
        <div className="live-video-box">
          <div
            className="followers-img"
            style={{ backgroundImage: `url(${user.picture})` }}
          ></div>
          <div className="user-profile spacing">
            <h4 className="h4-s user-name text-bold overflow">{user.name}</h4>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <h4 className="h4-s user-name blue-clr">
                  <i className="fa fa-eye icon"></i>
                  {user.total_followers} Followers
                </h4>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                {user.show_follow == 1 ? (
                  <button
                    className=" btn-default btn-follow pull-right left"
                    type="button"
                    disabled={
                      followInputData.user_id == user.user_id &&
                      followButtonDisable
                        ? true
                        : false
                    }
                    onClick={(event) => followUser(event, user, "follower")}
                  >
                    <i className="fa fa-user-plus icon"></i>
                    {followInputData.user_id == user.user_id &&
                    followbuttonLoadingContent != null
                      ? followbuttonLoadingContent
                      : "Follow"}
                  </button>
                ) : null}
                {user.show_unfollow == 1 ? (
                  <button
                    className=" btn-default btn-follow pull-right left"
                    type="button"
                    disabled={
                      followInputData.user_id == user.user_id &&
                      followButtonDisable
                        ? true
                        : false
                    }
                    onClick={(event) => unFollowUser(event, user, "follower")}
                  >
                    <i className="fa fa-user-plus icon"></i>{" "}
                    {followInputData.user_id == user.user_id &&
                    followbuttonLoadingContent != null
                      ? followbuttonLoadingContent
                      : "UnFollow"}
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OtherProFollowerSecCard;
