import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
