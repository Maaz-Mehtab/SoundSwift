import React, { Component } from "react";
import SignIn from "./SignIn";

class SignInChoose extends Component {
  state = {};
  render() {
    const { ChooseSignInType } = this.props;
    return (
      <li className="dropdown login-modal-display resp-mrg-btm">
        <a
          href="#"
          className="dropdown-toggle btn-login"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sign In
        </a>
        <ul className="dropdown-menu login-modal-menu">
          <div className="row login-info">
            <div calss="col-md-12">
              <div className="options">
                <div className="row icons">
                  <div className="col-md-6">
                    <a
                      href="#"
                      data-toggle="modal"
                      // data-target="#signin-streamer"
                      onClick={(event) => ChooseSignInType(event, "creator")}
                    >
                      <div className="streamer-box">
                        <div className="streamer-img">
                          <img
                            src={
                              window.location.origin +
                              "/assets/img/streamer.svg"
                            }
                            className="fav-icon-login"
                          />
                        </div>
                        <p>Streamer</p>
                        <p className="sub-text">
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit, sed do eiusmo.
                        </p>
                        <p className="btn-signin">
                          Sign In <i className="fas fa-chevron-right"></i>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="#"
                      data-toggle="modal"
                      // data-target="#signin-streamer"
                      onClick={(event) => ChooseSignInType(event, "viewer")}
                    >
                      <div className="viewer-box">
                        <div className="streamer-img">
                          <img
                            src={
                              window.location.origin + "/assets/img/viewer.svg"
                            }
                            className="fav-icon-login"
                          />
                        </div>
                        <p>Viewer</p>
                        <p className="sub-text">
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit, sed do eiusmo.
                        </p>

                        <p className="btn-signin">
                          Sign In <i className="fas fa-chevron-right"></i>
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </li>
    );
  }
}

export default SignInChoose;
