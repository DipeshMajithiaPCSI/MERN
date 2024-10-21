import { USER_DETAILS } from "../actions/ActionCreators";

const initialState = {
  user_details: null,
};

export function allData(state = initialState, action) {
  switch (action.type) {
    case USER_DETAILS:
      return { ...state, user_details: action.payload };
    default:
      return state;
    // break;
  }
}
