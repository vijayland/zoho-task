import covidReducer from "./covidReducer";
import { combineReducers } from "redux";
import timeStampReducer from "./timeStampReducer";

const rootReducer = combineReducers({
  covidData: covidReducer,
  timeSeriesData: timeStampReducer
});

export default rootReducer;
