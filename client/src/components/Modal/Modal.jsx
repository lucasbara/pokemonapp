import React, { useState } from "react";
import style from "./Modal.module.css";
import GreenTick from "../../img/greentick.png";
import { useSelector } from "react-redux";

function Modal() {
  const isCreated = useSelector((state) => state.addedPokemon);
  if (isCreated) {
    return (
      <div className={style.bigContainer}>
        <div className={style.modalContainer}>
          <img src={GreenTick} alt="Loading" />
          <h2 className={style.modalText}>Your pokemon was created!</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={style.modalContainer}>
          <h1>An error has ocurred</h1>
        </div>
      </div>
    );
  }
}

export default Modal;
