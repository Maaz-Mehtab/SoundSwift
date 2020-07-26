import React, { Component } from "react";

class VodHistoryCard extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-12">
        <div className="notify-box">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-6">
                  <div className="notify-img">
                    <a href="#" className="user-profile">
                      <img src="assets/img/moon-bg.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="notify-content">
                    <h4>Video Name</h4>
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic, print, and publishing industries for previewing
                      layouts and visual mockups
                    </p>
                    <h5 className="h5-s user-name text-grey-clr mt-5">
                      <i className="fa fa-calendar-alt icon"></i>March 30, 2020
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-right resp-left">
              <a href="#">
                <div className="notify-close-icon">
                  <i className="fas fa-times"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VodHistoryCard;
