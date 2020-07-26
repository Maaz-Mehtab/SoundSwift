import React, { Component } from "react";

class BroadcastStartModel extends Component {
    state = {};
    render() {
        const {
            modelChange,
            startBroadcastInputData,
            modelLoadingContent,
            modelButtonDisabled,
            loadingGroup,
            groupData,
            startBroadcastAPI,
        } = this.props;
        return (
            <div
                className="modal fade modal-index login-modal"
                id="start_broadcast"
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
                            <h4 className="modal-title">Let's broadcast</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <form onSubmit={startBroadcastAPI}>
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                placeholder="Enter your broadcast title"
                                                name="title"
                                                required
                                                value={
                                                    startBroadcastInputData.title
                                                }
                                                onChange={modelChange}
                                            />
                                        </div>
                                        <div className="form-group ">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>
                                                        Choose Streaming Mode:
                                                    </label>
                                                </div>
                                                <div className="col-md-2">
                                                    <label className="custom-radio-btn">
                                                        Public
                                                        <input
                                                            type="radio"
                                                            name="type"
                                                            value="public"
                                                            onChange={
                                                                modelChange
                                                            }
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-md-2">
                                                    <label className="custom-radio-btn">
                                                        Private
                                                        <input
                                                            type="radio"
                                                            name="type"
                                                            value="private"
                                                            onChange={
                                                                modelChange
                                                            }
                                                        />
                                                        <span className="checkmark choose-date-check"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>
                                                        Payment Status:
                                                    </label>
                                                </div>

                                                <div className="col-md-2">
                                                    <label className="custom-radio-btn">
                                                        Free
                                                        <input
                                                            type="radio"
                                                            name="payment_status"
                                                            value={0}
                                                            onChange={
                                                                modelChange
                                                            }
                                                        />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div className="col-md-2">
                                                    <label className="custom-radio-btn">
                                                        Paid
                                                        <input
                                                            type="radio"
                                                            name="payment_status"
                                                            value={1}
                                                            onChange={
                                                                modelChange
                                                            }
                                                        />
                                                        <span className="checkmark choose-date-check"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="form-group"
                                            id="broadcast-amount"
                                            hidden
                                        >
                                            <label>Amount</label>
                                            <input
                                                type="number"
                                                min="0"
                                                step="any"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                placeholder="Enter the amount"
                                                name="amount"
                                                value={
                                                    startBroadcastInputData.amount
                                                }
                                                onChange={modelChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label for="groups">
                                                Choose Group:{" "}
                                                <span className="text-muted">
                                                    (Optional)
                                                </span>
                                            </label>
                                            <select
                                                id="groups"
                                                name="live_group_id"
                                                className="form-control"
                                                onChange={modelChange}
                                            >
                                                <option value="">Select</option>
                                                {loadingGroup
                                                    ? "Loading..."
                                                    : groupData.length > 0
                                                    ? groupData.map((group) => (
                                                          <option
                                                              value={
                                                                  group.live_group_id
                                                              }
                                                          >
                                                              {
                                                                  group.live_group_name
                                                              }
                                                          </option>
                                                      ))
                                                    : "No Data found"}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label">
                                                Description
                                            </label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Enter the description here"
                                                name="description"
                                                required
                                                value={
                                                    startBroadcastInputData.description
                                                }
                                                onChange={modelChange}
                                            ></textarea>
                                        </div>
                                        <div className="modal-btn">
                                            <button
                                                type="submit"
                                                className="btn"
                                                disabled={modelButtonDisabled}
                                                onClick={startBroadcastAPI}
                                            >
                                                {modelLoadingContent != null
                                                    ? modelLoadingContent
                                                    : "Start BroadCasting"}
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="Spacer-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BroadcastStartModel;
