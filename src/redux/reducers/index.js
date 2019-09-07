import { combineReducers } from "redux";
import active from "./pageReducer";

const rootReducer = combineReducers({
  active
});

export default rootReducer;
