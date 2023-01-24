import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../img/logo-black.png";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState } from "../../actions/index.js";
import { useMedia } from "react-use";
import Button from "../Button/Button";
import { MdClose, MdMenu } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const isMobile = useMedia("(max-width: 768px)");

  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  return (
    <header className={styles["header-container"]}>
      <Link to="/">
        <img
          src={Logo}
          alt="Pokémon Logo"
          onClick={() => dispatch(clearState())}
        />
      </Link>
      {isMobile ? (
        <>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            style={{ fontSize: "16px !important", marginRight: "20px" }}
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </Button>
          {isOpen && (
            <div className={styles["header-mobile"]}>
              {location.pathname === "/home" && <SearchBar />}
              <Link
                to="/addpokemon"
                className={styles["add-pokemon"]}
                onClick={() => setIsOpen(!isOpen)}
              >
                Create a new Pokemon ⚡
              </Link>
            </div>
          )}
        </>
      ) : (
        <>
          {location.pathname === "/home" && <SearchBar />}
          <Link to="/addpokemon" className={styles["add-pokemon"]}>
            Create a new Pokemon ⚡
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
