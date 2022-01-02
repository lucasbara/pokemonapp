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
  clearState,
} from "../../actions/index.js";
import FilterBar from "../FilterBar/FilterBar.jsx";

function Pokemons() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(9);
  const indexOfLastPost = currentPage * pokemonsPerPage;
  const indexOfFirstPost = indexOfLastPost - pokemonsPerPage;
  const totalPokemons = useSelector((state) => state.filteredPokemons);
  const totalPages = Math.ceil(totalPokemons.length / pokemonsPerPage);
  const showPokemons = useSelector((state) =>
    state.filteredPokemons
      ? state.filteredPokemons.slice(indexOfFirstPost, indexOfLastPost)
      : false
  );

  // Bring pokemons from API

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getPokemonTypes());
  }, []);

  // Pagination

  useEffect(() => {
    if (currentPage === 1) {
      setPokemonsPerPage(9);
    } else {
      setPokemonsPerPage(12);
    }

    console.log("Current", currentPage);
    console.log("Total", totalPages);
  }, [currentPage]);

  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (currentPage > totalPages) previousPage();

  // Clear State for Go Back button

  const clearHome = () => {
    dispatch(clearState());
  };

  if (!showPokemons) {
    return (
      <div className={style.notFoundContainer}>
        <img src={PikachuNotFound} alt="Not Found Pikachu" />
        <h1>Nothing was found...</h1>
        <div className={style.goBack}>
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <a onClick={clearHome}>Go Back</a>
          </Link>
        </div>
      </div>
    );
  } else if (showPokemons.length) {
    return (
      <div>
        <FilterBar />
        <div className={style.pokemons}>
          {showPokemons &&
            showPokemons.map((p) => (
              <Link to={`pokemon/${p.id}`} style={{ textDecoration: "none" }}>
                <Pokemon
                  name={p.name}
                  types={p.types}
                  image={p.image}
                  hp={p.hp}
                  attack={p.attack}
                  defense={p.defense}
                  speed={p.speed}
                  key={p.id}
                />
              </Link>
            ))}
        </div>
        <div className={style.buttons}>
          <button onClick={previousPage}> Previous page </button>
          <button onClick={nextPage}>Next page </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.loadingContainer}>
        <img src={Loading} alt="Loading" />
        <h1>Loading... please wait</h1>
      </div>
    );
  }
}

export default Pokemons;
