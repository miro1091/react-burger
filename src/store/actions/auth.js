import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = data => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: {
      userId: data.localId,
      token: data.idToken
    }
  };
};

export const authError = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: {
      error: error
    }
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkLogTimeout = timeout => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, timeout * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    let url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDU8XcWy6fPlYtrhvFmCMSWJOnrUht_Kn0";
    if (!isSignUp) {
      url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDU8XcWy6fPlYtrhvFmCMSWJOnrUht_Kn0";
    }

    axios
      .post(url, authData)
      .then(res => {
        console.log(res);
        dispatch(authSuccess(res.data));
        dispatch(checkLogTimeout(res.data.expiresIn));
      })
      .catch(err => {
        console.log(err);
        dispatch(authError(err));
      });
  };
};
