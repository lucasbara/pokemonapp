import { receivePokemons } from "../actions";

const initialState = {
  allPokemons: [],
  filteredPokemons: [],
  addedPokemon: undefined,
  pokemonByName: [],
  pokemonById: [],
  pokemonTypes: [],
  currentPage: 0,
  amountOfPokemons: 9,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        allPokemons: action.payload,
      };
    case "RECEIVE_POKEMONS":
      if (state.currentPage == 0) {
        return {
          ...state,
          filteredPokemons: state.allPokemons.slice(
            state.currentPage,
            state.currentPage + 9
          ),
        };
      } else {
        return {
          ...state,
          filteredPokemons: state.allPokemons.slice(
            state.currentPage,
            state.currentPage + action.payload
          ),
        };
      }
    case "NEXT_PAGE":
      if (state.currentPage < 36) {
        return {
          ...state,
          currentPage: state.currentPage + state.amountOfPokemons,
        };
      } else {
        return {
          ...state,
          currentPage: state.currentPage,
        };
      }
    case "PREVIOUS_PAGE":
      if (state.currentPage > 0) {
        return {
          ...state,
          currentPage: state.currentPage - state.amountOfPokemons,
        };
      }
    case "CLEAR STATE":
      if (state.currentPage == 0) {
        return {
          ...state,
          filteredPokemons: state.allPokemons.slice(
            state.currentPage,
            state.currentPage + 9
          ),
        };
      } else {
        return {
          ...state,
          filteredPokemons: state.allPokemons.slice(
            state.currentPage,
            state.currentPage + 12
          ),
        };
      }
    case "GET_POKEMON_BY_NAME":
      if (action.payload.name) {
        return {
          ...state,
          filteredPokemons: [action.payload],
        };
      } else {
        return {
          ...state,
          filteredPokemons: null,
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
    case "ADD_POKEMON":
      return {
        ...state,
        addedPokemon: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
