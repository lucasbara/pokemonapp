import React from "react";
import styles from "./Landing.module.css";
import Pikachu from "../../img/pikachu.png";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";

const Landing = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Gotta Catch 'Em All!</h1>
          <p>
            All the Pokémon data you'll ever need in one place, easily
            accessible through a modern webpage.
          </p>
          <Link to="/home">
            <Button>See Pokemons</Button>
          </Link>
        </div>
        <img src={Pikachu} alt="Charizard" />
      </div>
    </Layout>
  );
};

export default Landing;
