import React from "react";
import style from "./Header.module.css";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";

function Header() {
  return (
    <div>
      <div className={style.header}>
        <Link to="/home">
          <img src={Logo} alt="Pokémon Logo" className={style.logo} />
        </Link>
        <SearchBar />
        <ul>
          <a>Add Pokemon</a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
