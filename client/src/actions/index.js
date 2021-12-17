import axios from "axios";

export function getAllPokemons(name = "") {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/pokemons?name=${name}`
      );
      dispatch({ type: "GET_ALL_POKEMONS", payload: response.data });
      dispatch(receivePokemons(9));
    } catch (error) {
      console.log(error);
    }
  };
}

export function receivePokemons(amount = 12) {
  return {
    type: "RECEIVE_POKEMONS",
    payload: amount,
  };
}

export function nextPage() {
  return {
    type: "NEXT_PAGE",
  };
}

export function previousPage() {
  return {
    type: "PREVIOUS_PAGE",
  };
}

export function clearState() {
  return {
    type: "CLEAR_STATE",
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

export function getPokemonTypes() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/types");
      dispatch({ type: "GET_POKEMON_TYPES", payload: response.data });
    } catch (error) {
      console.log("Get pokemon types:", error);
    }
  };
}
