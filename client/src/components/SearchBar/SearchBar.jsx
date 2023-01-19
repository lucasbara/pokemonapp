import { React, useState } from "react";
import styles from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../actions/index.js";

function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      dispatch(getPokemonByName(search));
      setSearch("");
    }
  };

  return (
    <form className={styles["search-bar"]}>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSubmit}>
        <BiSearch />
      </button>
    </form>
  );
}

export default SearchBar;
