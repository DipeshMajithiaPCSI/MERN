import { Provider } from "react-redux";
import "./App.css";
import NavRoutes from "./navigation/NavRoutes";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
function App() {

// below code is used to whenever the page is refresh then it scroll to top postition
  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
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
