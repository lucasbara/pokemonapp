import React, { useEffect, useState } from "react";
import style from "./Pokemons.module.css";
import Pokemon from "../Pokemon/Pokemon.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemons,
  nextPage,
  filteredPokemons,
} from "../../actions/index.js";
import axios from "axios";

function Pokemons() {
  const dispatch = useDispatch();
  const filteredPokemons1 = useSelector((state) => state.filteredPokemons);
  const currentPage = useSelector((state) => state.currentPage);
  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);
  useEffect(() => {
    dispatch(filteredPokemons(12));
  }, [currentPage]);
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
