import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
//import movieActions from "./products/duck/actions";
const store = createStore(rootReducer, composeWithDevTools());

//store.dispatch(movieActions.add("wspanaile stulecie"));

export default store;
