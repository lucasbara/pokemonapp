import React, { useEffect } from "react";
import style from "./FilterBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonTypes } from "../../actions/index.js";

function FilterBar() {
  const types = useSelector((state) => state.pokemonTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, []);

  return (
    <div className={style.bigContainer}>
      <div className={style.container}>
        <div className={style.filters}>
          <p>Filter by</p>
          <select>
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
          <select>
            <option>Source</option>
            <option>All</option>
            <option>Api</option>
            <option>Db</option>
          </select>
        </div>
        <div className={style.filters}>
          <p>Order by</p>
          <select>
            <option>Alphabetical</option>
            <option>Ascending</option>
            <option>Descending</option>
          </select>
          <select>
            <option>Attack</option>
            <option>Less (-)</option>
            <option>More (+)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
