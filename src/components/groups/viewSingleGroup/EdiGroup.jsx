import React, { Component } from "react";

class EditGroup extends Component {
  state = {};
  render() {
    const {
      inputData,
      handleChange,
      saveGroup,
      loadingContent,
      buttonDisable,
      handleChangeImage,
    } = this.props;
    return (
      <div class="modal fade view-group" id="edit-group" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="modal-header">
              <button
                class="close"
                data-dismiss="modal"
                id="language_close"
                type="button"
              >
                ×
              </button>
              <h4 class="title">Edit Group</h4>
            </div>
            <div class="modal-body sm-padding">
              <div class="form-group">
                <label class="control-label">Title</label>
                <input
                  class="form-control"
                  placeholder="Enter your full name here"
                  name="name"
                  value={inputData.name}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <label class="control-label">Description</label>
                <textarea
                  class="form-control"
                  placeholder="Enter your full name here"
                  name="description"
                  value={inputData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div class="form-group">
                {/* <div class="col-md-6 text-right p-0">
                  <div class="upload-file-info">
                    <input type="file" id="file" />
                    <label for="file" class="btn-2">
                      Upload Image
                    </label>
                  </div>
                </div> */}
                <label class="control-label">Add Group Image</label>
                <input
                  class="form-control"
                  placeholder="Enter your full name here"
                  type="file"
                  name="picture"
                  accept="image/*"
                  onChange={handleChangeImage}
                />
              </div>
              <div class="form-group">
                <button
                  className="btn btn-group"
                  type="submit"
                  onClick={saveGroup}
                  disabled={buttonDisable}
                >
                  {loadingContent != null ? loadingContent : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditGroup;
