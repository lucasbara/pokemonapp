import React from "react";
import style from "./Pokemon.module.css";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiCrossedSwords } from "react-icons/gi";
import { BsShieldPlus } from "react-icons/bs";
import { GiQuickSlash } from "react-icons/gi";

function Pokemon({ name, type, image, hp, attack, defense, speed }) {
  return (
    <div>
      <div className={style.card}>
        <h2>{name}</h2>
        <p>{type}</p>
        <img src={image} alt={name} />
        <div className={style.cardStats}>
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
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
