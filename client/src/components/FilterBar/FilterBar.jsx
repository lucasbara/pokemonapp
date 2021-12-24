import React, { useEffect } from "react";
import style from "./FilterBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonTypes,
  orderPokemon,
  filterByType,
  filterByCreator,
  clearState,
} from "../../actions/index.js";

function FilterBar() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonTypes);
  const pokemons = useSelector((state) => state.filteredPokemons);

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, []);

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  function order(e) {
    dispatch(orderPokemon(e.target.value));
  }

  function filterType(e) {
    dispatch(filterByType(e.target.value));
  }

  function filterCreator(e) {
    if (e.target.value === "all") return;
    dispatch(filterByCreator(e.target.value));
  }

  function clearAllFilters() {
    dispatch(clearState());
  }

  return (
    <div className={style.bigContainer}>
      <div className={style.container}>
        <div className={style.filters}>
          <p>Filter by</p>
          <select onChange={filterType}>
            <option>Type</option>
            {types &&
              types.map((type) => {
                return (
                  <option value={type.name} key={type.id}>
                    {type.name}
                  </option>
                );
              })}
          </select>
          <select onChange={filterCreator}>
            <option>Source</option>
            <option value="all">All</option>
            <option value="false">Api</option>
            <option value="true">Db</option>
          </select>
        </div>
        <div className={style.filters}>
          <p>Order by</p>
          <select onChange={order}>
            <option>Alphabetical</option>
            <option value="asc">Ascending (A-Z)</option>
            <option value="desc">Descending (Z-A)</option>
          </select>
          <select onChange={order}>
            <option>Attack</option>
            <option value="less">Less (-)</option>
            <option value="more">More (+)</option>
          </select>
        </div>
        <p className={style.clearFilters} onClick={clearAllFilters}>
          Clear filters
        </p>
      </div>
    </div>
  );
}

export default FilterBar;
