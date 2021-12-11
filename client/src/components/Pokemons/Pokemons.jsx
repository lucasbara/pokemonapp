import React, { useEffect, useState } from "react";
import style from "./Pokemons.module.css";
import Pokemon from "../Pokemon/Pokemon.jsx";
import axios from "axios";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function testAPI() {
      const response = await axios.get("http://localhost:3001/pokemons");
      const finalResponse = response.data.filter((p) => p.id < 10);
      setPokemons([...finalResponse]);
    }

    testAPI();
  }, []);
  return (
    <div className={style.pokemons}>
      {pokemons.map((p) => (
        <Pokemon
          name={p.name}
          type={p.type}
          image={p.image}
          hp={p.hp}
          attack={p.attack}
          defense={p.defense}
          speed={p.speed}
        />
      ))}
    </div>
  );
}

export default Pokemons;
