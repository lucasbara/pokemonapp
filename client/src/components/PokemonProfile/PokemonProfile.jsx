import React, { useEffect } from "react";
import styles from "./PokemonProfile.module.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, clearPokemonById } from "../../actions";
import { typeColors } from "../../lib/utils";

const PokemonProfile = ({ allTypes, children, pokemon }) => {
  const dispatch = useDispatch();

  const searchedPokemon = useSelector((state) => state.pokemonById);

  const { id } = useParams();

  const {
    name,
    image,
    types,
    type1,
    type2,
    height,
    weight,
    hp,
    attack,
    defense,
    speed,
  } = pokemon ? pokemon : searchedPokemon;

  useEffect(() => {
    if (pokemon) return;

    dispatch(getPokemonById(id));
    dispatch(clearPokemonById());
  }, []);

  const pokemonType1 = allTypes?.find((t) => t.id === Number(type1)).name;
  const pokemonType2 = allTypes?.find((t) => t.id === Number(type2)).name;

  console.log(types, type1, type2, typeColors?.[types?.[0]["name"]]);

  return searchedPokemon.length === 0 && !pokemon ? (
    <div className={styles.loading}>
      <LoadingSpinner />
    </div>
  ) : (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div className={styles.types}>
        {pokemon ? (
          <>
            <p>{pokemonType1}</p>
            <p>{pokemonType2}</p>
          </>
        ) : (
          types?.map((type) => <p key={type.id}>{type.name}</p>)
        )}
      </div>
      <div className={styles.card}>
        <div
          className={styles["card-header"]}
          style={{
            background: pokemon
              ? typeColors[pokemonType1]
              : typeColors?.[types?.[0]["name"]],
          }}
        >
          <img src={image} alt={name} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.stats}>
            <p>Attack</p>
            <meter low={1} min={1} max={100} high={100} value={attack}></meter>
          </div>
          <div className={styles.stats}>
            <p>Defense</p>
            <meter
              low={1}
              min={1}
              max={100}
              high={100}
              optimum={100}
              value={defense}
            ></meter>
          </div>
          <div className={styles.stats}>
            <p>Health</p>
            <meter
              low={1}
              min={1}
              max={100}
              high={100}
              optimum={100}
              value={hp}
            ></meter>
          </div>
          <div className={styles.stats}>
            <p>Height</p>
            <meter
              low={1}
              min={1}
              max={20}
              high={20}
              optimum={10}
              value={height}
            ></meter>
          </div>
          <div className={styles.stats}>
            <p>Speed</p>
            <meter
              low={1}
              min={1}
              max={100}
              high={100}
              optimum={100}
              value={speed}
            ></meter>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PokemonProfile;
