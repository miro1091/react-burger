import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "../../containers/Checkout/ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
  onCheckoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  onCheckoutCancelled = () => {
    this.props.history.goBack();
  };

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            onCheckoutCancelled={this.onCheckoutCancelled}
            onCheckoutContinued={this.onCheckoutContinued}
            ingredients={this.props.ings}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }

    return <div>{summary}</div>;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
