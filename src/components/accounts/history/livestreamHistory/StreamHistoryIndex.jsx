import React, { Component } from "react";
import StreamHistoryCard from "./StreamHistoryCard";
import Sidebar from "../../../layouts/sidebar/Sidebar";

class StreamHistoryIndex extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <Sidebar />
        <div class="sec-padding streamed-videos left-spacing1">
          <div class="Spacer-10"></div>
          <div class="public-video-header">Streaming History</div>
          <div className="Spacer-10"></div>
          <div className="row small-padding">
            <StreamHistoryCard />
            <StreamHistoryCard />
            <StreamHistoryCard />
            <StreamHistoryCard />
          </div>
          <div class="Spacer-10"></div>
          <div className="text-center">
              <button className="show-more-btn">show more</button>
            </div>
        </div>
      </div>
    );
  }
}

export default StreamHistoryIndex;
