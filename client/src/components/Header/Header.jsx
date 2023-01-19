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

const Header = () => {
  const dispatch = useDispatch();

  const isMobile = useMedia("(max-width: 768px)");

  const [isOpen, setIsOpen] = useState(false);

  const items = (
    <>
      <SearchBar />
      <Link to="/addpokemon" className={styles["add-pokemon"]}>
        Create a new Pokemon ⚡
      </Link>
    </>
  );

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
              <SearchBar />
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
          <SearchBar />
          <Link to="/addpokemon" className={styles["add-pokemon"]}>
            Create a new Pokemon ⚡
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
