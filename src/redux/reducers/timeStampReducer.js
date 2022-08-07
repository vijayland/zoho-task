import {  FETCH_TIMESTAMP_SUCCESS } from "../actions/covidActions";

const initState = [];

const timeStampReducer = (state = initState, action) => {
 if (action.type === FETCH_TIMESTAMP_SUCCESS) {
    state = action.payload;
    return state;
  }
  return state;
};

export default timeStampReducer;
