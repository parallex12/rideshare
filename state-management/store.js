import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers";
import { Quikify } from "quikify";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  mainReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);
Quikify.setGlobalDispatch(store.dispatch); // add this line
export default store;
