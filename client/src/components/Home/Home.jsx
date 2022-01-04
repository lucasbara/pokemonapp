import React from "react";
import style from "./Home.module.css";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Pokemons from "../Pokemons/Pokemons.jsx";

function Home() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.main}>
        <div className={style.min}>
          <Pokemons />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
