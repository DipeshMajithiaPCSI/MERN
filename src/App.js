import { Provider } from "react-redux";
import "./App.css";
import NavRoutes from "./navigation/NavRoutes";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavRoutes />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
