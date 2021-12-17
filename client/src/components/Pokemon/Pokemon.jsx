import React from "react";
import style from "./Pokemon.module.css";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiCrossedSwords } from "react-icons/gi";
import { BsShieldPlus } from "react-icons/bs";
import { GiQuickSlash } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { getPokemonById } from "../../actions";

function Pokemon({ name, id, types, image, hp, attack, defense, speed }) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(getPokemonById(id));
  };
  return (
    <div>
      <div className={style.card}>
        <img src={image} alt={name} className={style.pokemonImg} />
        <div className={style.cardGradient}>
          <p className={style.pokemonName}>{name}</p>
          <div className={style.types}>
            {types.map((type) => (
              <p>{type}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
