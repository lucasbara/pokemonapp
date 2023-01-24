import axios from "axios";

// Get

export const getAllPokemons = () => {
  return async (dispatch) => {
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

export const getPokemonTypes = () => {
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

export const getPokemonByName = (payload) => {
  return {
    type: "GET_POKEMON_BY_NAME",
    payload: payload,
  };
}

export const getPokemonById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/pokemons/${id}`
      );
      dispatch({ type: "GET_POKEMON_BY_ID", payload: response.data });
    } catch (err) {
      dispatch({ type: "GET_POKEMON_BY_ID", payload: null });
      throw err;
    }
  };
}

// Clear

export const clearPokemonById = () => {
  return {
    type: "CLEAR_POKEMON_BY_ID",
  };
}

export const clearState = () => {
  return {
    type: "CLEAR_STATE",
  };
}

// Post

export const addPokemon = (pokemon) => {
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

export const filterByType(type) => {
  return {
    type: "FILTER_BY_TYPE",
    payload: type,
  };
}

export const filterByCreator = (payload) => {
  return {
    type: "FILTER_BY_CREATOR",
    payload: payload,
  };
};

// Order

export const orderPokemon = (type) => {
  if (type === "asc") {
    return {
      type: "ORDER_ASCENDING",
    };
  } else if (type === "desc") {
    return {
      type: "ORDER_DESCENDING",
    };
  } else if (type === "less") {
    return {
      type: "ORDER_ATTACK_DESCENDING",
    };
  } else if (type === "more") {
    return {
      type: "ORDER_ATTACK_ASCENDING",
    };
  }
};
