import React, { Component } from "react";
import { Link } from "react-router-dom";

import config from "react-global-configuration";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* {config.get("configData.footer_pages1").length > 0 ? (
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                <ul className="list-unstyled footer-list">
                  {config
                    .get("configData.footer_pages1")
                    .map((static_page, index) => (
                      <li key={static_page.unique_id}>
                        <Link
                          to={`/page/${static_page.unique_id}`}
                          key={static_page.page_id}
                        >
                          {static_page.heading}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              ""
            )} */}
            {/* {config.get("configData.footer_pages2").length > 0 ? (
              <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
                <ul className="list-unstyled footer-list">
                  {config
                    .get("configData.footer_pages2")
                    .map((static_page, index) => (
                      <li key={static_page.unique_id}>
                        <Link
                          to={`/page/${static_page.unique_id}`}
                          key={static_page.page_id}
                        >
                          {static_page.heading}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              ""
            )} */}

            <div className="">
              <h4>Contact Address</h4>
              <div className="col-md-12 footer-links">

                <ul className="list-inline" >
                  <li><a href="https://www.videos.soundswift.com/home" data-load="?link1=home">Home</a></li>
                  <li><a href="https://www.videos.soundswift.com/terms/about-us" data-load="?link1=terms&amp;type=about-us">About us</a></li>
                  <li><a href="https://www.videos.soundswift.com/contact-us" data-load="?link1=contact">Contact us</a></li>
                  <li><a href="https://www.videos.soundswift.com/terms/privacy-policy" data-load="?link1=terms&amp;type=privacy-policy">Privacy Policy</a></li>
                  <li><a href="https://www.videos.soundswift.com/terms/terms" data-load="?link1=terms&amp;type=terms">Terms of use</a></li>
                  <li><a href="https://www.videos.soundswift.com/blog" data-load="?link1=terms&amp;type=blog">Blog</a></li>
                  <li><a href="https://www.videos.soundswift.com/developers" data-load="?link1=terms&amp;type=developers">Developers</a></li>
                </ul>

                {/* <div className="footer-left">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="footer-right">
                  <p>{config.get("configData.contact_address")}</p>
                </div> */}
              </div>

              {/* {config.get("configData.contact_number") ? (
                <div className="display-inline">
                  <div className="footer-left">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="footer-right">
                    <a
                      href={`tel:${config.get("configData.contact_number")}`}
                      target="_blank"
                    >
                      {config.get("configData.contact_number")}
                    </a>
                  </div>
                </div>
              ) : (
                  ""
                )}
              {config.get("configData.contact_email") ? (
                <div className="display-inline">
                  <div className="footer-left">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="footer-right">
                    <a
                      href={`mailto:${config.get("configData.contact_email")}`}
                      target="_blank"
                    >
                      {config.get("configData.contact_email")}
                    </a>
                  </div>
                </div>
              ) : (
                  ""
                )} */}
            </div>
          </div>
          <p className="footer-line-border"></p>
          <div className="row">
            <div className="col-xs-12 col-sm-9 col-md-9 col-lg-10">
              <i className="fa fa-copyright icon grey"></i>
              {/* <span className="grey">Copyright 2020 All rights reserved.</span> */}
              <span className="grey">2020 Sound Swift</span>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Footer;
