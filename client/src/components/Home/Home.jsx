import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Pokemons from "../Pokemons/Pokemons.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  filteredPokemons,
  getAllPokemons,
  nextPage,
  previousPage,
} from "../../actions/index.js";
import axios from "axios";

function Home() {
  const dispatch = useDispatch();
  const searchedPokemon = useSelector((state) => state.filteredPokemons);
  const nextPageBtn = (e) => {
    e.preventDefault();
    if (searchedPokemon.length === 1) return;
    dispatch(nextPage());
  };
  const previousPageBtn = (e) => {
    e.preventDefault();
    if (searchedPokemon.length === 1) return;
    dispatch(previousPage());
  };
  useEffect(() => {
    console.log(searchedPokemon);
  }, [searchedPokemon]);
  return (
    <div>
      <Header />
      <div className={style.main}>
        <div className={style.min}>
          <Pokemons />
          <div className={style.buttons}>
            <button onClick={previousPageBtn}> Previous page </button>
            <button onClick={nextPageBtn}> Next page </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
