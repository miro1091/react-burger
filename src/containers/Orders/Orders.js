import React, { Component } from "react";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import { fetchOrders } from "../../store/actions";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    let orders = this.props.orders.map(el => {
      return (
        <Order key={el.id} price={el.price} ingredients={el.ingredients} />
      );
    });

    if (this.props.loading) {
      orders = <Spinner />;
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
