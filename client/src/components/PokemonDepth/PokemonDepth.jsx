import React, { useEffect } from "react";
import style from "../Pokemon/Pokemon.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiCrossedSwords } from "react-icons/gi";
import { BsShieldPlus } from "react-icons/bs";
import { GiQuickSlash } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../actions";

function Pokemon({ name, type, image, hp, attack, defense, speed }) {
  const dispatch = useDispatch();
  const pokemonByID = useSelector((state) => state.pokemonById);
  let { id } = useParams();
  useEffect(() => {
    dispatch(getPokemonById(id));
  });
  if (pokemonByID === null) {
    return (
      <div>
        <h1>Pokemon not found</h1>
      </div>
    );
  } else if (pokemonByID === undefined) {
    return (
      <div>
        <h1>Loading...please wait</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div className={style.card}>
          <img
            src={pokemonByID.image}
            alt={pokemonByID.name}
            className={style.pokemonImg}
          />
          <p>{type}</p>
          <div className={style.cardGradient}>
            <p className={style.pokemonName}>{pokemonByID.name}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Pokemon;
