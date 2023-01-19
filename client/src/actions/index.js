import axios from "axios";

// Get

export function getAllPokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/pokemons`
      );
      dispatch({ type: "GET_ALL_POKEMONS", payload: response.data });
    } catch (err) {
      throw err;
    }
  };
}

export function getPokemonTypes() {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/types`
      );
      dispatch({ type: "GET_POKEMON_TYPES", payload: response.data });
    } catch (err) {
      throw err;
    }
  };
}

export function getPokemonByName(payload) {
  return {
    type: "GET_POKEMON_BY_NAME",
    payload: payload,
  };
}

export function getPokemonById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/pokemons/${id}`
      );
      dispatch({ type: "GET_POKEMON_BY_ID", payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_POKEMON_BY_ID", payload: null });
    }
  };
}

// Clear

export function clearPokemonById() {
  return {
    type: "CLEAR_POKEMON_BY_ID",
  };
}

export function clearState() {
  return {
    type: "CLEAR_STATE",
  };
}

// Post

export function addPokemon(pokemon) {
  return async function (dispatch) {
    try {
      dispatch({ type: "ADD_POKEMON", payload: true });
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/pokemons`,
        pokemon
      );
    } catch (error) {
      dispatch({ type: "ADD_POKEMON", payload: false });
    }
  };
}

// Filter

export function filterByType(type) {
  console.log(type);
  return {
    type: "FILTER_BY_TYPE",
    payload: type,
  };
}

export function filterByCreator(payload) {
  return {
    type: "FILTER_BY_CREATOR",
    payload: payload,
  };
}

// Order

export function orderPokemon(type) {
  console.log(type);
  if (type === "asc") {
    return {
      type: "ORDER_ASCENDING",
    };
  }
  if (type === "desc") {
    return {
      type: "ORDER_DESCENDING",
    };
  }
  if (type === "less") {
    return {
      type: "ORDER_ATTACK_DESCENDING",
    };
  }
  if (type === "more") {
    return {
      type: "ORDER_ATTACK_ASCENDING",
    };
  }
}
