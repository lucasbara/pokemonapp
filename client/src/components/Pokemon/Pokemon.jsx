import React from "react";
import style from "./Pokemon.module.css";
import { typeColors } from "../../lib/utils";

const Pokemon = ({ info }) => {
  return (
    <div className={style.card}>
      <div
        className={style["card-header"]}
        style={{ backgroundColor: typeColors[info.types[0]["name"]] }}
      >
        <img src={info.image} alt={info.name} />
      </div>
      <div className={style.bottom}>
        <p className={style.name}>{info.name}</p>
        <div className={style.types}>
          {info.types?.map((type) => (
            <p key={type.id}>{type.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
