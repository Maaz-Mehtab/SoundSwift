import React, { Component } from "react";

class ForgotPassword extends Component {
    state = {};
    render() {
        const {
            inputData,
            handleChange,
            handleLogin,
            loadingContent,
            buttonDisable,
            handleForgotPassword,
        } = this.props;
        return (
            <div
                className="modal fade modal-index"
                id="forgot-password-stremer"
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
                            <h4 className="modal-title">Forgot Password</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="header-content">
                                        <h5>Hey There,</h5>
                                        <p>
                                            Enter the email address associated
                                            with your account, and we'll email
                                            you a link to reset your password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="Spacer-10"></div>
                            <div className="row">
                                <div className="col-md-12">
                                    <form onSubmit={handleForgotPassword}>
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
                                        <div className="modal-btn text-center">
                                            <button
                                                type="submit"
                                                className="btn-forgot"
                                                disabled={buttonDisable}
                                            >
                                                {loadingContent != null
                                                    ? loadingContent
                                                    : "Send"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;
