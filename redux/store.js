import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "../redux/reducers/RootReducer";

export const store = createStore(reducers, {}, applyMiddleware());
