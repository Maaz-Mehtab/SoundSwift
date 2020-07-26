import React, { Component } from "react";
import { Link } from "react-router-dom";

class Notification extends Component {
  render() {
    const {
      notificationCount,
      notificationCountLoading,
      notificationData,
      loadingNotification,
      getNotificationDetails,
    } = this.props;
    return (
      <li className="dropdown">
        <a
          href="#"
          className="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={getNotificationDetails}
        >
          <img style={{ width: 20, height: 20 }} src={window.location.origin + "/assets/img/bell.png"} />
          <span className="badge">
            {notificationCountLoading
              ? null
              : notificationCount > 0
                ? notificationCount
                : null}
          </span>
        </a>

        <div className="dropdown-menu" aria-labelledby="messageDropdown">
          {loadingNotification ? (
            <div className="dropdown-header">
              <p className="mb-0 font-weight-medium">Loading...</p>
              <a href="#" className="clear-all-btn"></a>
            </div>
          ) : notificationData.length > 0 ? (
            <>
              <div className="dropdown-header">
                <p className="mb-0 font-weight-medium">Notification</p>
                <a href="#" className="clear-all-btn"></a>
              </div>
              <div className="dropdown-body">
                {notificationData.map((notification) => (
                  <Link
                    to={{
                      pathname:
                        notification.type == "LIVE_STREAM_STARTED"
                          ? "/broadcast"
                          : "",
                      state: { live_video_id: notification.link_id },
                    }}
                    className="dropdown-item"
                  >
                    <div className="figure">
                      <img src={notification.user_picture} alt="user" />
                    </div>
                    <div className="content">
                      <div className="notification-info">
                        <p>{notification.notification}</p>
                        <p className="sub-text">{notification.user_name}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="dropdown-footer d-flex align-items-center justify-content-center">
                <Link to={"/all-notification"} className="view-all-btn">
                  View all
                </Link>
              </div>
            </>
          ) : (
                <div className="notification-empty">
                  <img
                    src={
                      window.location.origin + "/assets/img/notification-empty.png"
                    }
                  ></img>
                  <p>No Unread Notifications</p>
                  {/* <p>Click View All to view all of your notifications</p> */}
                </div>
              )}
        </div>
      </li>
    );
  }
}

export default Notification;
