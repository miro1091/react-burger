import React, { Component } from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

class Auth extends Component {
  state = {
    email: "",
    password: "",
    isSignUp: true
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      this.state.email,
      this.state.password,
      this.state.isSignUp
    );
  };

  onEmailHandler = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordHandler = event => {
    this.setState({ password: event.target.value });
  };

  onSignChange = () => {
    this.setState(prevState => {
      return {
        isSignUp: !prevState.isSignUp
      };
    });
  };

  render() {
    let signMethod = <h4>SignIn</h4>;

    if (this.state.isSignUp) {
      signMethod = <h4>SignUp</h4>;
    }

    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div>
          <form onSubmit={this.onSubmitHandler}>
            {signMethod}
            <input
              onChange={this.onEmailHandler}
              type="email"
              placeholder="email"
              required
            />
            <input
              onChange={this.onPasswordHandler}
              type="password"
              placeholder="password"
              required
            />
            <button>Submit</button>
          </form>
          <button onClick={this.onSignChange}>
            Switch to {this.state.isSignUp ? "SignIn" : "SignUp"}
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
