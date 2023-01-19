import React, { useEffect, useState } from "react";
import styles from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonTypes,
  filterByType,
  filterByCreator,
  clearState,
} from "../../actions/index.js";
import { BsFilter } from "react-icons/bs";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const Filters = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonTypes);
  const [isOpen, setIsOpen] = useState(false);
  const [selectType, setSelectType] = useState("");
  const [selectCreator, setSelectCreator] = useState("");

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, []);

  const filterType = (e) => {
    setSelectType(e.target.value);
    if (e.target.value === "type") return dispatch(clearState());
    dispatch(filterByType(e.target.value));
  };

  const filterCreator = (e) => {
    setSelectCreator(e.target.value);
    if (e.target.value === "all") return dispatch(clearState());
    dispatch(filterByCreator(e.target.value));
  };

  const clearAllFilters = () => {
    setSelectType("");
    setSelectCreator("");
    dispatch(clearState());
  };

  return (
    <div className={styles["filters-container"]}>
      <Button onClick={() => setIsOpen(!isOpen)}>
        Filters
        <BsFilter />
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
            <select onChange={filterType} value={selectType}>
              <option value="type">Type</option>
              {types
                ?.sort((a, b) => {
                  if (a.name < b.name) return -1;
                  if (a.name > b.name) return 1;
                  else return 0;
                })
                .map((type) => {
                  return (
                    <option value={type.name} key={type.id}>
                      {type.name[0].toUpperCase() + type.name.slice(1)}
                    </option>
                  );
                })}
            </select>
            <select onChange={filterCreator} value={selectCreator}>
              <option>Source</option>
              <option value="all">All</option>
              <option value="false">Api</option>
              <option value="true">Db</option>
            </select>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Filters;
