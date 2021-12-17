import React, { useEffect } from "react";
import style from "./PokemonDepth.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiCrossedSwords } from "react-icons/gi";
import { BsShieldPlus } from "react-icons/bs";
import { GiQuickSlash } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../../actions";

function PokemonDepth({ name, types, image, hp, attack, defense, speed }) {
  const dispatch = useDispatch();
  const pokemonByID = useSelector((state) => state.pokemonById);
  let { id } = useParams();
  useEffect(() => {
    dispatch(getPokemonById(id));
    console.log("pokemon", pokemonByID);
  }, []);
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
      <div className={style.bigContainer}>
        <Header />
        <div className={style.container}>
          <div className={style.card}>
            <div className={style.upper}>
              <div>
                <img
                  src={pokemonByID.image}
                  alt={pokemonByID.name}
                  className={style.pokemonImg}
                />
              </div>
              <div className={style.stats}>
                <h4>Hp</h4>
                <p>{pokemonByID.hp}</p>
                <h4>Speed</h4>
                <p>{pokemonByID.speed}</p>
                <h4>Attack</h4>
                <p>{pokemonByID.attack}</p>
                <h4>Defense</h4>
                <p>{pokemonByID.defense}</p>
                <h4>Height</h4>
                <p>{pokemonByID.height}</p>
                <h4>Weight</h4>
                <p>{pokemonByID.weight}</p>
              </div>
            </div>
            <div className={style.cardGradient}>
              <p className={style.pokemonName}>{pokemonByID.name}</p>
              <div className={style.types}>
                {pokemonByID.types &&
                  pokemonByID.types.map((type) => <p>{type}</p>)}
              </div>
            </div>
          </div>
        </div>
        <div className={style.empty}></div>
        <Footer />
      </div>
    );
  }
}

export default PokemonDepth;

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
