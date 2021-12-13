import React, { useEffect, useState } from "react";
import style from "./Pokemons.module.css";
import Pokemon from "../Pokemon/Pokemon.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../actions/index.js";
import axios from "axios";

function Pokemons() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);
  console.log(allPokemons);
  return (
    <div className={style.pokemons}>
      {allPokemons.map((p) => (
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
