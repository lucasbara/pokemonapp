import { filteredPokemons } from "../actions";

const initialState = {
  allPokemons: [],
  filteredPokemons: [],
  pokemonByName: [],
  pokemonById: [],
  currentPage: 0,
  amountOfPokemons: 9,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        allPokemons: [...action.payload],
      };
    case "RECEIVE_FILTERED_POKEMONS":
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
