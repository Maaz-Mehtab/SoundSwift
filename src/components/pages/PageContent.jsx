import React, { Component } from "react";
import renderHTML from "react-render-html";
class PageContent extends Component {
    state = {};
    render() {
        const { displayContent } = this.props;
        return (
            <div role="tabpanel" className="tab-pane active" id="privacy">
                {displayContent == null ? (
                    "Loading..."
                ) : (
                    <div className="static-content">
                        <h5 className="static-head-text">
                            {displayContent.title}
                        </h5>
                        <p>{renderHTML(displayContent.description)}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default PageContent;
