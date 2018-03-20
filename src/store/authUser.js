import * as UserApi from '../api/userApi';

// action types
export const types = {
  AUTO_LOGIN: 'AUTH/AUTH_AUTO_LOGIN',
  SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGOUT: 'AUTH/LOGOUT',
};

// initial state
const initialState = {
  isLoading: false,
  user: null,
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return { ...state, isLoading: false, user: action.user };

    case types.LOGOUT:
      return { ...state, user: null };

    default:
      return state;
  }
};

// action creators & async actions
export const actions = {
  login: (credentials) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    const promise = UserApi.loginUser(credentials);
    promise.then(
      (user) => dispatch({ type: types.LOGIN_SUCCESS, user }),
      () => {
        /* toast the error messages */
      }
    );
    return promise;
  },

  logout: () => (dispatch) =>
    UserApi.logoutUser().then(() => dispatch({ type: types.LOGOUT })),
};
