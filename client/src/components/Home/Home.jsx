import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import FilterBar from "../FilterBar/FilterBar.jsx";
import Pokemons from "../Pokemons/Pokemons.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  filteredPokemons,
  getAllPokemons,
  nextPage,
  previousPage,
} from "../../actions/index.js";
import axios from "axios";

function Home() {
  return (
    <div>
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
