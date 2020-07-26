import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeRightSideFollowerList extends Component {
    render() {
        const { userSuggesstionData, loadingUserSuggesstionData } = this.props;
        return (
            <div class="follow-users-list bg-color-grey">
                <h5 class="h5-s following-user text-uppercase"></h5>
                <h5 class="h5-s stn-heading text-uppercase">
                    User Suggesstion
                </h5>
                {loadingUserSuggesstionData
                    ? "Loading..."
                    : userSuggesstionData.length > 0
                    ? userSuggesstionData.map((user) => (
                          <>
                              <div class="user-details watch-user">
                                  <Link to={`/profile/${user.user_unique_id}`}>
                                      <span class="user-img-sm">
                                          <img
                                              class="img-circle img-responsive user-details-img"
                                              src={user.picture}
                                          />
                                      </span>
                                      <span class="user-name-info">
                                          {user.name}
                                      </span>
                                  </Link>
                                  <span class="watch-btn-user">
                                      <Link
                                          to={`/profile/${user.user_unique_id}`}
                                          class="btn btn-default btn-block btn-br"
                                          type="button"
                                      >
                                          View
                                      </Link>
                                  </span>
                              </div>
                              <div class="clear-both"></div>
                          </>
                      ))
                    : "No Data Found"}
            </div>
        );
    }
}

export default HomeRightSideFollowerList;
