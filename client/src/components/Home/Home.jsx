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
  const currentPage = useSelector((state) => state.currentPage);
  const nextPageBtn = (e) => {
    e.preventDefault();
    if (searchedPokemon.length === 1) return;
    dispatch(nextPage());
    if (currentPage < 36) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const previousPageBtn = (e) => {
    e.preventDefault();
    if (searchedPokemon.length === 1) return;
    dispatch(previousPage());
    if (currentPage !== 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      <div className={style.main}>
        <div className={style.min}>
          <Pokemons />
          <div className={style.buttons}>
            <button onClick={previousPageBtn}> Previous page </button>
            <button onClick={nextPageBtn}>Next page </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
