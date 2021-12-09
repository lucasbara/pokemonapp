import React from "react";
import Logo from "../../img/logo.png";
import Charizard from "../../img/charizard.png";
import Landing1 from "../../img/landing1.jpg";
import Landing2 from "../../img/landing2.jpg";
import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <div>
      <div className={style.header}>
        <img src={Logo} alt="Pokémon Logo" className={style.logo} />
        <Link to="/home">
          <button>Launch App</button>
        </Link>
      </div>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.mainText}>
            <h1>Gotta Catch 'Em All!</h1>
            <p>
              All the Pokémon data you'll ever need in one place, easily
              accessible through a modern webpage.
            </p>
            <Link to="/home">
              <button>Enter the Pokeworld</button>
            </Link>
          </div>
          <img src={Charizard} alt="Charizard" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

/*
        <div className={style.mainBottom}>
          <img src={Landing1} alt="Pokemon Go" />
          <img src={Landing2} alt="Ash and Pikachu" />
        </div>
        */

export default Landing;
