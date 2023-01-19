import React from "react";
import styles from "./Landing.module.css";
import Pikachu from "../../img/pikachu.png";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <Layout>
      <motion.div className={styles.container}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className={styles.text}
        >
          <h1>Gotta Catch 'Em All!</h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            All the Pokémon data you'll ever need in one place, easily
            accessible through a modern webpage.
          </motion.p>
          <Link to="/home">
            <Button>See Pokemons</Button>
          </Link>
        </motion.div>
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          src={Pikachu}
          alt="Charizard"
        />
      </motion.div>
    </Layout>
  );
};

export default Landing;
