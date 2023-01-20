import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getPokemonTypes } from "../../actions/index.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Filters from "../Filters/Filters";
import Sorts from "../Sorts/Sorts";
import Button from "../Button/Button";
import Pokemon from "../Pokemon/Pokemon.jsx";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useMedia } from "react-use";

const Home = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const isMobile = useMedia("(max-width: 768px)");

  const pokemonsPerPage = isMobile ? 4 : 8;
  const indexOfLastPost = currentPage * pokemonsPerPage;
  const indexOfFirstPost = indexOfLastPost - pokemonsPerPage;

  const totalPokemons = useSelector((state) => state.filteredPokemons);

  const totalPages = Math.ceil(totalPokemons.length / pokemonsPerPage);
  const allPokemons = useSelector((state) =>
    state.filteredPokemons
      ? state.filteredPokemons.slice(indexOfFirstPost, indexOfLastPost)
      : false
  );

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getPokemonTypes());
  }, []);

  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };
  if (currentPage > totalPages) previousPage();

  return (
    <div className={styles["pokemons-container"]}>
      {allPokemons.length ? (
        <div className={styles.filters}>
          <Filters />
          <Sorts />
        </div>
      ) : (
        " "
      )}
      <div className={allPokemons.length ? styles.pokemons : styles.loading}>
        {!allPokemons ? (
          <p>Not Found 😥</p>
        ) : allPokemons.length ? (
          allPokemons?.map((p) => (
            <Link to={`pokemon/${p.id}`} style={{ textDecoration: "none" }}>
              <Pokemon info={p} key={p.id} />
            </Link>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
      <div className={styles.buttons}>
        {allPokemons.length ? (
          <>
            <Button onClick={previousPage} className={styles.test}>
              <MdKeyboardArrowLeft />
            </Button>
            <p>
              {currentPage} / {totalPages}
            </p>
            <Button onClick={nextPage}>
              <MdKeyboardArrowRight />
            </Button>{" "}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
