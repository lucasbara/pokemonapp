import React from "react";
import style from "./Header.module.css";
import Logo from "../../img/logo.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState } from "../../actions/index.js";

function Header() {
  const dispatch = useDispatch();

  const goBackHome = () => {
    dispatch(clearState());
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
          <Link
            to="/addpokemon"
            style={{ textDecoration: "none", color: "black" }}
          >
            <a>Add Pokemon (+)</a>
          </Link>
        </ul>
      </div>
      <div className={style.line}></div>
    </div>
  );
}

export default Header;
