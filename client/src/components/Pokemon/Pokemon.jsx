import React from "react";
import style from "./Pokemon.module.css";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiCrossedSwords } from "react-icons/gi";
import { BsShieldPlus } from "react-icons/bs";
import { GiQuickSlash } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { getPokemonById } from "../../actions";

function Pokemon({ name, id, type, image, hp, attack, defense, speed }) {
  /*const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(getPokemonById(id));
  };*/
  return (
    <div>
      <div className={style.card}>
        <img src={image} alt={name} className={style.pokemonImg} />
        <p>{type}</p>
        <div className={style.cardGradient}>
          <p className={style.pokemonName}>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;

/*<div className={style.cardStats}>
<div className={style.containerIcon}>
  <MdOutlineHealthAndSafety className={style.icon} />
  <div>
    <p>Health</p>
    {hp}
  </div>
</div>
<div className={style.containerIcon}>
  <GiCrossedSwords className={style.icon} />
  <div>
    <p>Attack</p>
    {attack}
  </div>
</div>
<div className={style.containerIcon}>
  <BsShieldPlus className={style.icon} />
  <div>
    <p>Defense</p>
    {defense}
  </div>
</div>
<div className={style.containerIcon}>
  <GiQuickSlash className={style.icon} />
  <div>
    <p>Speed</p>
    {speed}
  </div>
</div>
</div> */
