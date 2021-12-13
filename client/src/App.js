import React from "react";
import style from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";
import PokemonDepth from "./components/PokemonDepth/PokemonDepth.jsx";

function App() {
  return (
    <React.Fragment>
      <div className={style.app}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route path="pokemon/:id" component={PokemonDepth} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
