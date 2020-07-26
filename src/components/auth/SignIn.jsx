import React, { Component } from "react";
import config from "react-global-configuration";
import GoogleLogin from "react-google-login";

class SignIn extends Component {
    state = {};
    render() {
        const {
            inputData,
            handleChange,
            handleLogin,
            handleGoogleResponse,
            loadingContent,
            buttonDisable,
            signInType,
            forgotPasswordClicked,
        } = this.props;
        return (
            <div
                className="modal fade modal-index login-modal"
                id="signin-streamer"
                role="dialog"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                            <h4 className="modal-title">Loginout</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="header-content">
                                        <h5>Hey man {signInType},</h5>
                                        <p>
                                            helloo Lorem ipsum dolor sit amet
                                            consectetur adipiscing elit, sed do
                                            eiusmo, lorem ipsum dolor sit amet
                                            consectetur adipiscing elit, sed do
                                            eiusmo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="Spacer-10"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <form onSubmit={handleLogin}>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                placeholder="Email"
                                                name="email"
                                                value={inputData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="Password"
                                                name="password"
                                                value={inputData.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="modal-btn">
                                            <button
                                                type="submit"
                                                className="btn-login"
                                                disabled={buttonDisable}
                                            >
                                                {loadingContent != null
                                                    ? loadingContent
                                                    : "Login"}
                                            </button>
                                        </div>
                                    </form>
                                    <div className="mt-medium">
                                        <a
                                            href="#"
                                            className="forgot-password-btn"
                                            data-toggle="modal"
                                            data-target="#forgot-password-stremer"
                                            onClick={forgotPasswordClicked}
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <div className="divider">
                                    <span>Or</span>
                                </div>
                                {config.get("configData.GOOGLE_CLIENT_ID") ? (
                                    <div className="col-md-6">
                                        <GoogleLogin
                                            clientId={config.get(
                                                "configData.GOOGLE_CLIENT_ID"
                                            )}
                                            render={(renderProps) => (
                                                <a
                                                    href="#"
                                                    onClick={
                                                        renderProps.onClick
                                                    }
                                                    disabled={
                                                        renderProps.disabled
                                                    }
                                                >
                                                    <div className="google-info text-center">
                                                        <div className="google-img">
                                                            <img
                                                                src={
                                                                    window
                                                                        .location
                                                                        .origin +
                                                                    "/assets/img/google-logo.png"
                                                                }
                                                                className="logo-img"
                                                            />
                                                            <p>
                                                                Sign In With
                                                                Google
                                                            </p>
                                                        </div>
                                                    </div>
                                                </a>
                                                // <button className="social"  onClick={renderProps.onClick}
                                                //   disabled={renderProps.disabled}>
                                                //   <i className="fab fa-google-plus-square google social-icons" />{" "}
                                                //   Login Using Google
                                                // </button>
                                            )}
                                            buttonText="Login"
                                            onSuccess={
                                                this.props.handleGoogleResponse
                                            }
                                            onFailure={
                                                this.props.handleGoogleResponse
                                            }
                                            cookiePolicy={"single_host_origin"}
                                        />
                                        {/* <a href="#">
                      <div className="google-info text-center">
                        <div className="google-img">
                          <img
                            src={
                              window.location.origin +
                              "/assets/img/google-logo.png"
                            }
                            className="logo-img"
                          />
                          <p>Sign In With Google</p>
                        </div>
                      </div>
                    </a> */}
                                    </div>
                                ) : (
                                    " "
                                )}

                                <div className="Spacer-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
