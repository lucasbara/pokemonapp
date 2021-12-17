import React, { useEffect, useState } from "react";
import style from "./Pokemons.module.css";
import Pokemon from "../Pokemon/Pokemon.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  getPokemonTypes,
  receivePokemons,
} from "../../actions/index.js";

function Pokemons() {
  const dispatch = useDispatch();
  const filteredPokemons1 = useSelector((state) => state.filteredPokemons);
  const currentPage = useSelector((state) => state.currentPage);
  const pokemonName = useSelector((state) => state.pokemonByName);
  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getPokemonTypes());
  }, []);
  useEffect(() => {
    dispatch(receivePokemons());
    console.log(currentPage);
  }, [currentPage]);
  if (filteredPokemons1) {
    return (
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
    );
  } else {
    return <h1 className={style.notFound}>Pokemon not found...</h1>;
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
