const initialState = {
  allPokemons: [],
  pokemonByName: [],
  pokemonById: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        allPokemons: [...action.payload],
      };
    case "GET_POKEMON_BY_NAME":
      return {
        ...state,
        pokemonByName: action.payload,
      };
    case "GET_POKEMON_BY_ID":
      return {
        ...state,
        pokemonById: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
