import React from "react";
import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import PokemonProfile from "./components/PokemonProfile/PokemonProfile.jsx";
import AddPokemon from "./components/AddPokemon/AddPokemon.jsx";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className={styles.App}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/pokemon/:id">
          <Layout>
            <PokemonProfile />
          </Layout>
        </Route>
        <Route path="/addpokemon">
          <Layout>
            <AddPokemon />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
