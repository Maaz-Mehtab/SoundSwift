import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewGroupCard extends Component {
  state = {};
  render() {
    const { group } = this.props;
    return (
      <div className="notify-box">
        <div className="row">
          <div className="col-md-12">
            <div className="row small-padding">
              <div className="col-md-5">
                <div className="notify-img">
                  <Link
                    to={`/group/single-view/${group.live_group_id}`}
                    className="user-profile"
                  >
                    <img src={group.live_group_picture} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-md-7">
                <div className="notify-content">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Group Owner</td>
                          <td>
                            <Link
                              to={`/group/single-view/${group.live_group_id}`}
                              className="user-profile"
                            >
                              {group.live_group_name}
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>Total No of Members</td>
                          <td>{group.total_members}</td>
                        </tr>
                        <tr>
                          <td>Description</td>
                          <td>{group.live_group_description}</td>
                        </tr>
                      </tbody>
                    </table>
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

export default ViewGroupCard;
