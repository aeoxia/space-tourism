import { legacy_createStore, applyMiddleware } from "redux";
import appReducer from "./appReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(appReducer, applyMiddleware(thunk));

export default store;
