import React, { Component } from "react";

class ProfileGalleryUploadImage extends Component {
  render() {
    const {
      galleryInputChange,
      gallerySave,
      galleryInputData,
      galleryLoadingContent,
      galleryButtonDisable,
      addGalleryImage,
    } = this.props;
    return (
      <div class="modal fade view-group" id="image_upload" role="dialog">
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
              <h4 class="title">Add Image</h4>
            </div>
            <div class="modal-body sm-padding">
              <div class="form-group">
                <label class="control-label">Title</label>
                <input
                  class="form-control"
                  placeholder="Enter your full name here"
                  name="gallery_description"
                  value={galleryInputData.gallery_description}
                  onChange={galleryInputChange}
                />
              </div>

              <div class="form-group">
                <label class="control-label">Add Image</label>
                <div className="upload-btn-wrapper">
                  <button class="upload-btn">Upload a file</button>
                  <input
                    class="form-control-1"
                    placeholder="Enter your full name here"
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={addGalleryImage}
                  />
                </div>
              </div>
              <div class="form-group">
                <button
                  className="btn btn-group"
                  type="submit"
                  onClick={gallerySave}
                  disabled={galleryButtonDisable}
                >
                  {galleryLoadingContent != null
                    ? galleryLoadingContent
                    : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileGalleryUploadImage;
