import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { reducer as toastrReducer } from 'react-redux-toastr';

import authUser from './authUser';
import layout from './layout';

const rootReducer = combineReducers({
  toastr: toastrReducer,
  loadingBar: loadingBarReducer,
  authUser,
  layout,
});

export default rootReducer;
