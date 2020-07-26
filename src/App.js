import React, { Component } from "react";

import CookieConsent, { Cookies } from "react-cookie-consent";

import { Router, Switch, Route, Redirect } from "react-router-dom";

// import createHistory from "history/createBrowserHistory";

import { createBrowserHistory as createHistory } from "history";

//Layouts

// Seventh layout pages

import { ToastProvider } from "react-toast-notifications";

import { Elements, StripeProvider } from "react-stripe-elements";

import HomeIndex from "./components/homePage/HomeIndex";
import HomeLayout from "./components/layouts/HomeLayout";
import BroadcastIndex from "./components/broadcastPage/BroadcastIndex";
import SubscriptionPlans from "./components/accounts/subscription/SubscriptionPlans";
import MySubscriptionPlan from "./components/accounts/subscription/MySubscriptionPlan";
import AddCard from "./components/accounts/cards/AddCard";
import DisplayCard from "./components/accounts/cards/DisplayCard";
import FollowerIndex from "./components/accounts/followers/FollowerIndex";
import FollowingIndex from "./components/accounts/following/FollowingIndex";
import ProfileIndex from "./components/accounts/profile/ProfileIndex";
import SearchIndex from "./components/search/SearchIndex";
import RedeemIndex from "./components/accounts/redeems/RedeemIndex";
import OtherProfileIndex from "./components/othersProfile/OthersProfileIndex";
import StreamHistoryIndex from "./components/accounts/history/livestreamHistory/StreamHistoryIndex";
import Settings from "./components/accounts/settings/Settings";
import NotificationIndex from "./components/accounts/notification/NotificationIndex";
import LiveTvViewAllIndex from "./components/liveTv/viewAllPage/LiveTvViewAllIndex";
import SinglePageIndex from "./components/liveTv/singlePage/SinglePageIndex";
import PaidStreamIndex from "./components/accounts/history/paidStreamingHistory/PaidStreamIndex";
import VodHistoryIndex from "./components/accounts/history/vodHistory/VodHistoryIndex";
import VodListIndex from "./components/vod/vodList/VodListIndex";
import OtherVodViewAllIndex from "./components/vod/otherVodVideos/viewAllPage/OtherVodViewAllIndex";
import OtherVodSinglePageIndex from "./components/vod/otherVodVideos/singlePage/OtherVodSinglePageIndex";
import UploadVideoIndex from "./components/vod/uploadVideo/UploadVideoIndex";
import ViewSingleGroupIndex from "./components/groups/viewSingleGroup/ViewSingleGroupIndex";
import CreateGroupIndex from "./components/groups/createGroup/CreateGroupIndex";
import ViewGroupsIndex from "./components/groups/viewGroups/ViewGroupsIndex";
import ViewSingleVodIndex from "./components/vod/viewSingleVod/ViewSingleVodIndex";
import CreateLiveTv from "./components/liveTv/myLiveTv/createLiveTv/CreateLiveTv";
import LiveTvListIndex from "./components/liveTv/myLiveTv/liveTvList/LiveTvListIndex";
import EditLiveTv from "./components/liveTv/myLiveTv/editLiveTv/EditLiveTv";
import SingleLiveTvIndex from "./components/liveTv/myLiveTv/singleLiveTv/SingleLiveTvIndex";
import Logout from "./components/auth/Logout";
import LiveStreamingListIndex from "./components/liveStreamingHistory/LiveStreamingList/LiveStreamingListIndex";
import LiveStreamingSingleViewIndex from "./components/liveStreamingHistory/liveStreamingSingleView/LiveStreamingSingleViewIndex";
import InvoiceIndex from "./components/paymentPage/liveTvInvoice/InvoiceIndex";
import RevenueIndex from "./components/accounts/revenue/RevenueIndex";
import SubscriptionInvoiceIndex from "./components/paymentPage/subscriptionInvoice/SubscriptionInvoiceIndex";
import VodInvoiceIndex from "./components/paymentPage/vodInvoice/VodInvoiceIndex";
import EditVodVideoIndex from "./components/vod/editVodVideo/EditVodVideoIndex";
import api from './Environment';
import configuration from "react-global-configuration";
import { apiConstants } from "./components/Constant/constants";
import { Helmet } from "react-helmet";
import PageIndex from "./components/pages/PageIndex";

const history = createHistory();
var username = "";
var password = "";
const $ = window.$;
const AppRoute = ({
  component: Component,
  layout: Layout,
  screenProps: ScreenProps,
  ...rest
}) => (
    <Route
      {...rest}
      render={(props) => (
        <Layout screenProps={ScreenProps} {...props}>
          <Component {...props} />
        </Layout>
      )}
      isAuthed
    />
  );

