import React, { Component } from "react";

class ProfileChangePasswordSec extends Component {
  state = {};
  render() {
    const {
      handleChangePassword,
      changePasswordData,
      changePassword,
      loadingContent,
      buttonDisable,
    } = this.props;
    return (
      <div id="change" className="container-fluid tab-pane fade zero-padding">
        <div className="container top-bottom-spacing">
          <h2 className="signup-head center-align ">CHANGE PASSWORD</h2>
          <div className="col-xs-12  col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6 spacing2">
            <form className="content">
              <span className="input input--hoshi">
                <input
                  className="input__field input__field--hoshi"
                  type="Password"
                  id="crnt-pass"
                  name="old_password"
                  value={changePasswordData.old_password}
                  onChange={handleChangePassword}
                />
                <label
                  className="input__label input__label--hoshi input__label--hoshi-color-1"
                  htmlFor="crnt-pass"
                  data-content="Current Password"
                >
                  <span className="input__label-content input__label-content--hoshi">
                    Current Password
                  </span>
                </label>
              </span>
              <span className="input input--hoshi">
                <input
                  className="input__field input__field--hoshi"
                  type="Password"
                  id="new-pass"
                  name="password"
                  value={changePasswordData.password}
                  onChange={handleChangePassword}
                />
                <label
                  className="input__label input__label--hoshi input__label--hoshi-color-1"
                  htmlFor="new-pass"
                  data-content="New Password"
                >
                  <span className="input__label-content input__label-content--hoshi">
                    New Password
                  </span>
                </label>
              </span>
              <span className="input input--hoshi">
                <input
                  className="input__field input__field--hoshi"
                  type="Password"
                  id="con-pass"
                  name="password_confirmation"
                  value={changePasswordData.password_confirmation}
                  onChange={handleChangePassword}
                />
                <label
                  className="input__label input__label--hoshi input__label--hoshi-color-1"
                  htmlFor="con-pass"
                  data-content="Confirm Password"
                >
                  <span className="input__label-content input__label-content--hoshi">
                    Confirm Password
                  </span>
                </label>
              </span>
              <div className="Spacer-8"></div>
              <div className="center-align">
                <button
                  className="btn width-200"
                  type="button"
                  disabled={buttonDisable}
                  onClick={changePassword}
                >
                  {loadingContent != null ? loadingContent : "SAVE"}
                </button>
                <div className="Spacer-3 visible-xs"></div>
                <button className="btn1 width-200" type="button">
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileChangePasswordSec;
