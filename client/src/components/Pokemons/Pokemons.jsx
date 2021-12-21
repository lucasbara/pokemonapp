import React, { useEffect, useState } from "react";
import style from "./Pokemons.module.css";
import Pokemon from "../Pokemon/Pokemon.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../img/loading.gif";
import PikachuNotFound from "../../img/pikachusearch.png";
import {
  getAllPokemons,
  getPokemonTypes,
  nextPage,
  previousPage,
  receivePokemons,
} from "../../actions/index.js";

function Pokemons() {
  const dispatch = useDispatch();
  const filteredPokemons1 = useSelector((state) => state.filteredPokemons);
  const currentPage = useSelector((state) => state.currentPage);
  const searchedPokemon = useSelector((state) => state.filteredPokemons);
  useEffect(() => {
    console.log(filteredPokemons1);
    dispatch(getAllPokemons());
    dispatch(getPokemonTypes());
  }, []);
  useEffect(() => {
    dispatch(receivePokemons());
  }, [currentPage]);
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
  if (!filteredPokemons1) {
    return (
      <div className={style.notFoundContainer}>
        <img src={PikachuNotFound} alt="Not Found Pikachu" />
        <h1>Pokemon not found...</h1>
      </div>
    );
  } else if (filteredPokemons1.length) {
    return (
      <div>
        <div className={style.pokemons}>
          {filteredPokemons1.map((p) => (
            <Link to={`pokemon/${p.id}`} style={{ textDecoration: "none" }}>
              <Pokemon
                name={p.name}
                types={p.types}
                image={p.image}
                hp={p.hp}
                attack={p.attack}
                defense={p.defense}
                speed={p.speed}
              />
            </Link>
          ))}
        </div>
        <div className={style.buttons}>
          <button onClick={previousPageBtn}> Previous page </button>
          <button onClick={nextPageBtn}>Next page </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.loadingContainer}>
        <img src={Loading} alt="Loading" />
        <h1 className={style.loadingText}>Loading... please wait</h1>
      </div>
    );
  }
}

export default Pokemons;

/*       {allPokemons.map((p) => (
        <Link to={`pokemon/${p.id}`} style={{ textDecoration: "none" }}>
          <Pokemon
            name={p.name}
            type={p.type}
            image={p.image}
            hp={p.hp}
            attack={p.attack}
            defense={p.defense}
            speed={p.speed}
          />
        </Link>
      ))} */
