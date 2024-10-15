import "./App.css";
import PublicBase from "./pages/Public/PublicBase";
import Home from "./pages/Protected/Home";
import Login from "../src/components/Login";
import { useState } from "react";
import SignUp from "./components/SignUp";
function App() {
  const [pageType, setPageType] = useState("login");
  console.log("PageType", pageType);
  return (
    <div className="App">
      {/* <PublicBase>
        {pageType === "login" ? (
          <Login setPageType={setPageType} />
        ) : (
          <SignUp setPageType={setPageType} />
        )}
      </PublicBase> */}
      <Home />
    </div>
  );
}

export default App;
