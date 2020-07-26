import React, { Component } from "react";
import Signup from "./Signup";

class SignupChoose extends Component {
  state = {};
  render() {
    const { ChooseSignUpType } = this.props;
    return (
      <li className="dropdown register-modal-display">
        <a
          href="#"
          className="dropdown-toggle btn-register"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sign Up
        </a>
        <ul className="dropdown-menu register-modal-menu">
          <div className="row register-info">
            <div calss="col-md-12">
              <div className="options">
                <div className="row icons">
                  <div className="col-md-6">
                    <a
                      href="#"
                      data-toggle="modal"
                      // data-target="#signup-streamer"
                      onClick={(event) => ChooseSignUpType(event, "creator")}
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
                        <p className="btn-signup">
                          Sign Up <i className="fas fa-chevron-right"></i>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="#"
                      data-toggle="modal"
                      // data-target="#signup-streamer"
                      onClick={(event) => ChooseSignUpType(event, "viewer")}
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
                        <p className="btn-signup">
                          Sign Up <i className="fas fa-chevron-right"></i>
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

export default SignupChoose;
