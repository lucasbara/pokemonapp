const initialState = {
  allPokemons: [],
  filteredPokemons: [],
  addedPokemon: false,
  pokemonById: [],
  pokemonTypes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        allPokemons: action.payload,
        filteredPokemons: action.payload,
      };
    case "CLEAR_STATE":
      return {
        ...state,
        filteredPokemons: state.allPokemons,
        addedPokemon: false,
      };
    case "ADD_POKEMON":
      console.log(action.payload);
      return {
        ...state,
        addedPokemon: action.payload,
      };
    case "GET_POKEMON_BY_NAME":
      const searchedPokemon = state.allPokemons.filter((p) => {
        return p.name === action.payload.toLowerCase();
      });
      if (searchedPokemon.length) {
        return {
          ...state,
          filteredPokemons: searchedPokemon,
        };
      } else {
        return {
          ...state,
          filteredPokemons: false,
        };
      }
    case "GET_POKEMON_BY_ID":
      return {
        ...state,
        pokemonById: action.payload,
      };
    case "CLEAR_POKEMON_BY_ID":
      return {
        ...state,
        pokemonById: [],
      };
    case "GET_POKEMON_TYPES":
      return {
        ...state,
        pokemonTypes: [...action.payload],
      };
    case "FILTER_BY_TYPE":
      const typeFiltered = state.allPokemons.filter((p) => {
        return p.types.some((type) => type.name === action.payload);
      });
      if (typeFiltered.length) {
        return {
          ...state,
          filter: true,
          filteredPokemons: typeFiltered,
        };
      } else {
        return {
          ...state,
          filteredPokemons: false,
        };
      }

    case "FILTER_BY_CREATOR":
      const filteredCreator = state.allPokemons.filter((p) => {
        return p.created.toString() === action.payload;
      });
      if (filteredCreator.length) {
        return {
          ...state,
          filteredPokemons: filteredCreator,
        };
      } else {
        return {
          ...state,
          filteredPokemons: false,
        };
      }

    case "ORDER_ASCENDING":
      return {
        ...state,
        filteredPokemons: state.filteredPokemons.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }),
      };
    case "ORDER_DESCENDING":
      return {
        ...state,
        filteredPokemons: state.filteredPokemons.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        }),
      };
    case "ORDER_ATTACK_ASCENDING":
      return {
        ...state,
        filteredPokemons: state.filteredPokemons.sort((a, b) => {
          if (a.attack > b.attack) return -1;
          if (a.attack < b.attack) return 1;
          return 0;
        }),
      };
    case "ORDER_ATTACK_DESCENDING":
      return {
        ...state,
        filteredPokemons: state.filteredPokemons.sort((a, b) => {
          if (a.attack < b.attack) return -1;
          if (a.attack > b.attack) return 1;
          return 0;
        }),
      };

    default:
      return state;
  }
};

export default rootReducer;
