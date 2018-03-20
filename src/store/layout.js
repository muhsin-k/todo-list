// action types
export const types = {
  HIDE_HEADER_FOOTER: 'LAYOUT/HIDE_HEADER_FOOTER',
  SHOW_HEADER_FOOTER: 'LAYOUT/SHOW_HEADER_FOOTER',
};

// initial state
export const initialState = {
  header: true,
  footer: true,
};

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.HIDE_HEADER_FOOTER:
      return { ...state, header: false, footer: false };

    case types.SHOW_HEADER_FOOTER:
      return { ...state, header: true, footer: true };

    default:
      return state;
  }
};

// action creators
export const actions = {
  hideHeaderFooter: () => ({ type: types.HIDE_HEADER_FOOTER }),
  showHeaderFooter: () => ({ type: types.SHOW_HEADER_FOOTER }),
};
