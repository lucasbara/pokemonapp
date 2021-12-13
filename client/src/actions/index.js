import axios from "axios";

export function getAllPokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/pokemons");
      dispatch({ type: "GET_ALL_POKEMONS", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPokemonByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/pokemons?name=${name}`
      );
      dispatch({ type: "GET_POKEMON_BY_NAME", payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_POKEMON_BY_NAME", payload: null });
    }
  };
}

export function getPokemonById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
      dispatch({ type: "GET_POKEMON_BY_ID", payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_POKEMON_BY_ID", payload: null });
    }
  };
}
