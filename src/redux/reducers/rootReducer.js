import covidReducer from "./covidReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  covidData: covidReducer
});

export default rootReducer;
