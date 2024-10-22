import { USER_DETAILS } from "../actions/ActionCreators";
import { COURSE_DETAILS } from "../actions/ActionCreators";

const initialState = {
  user_details:null,
  course_details:null,
};

export function allData(state = initialState, action) {
  switch (action.type) {
    case USER_DETAILS:
      return { ...state, user_details: action.payload };
    case COURSE_DETAILS:
      return{...state,course_details: action.payload};
    default:
      return state;
    // break;
  }
}
