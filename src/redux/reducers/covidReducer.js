import { FETCH_COVID_SUCCESS } from "../actions/covidActions";

const initState = [];

const covidReducer = (state = initState, action) => {
  if (action.type === FETCH_COVID_SUCCESS) {
    state = action.payload;
    return state;
  }
  return state;
};

export default covidReducer;
