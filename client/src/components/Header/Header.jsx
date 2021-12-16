import React from "react";
import style from "./Header.module.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import {
  getAllPokemons,
  nextPage,
  receivePokemons,
} from "../../actions/index.js";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const goBackHome = function () {
    dispatch(getAllPokemons());
  };
  return (
    <div>
      <div className={style.header}>
        <Link to="/home">
          <img
            src={Logo}
            alt="Pokémon Logo"
            className={style.logo}
            onClick={goBackHome}
          />
        </Link>
        <SearchBar className={style.searchBar} />
        <ul>
          <Link style={{ textDecoration: "none", color: "black" }}>
            <a>Add Pokemon (+)</a>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
