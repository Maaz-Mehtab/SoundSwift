import React, { Component } from "react";
import {
  injectStripe,
  CardElement,
  Elements,
  StripeProvider,
} from "react-stripe-elements";
import api from "../../Environment";
import ToastContent from "../helper/ToastContent";
import { withToastManager } from "react-toast-notifications";

class AddCardSec extends Component {
  state = {
    addCardLoadingContent: null,
    addCardButtonDisable: false,
  };

  addCard = (ev) => {
    ev.preventDefault();
    this.setState({
      addCardLoadingContent: "Please wait... Request processing...",
      addCardButtonDisable: true,
    });
    if (this.props.stripe) {
      this.props.stripe
        .createToken({ type: "card", name: localStorage.getItem("username") })
        .then((payload) => {
          const inputData = {
            card_token: payload.token.id,
          };
          api
            .postMethod("cards_add", inputData)
            .then((response) => {
              if (response.data.success) {
                ToastContent(
                  this.props.toastManager,
                  response.data.message +
                    "Click on Pay Now button to make the Payment.",
                  "success"
                );
                this.setState({
                  addCardLoadingContent: null,
                  addCardButtonDisable: false,
                });
                this.props.cardAddedStatusChange();
              } else {
                ToastContent(
                  this.props.toastManager,
                  response.data.error,
                  "error"
                );
              }
            })
            .catch((error) => {
              this.setState({
                addCardLoadingContent: null,
                addCardButtonDisable: false,
              });
              ToastContent(this.props.toastManager, error, "error");
            });
        })
        .catch((error) => {
          this.setState({
            addCardLoadingContent: null,
            addCardButtonDisable: false,
          });
          ToastContent(
            this.props.toastManager,
            "Please check your card details and try again..",
            "error"
          );
        });
    } else {
      this.setState({
        addCardLoadingContent: null,
        addCardButtonDisable: false,
      });
      ToastContent(
        this.props.toastManager,
        "Stripe is not configured",
        "error"
      );
    }
  };
  render() {
    const { addCardLoadingContent, addCardButtonDisable } = this.state;
    return (
      <div class="modal-body sm-padding">
        <h4 class="title">Add Card</h4>

        <div class="form-group">
          <CardElement />
        </div>

        <div class="form-group">
          <button
            className="btn btn-group"
            type="submit"
            onClick={this.addCard}
            disabled={addCardButtonDisable}
          >
            {addCardLoadingContent != null ? addCardLoadingContent : "Submit"}
          </button>
        </div>
      </div>
    );
  }
}

export default injectStripe(withToastManager(AddCardSec));
