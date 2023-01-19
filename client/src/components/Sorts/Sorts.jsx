import React, { useEffect, useState } from "react";
import styles from "./Sorts.module.css";
import { useDispatch } from "react-redux";
import {
  getPokemonTypes,
  orderPokemon,
  clearState,
} from "../../actions/index.js";
import { BiSort } from "react-icons/bi";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const Sorts = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectOrder, setSelectOrder] = useState("");

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, []);

  const order = (e) => {
    setSelectOrder(e.target.value);
    if (e.target.value === "alph" || e.target.value === "attack") return;
    dispatch(orderPokemon(e.target.value));
  };

  const clearAllFilters = () => {
    setSelectOrder("");
    dispatch(clearState());
  };

  return (
    <div className={styles["sorts-container"]}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        Sort
        <BiSort />
      </Button>
      {isOpen && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          exit={{ y: -100, opacity: 0 }}
          className={styles.modal}
        >
          <div className={styles.filters}>
            <select onChange={order} value={selectOrder}>
              <option value="alph">Alphabetical</option>
              <option value="asc">Ascending (A-Z)</option>
              <option value="desc">Descending (Z-A)</option>
            </select>
            <select onChange={order} value={selectOrder}>
              <option value="attack">Attack</option>
              <option value="less">Less (-)</option>
              <option value="more">More (+)</option>
            </select>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Sorts;
