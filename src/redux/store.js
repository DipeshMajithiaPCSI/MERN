import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reducers from "../redux/reducers/RootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = createStore(reducers, {}, applyMiddleware());

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
