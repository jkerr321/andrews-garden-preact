import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Home from "./routes/home";

const App = () => {
  return (
    <div id="app">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
