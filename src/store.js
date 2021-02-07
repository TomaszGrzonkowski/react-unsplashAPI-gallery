import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import searchedDataReducer from "./reducers/searchedDataReducer";

const store = createStore(
  combineReducers({ data: searchedDataReducer }),
  applyMiddleware(thunk)
);

export default store;