const PrivateRoute = ({
  component: Component,
  layout: Layout,
  screenProps: ScreenProps,
  authentication,
  ...rest
}) => (
    <Route
      {...rest}
      render={(props) =>
        authentication === true ? (
          <Layout screenProps={ScreenProps}>
            <Component {...props} authRoute={true} />
          </Layout>
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
      }
    />
  );
class App extends Component {
  constructor(props) {
    super(props);
    let userId = localStorage.getItem("userId");

    this.state = {
      loading: true,
      configLoading: true,
      authentication: userId ? true : false,
    };
    var param = window.location.href;
    console.log("param", param);
    // param = "https://soundswift.net/?logout=logout";
    // param = "https://soundswift.net/?email=streamer@streamnow.com&password=123456&login_type=creator&login_by=manual&device_type=web&username=soundwift&logout=logout"
    // param = "https://soundswift.net/?email=ccc@gmail.com&password=karachi1234&login_type=creator&login_by=manual&device_type=web&username=soundwift&logout=login"
    var param2 = param.split("?")[1];
    console.log("param2", param2)

    if (param2 != undefined) {
      var logout = param2.split("=")[1];
      if (logout == "logout") {
        console.log("Logout")
        this.Logout()
      }
      else {
        if (param2 != undefined) {
          var param3 = param2.split("&");
          var check = param3[param3.length - 1].split("=")[1]

          if (check == "login") {
            var LoginObj = {
              email: param3[0].split("=")[1],
              password: param3[1].split("=")[1],
              login_type: param3[2].split("=")[1],
              login_by: param3[3].split("=")[1],
              device_type: param3[4].split("=")[1],

            }
            username = param3[5].split("=")[1];
            this.handleLogin(LoginObj)
          }
          // if (check == "'logout'") {
          //   this.Logout()
          // }
        }
      }
    }

    history.listen((location, action) => {
      userId = localStorage.getItem("userId");


      this.setState({
        loading: true,
        authentication: userId ? true : false,
      });

      // this.setState({ loading: true, authentication: true });

      // this.loadingFn();

      document.body.scrollTop = 0;
    });



    this.fetchConfig();
    console.log("fetchConfig");
  }


  // componentDidUpdate() {
  //   this.fetchConfig();
  // }

  Logout = () => {
    api.postMethod("logout").then((response) => {
      if (response.data.success) {
        console.log("logout success");
      } else {
      }
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userLoginStatus");
    localStorage.removeItem("user_picture");
    localStorage.removeItem("username");
    localStorage.removeItem("total_followers");
    localStorage.removeItem("total_followings");
    localStorage.removeItem("total_live_videos");
    localStorage.removeItem("userName");
    localStorage.removeItem("one_time_subscription");
    history.push("/");
  }



  handleLogin = (LoginObj) => {
    console.log("handleLogin", LoginObj)
    api
      .postMethod("login", LoginObj)
      .then((response) => {
        console.log("response", response);
        console.log("response.data.success", response.data);
        if (response.data.success) {
          localStorage.setItem("userId", response.data.data.user_id);
          localStorage.setItem("one_time_subscription", response.data.data.one_time_subscription);
          localStorage.setItem("accessToken", response.data.data.token);
          localStorage.setItem("userLoginStatus", true);
          localStorage.setItem("user_picture", response.data.data.picture);
          localStorage.setItem("userName", username);
          localStorage.setItem("password", LoginObj.password);
          localStorage.setItem(
            "isStreamer",
            response.data.data.is_content_creator
          );
          localStorage.setItem("username", response.data.data.name);
          localStorage.setItem(
            "total_followers",
            response.data.data.total_followers
          );
          localStorage.setItem(
            "total_followings",
            response.data.data.total_followings
          );
          localStorage.setItem(
            "total_live_videos",
            response.data.data.total_live_videos
          );
          history.push("/");
        }
        else {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log("Exception error", error);
        history.push("/");
      });
  };

  async fetchConfig() {
    const response = await fetch(apiConstants.settingsUrl);
    const configValue = await response.json();
    configuration.set({ configData: configValue.data }, { freeze: false });
    this.setState({ configLoading: false });

    $("#google_analytics").html(
      configuration.get("configData.google_analytics")
    );

    $("#header_scripts").html(configuration.get("configData.header_scripts"));

    $("#body_scripts").html(configuration.get("configData.body_scripts"));
  }


  render() {
    const isLoading = this.state.configLoading;
    if (isLoading) {
      return (
        <div className="wrapper">
          <div className="loader-warpper">
            <div id="loader">
              <p>Project setting up</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <Helmet>
          <title>{configuration.get("configData.site_name")}</title>
          <link
            rel="icon"
            type="image/png"
            href={configuration.get("configData.site_icon")}
            sizes="16x16"
          />
          <meta
            name="description"
            content={configuration.get("configData.meta_description")}
          ></meta>
          <meta
            name="keywords"
            content={configuration.get("configData.meta_keywords")}
          ></meta>
          <meta
            name="author"
            content={configuration.get("configData.meta_author")}
          ></meta>
        </Helmet>
        <CookieConsent
          // disableStyles={true}
          location="bottom"
          // buttonClasses="btn btn-primary"
          containerClasses="col-lg-6"
          // contentClasses="text-capitalize"
          buttonText="Okay"
          cookieName="cookiesAccept"
          style={{ background: "#2B373B" }}
          expires={1500}
        >
          The site uses to provide you with a great experience. By using
          {configuration.get("configData.site_name")} , you accept our{" "}
          <a hre="/page/privacy" target="_blank">
            {" "}
            Cookies Policy{" "}
          </a>
        </CookieConsent>
        <ToastProvider>
          <Router history={history}>
            <Switch>
              {/*** Layout 1 - Transparent Fixed Header and Floating Footer ****/}

              <AppRoute
                exact
                path={"/"}
                component={HomeIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                exact
                authentication={this.state.authentication}
                path={"/broadcast"}
                component={BroadcastIndex}
                layout={HomeLayout}
              />

              <PrivateRoute
                authentication={this.state.authentication}
                path={"/subscriptions"}
                component={SubscriptionPlans}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/my-subscription-plans"}
                component={MySubscriptionPlan}
                layout={HomeLayout}
              />

              <PrivateRoute
                authentication={this.state.authentication}
                path={"/view-card-details"}
                component={DisplayCard}
                layout={HomeLayout}
              />
              <AppRoute
                path={"/follower"}
                component={FollowerIndex}
                layout={HomeLayout}
              />
              <AppRoute
                path={"/following"}
                component={FollowingIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/account"}
                component={ProfileIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/settings"}
                component={Settings}
                layout={HomeLayout}
              />

              <AppRoute
                path={"/search"}
                component={SearchIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/redeem"}
                component={RedeemIndex}
                layout={HomeLayout}
              />
              <AppRoute
                path={"/profile/:user_unique_id"}
                component={OtherProfileIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/live-streaming/history/list"}
                component={LiveStreamingListIndex}
                layout={HomeLayout}
              />
              <AppRoute
                path={"/live-streaming/single-view/:title"}
                component={LiveStreamingSingleViewIndex}
                layout={HomeLayout}
              />
              <AppRoute
                path={"/live-tv/view-all"}
                component={LiveTvViewAllIndex}
                layout={HomeLayout}
              />
              <AppRoute
                path={"/live-tv/single-view/:title"}
                component={SinglePageIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/live-tv/list"}
                component={LiveTvListIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/live-tv/create"}
                component={CreateLiveTv}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/live-tv/edit/:title"}
                component={EditLiveTv}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/live-tv/single/:title"}
                component={SingleLiveTvIndex}
                layout={HomeLayout}
              />

              <AppRoute
                path={"/all-notification"}
                component={NotificationIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/live-streaming-history"}
                component={StreamHistoryIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/paid-live-streaming-history"}
                component={PaidStreamIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/vod-history"}
                component={VodHistoryIndex}
                layout={HomeLayout}
              />

              <AppRoute
                path={"/vod/video-list"}
                component={OtherVodViewAllIndex}
                layout={HomeLayout}
              />
              <AppRoute
                path={"/vod/single/:title"}
                component={OtherVodSinglePageIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/vod/list"}
                component={VodListIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/vod/upload"}
                component={UploadVideoIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/vod/edit/:title"}
                component={EditVodVideoIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/vod/single-view/:title"}
                component={ViewSingleVodIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/group/single-view/:id"}
                component={ViewSingleGroupIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/group/view-all"}
                component={ViewGroupsIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/group/create"}
                component={CreateGroupIndex}
                layout={HomeLayout}
              />
              <AppRoute
                path={"/logout"}
                component={Logout}
                layout={HomeLayout}
              />
              <AppRoute
                path={"/page/:title"}
                component={PageIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/invoice"}
                component={InvoiceIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/subscription/invoice"}
                component={SubscriptionInvoiceIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/vod/invoice"}
                component={VodInvoiceIndex}
                layout={HomeLayout}
              />
              <PrivateRoute
                authentication={this.state.authentication}
                path={"/revenue-dashboard"}
                component={RevenueIndex}
                layout={HomeLayout}
              />

              <StripeProvider apiKey="pk_test_VCUxWr4Kc2iJJh95CDRBRWZc">
                <Elements>
                  <PrivateRoute
                    authentication={this.state.authentication}
                    path={"/add-card"}
                    component={AddCard}
                    layout={HomeLayout}
                  />
                </Elements>
              </StripeProvider>
            </Switch>
          </Router>
        </ToastProvider>
      </div>
    );
  }
}

export default App;
