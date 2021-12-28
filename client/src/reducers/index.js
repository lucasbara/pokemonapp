import { filterByCreator } from "../actions";

const initialState = {
  allPokemons: [],
  copyAllPokemons: [],
  filteredPokemons: [],
  addedPokemon: undefined,
  pokemonById: [],
  pokemonTypes: [],
  currentPage: 0,
  amountOfPokemons: 9,
  filter: false,
  order: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        allPokemons: action.payload,
        copyAllPokemons: action.payload,
      };
    case "RECEIVE_POKEMONS":
      if (state.currentPage === 0) {
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
          amountOfPokemons: action.payload,
          filteredPokemons: state.allPokemons.slice(
            state.currentPage,
            state.currentPage + action.payload
          ),
        };
      }
    case "NEXT_PAGE":
      if (state.currentPage < 33) {
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
      if (state.currentPage === 0) {
        return {
          ...state,
        };
      } else if (state.currentPage === 9) {
        return {
          ...state,
          amountOfPokemons: 9,
          currentPage: state.currentPage - 9,
        };
      } else if (state.currentPage > 9) {
        return {
          ...state,
          currentPage: state.currentPage - state.amountOfPokemons,
        };
      }
    case "CLEAR_STATE":
      return {
        ...state,
        filter: false,
        order: false,
        currentPage: 0,
        filteredPokemons: state.allPokemons.slice(0, 9),
      };
    case "GET_POKEMON_BY_NAME":
      const searchedPokemon = state.allPokemons.filter((p) => {
        return p.name == action.payload.toLowerCase();
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
        if (action.payload) {
          return {
            ...state,
            currentPage: 0,
            filter: true,
            filteredPokemons: filteredCreator,
          };
        } else
          return {
            ...state,
            currentPage: 0,
            filter: true,
            filteredPokemons: filteredCreator.slice(0, 9),
          };
      } else {
        return {
          ...state,
          currentPage: 0,
          filteredPokemons: false,
        };
      }
    case "ORDER_ASCENDING":
      if (state.filter) {
        return {
          ...state,
          currentPage: 0,
          order: true,
          filteredPokemons: state.filteredPokemons
            .sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            })
            .slice(
              state.currentPage,
              state.currentPage === 0
                ? state.currentPage + 9
                : state.currentPage + 12
            ),
        };
      } else {
        return {
          ...state,
          currentPage: 0,
          order: true,
          filteredPokemons: state.allPokemons
            .sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            })
            .slice(
              state.currentPage,
              state.currentPage === 0
                ? state.currentPage + 9
                : state.currentPage + 12
            ),
        };
      }
    case "ORDER_DESCENDING":
      if (state.filter) {
        return {
          ...state,
          currentPage: 0,
          order: true,
          filteredPokemons: state.filteredPokemons
            .sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            })
            .slice(
              state.currentPage,
              state.currentPage === 0
                ? state.currentPage + 9
                : state.currentPage + 12
            ),
        };
      } else {
        return {
          ...state,
          currentPage: 0,
          order: true,
          filteredPokemons: state.allPokemons
            .sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            })
            .slice(
              state.currentPage,
              state.currentPage === 0
                ? state.currentPage + 9
                : state.currentPage + 12
            ),
        };
      }
    case "ORDER_ATTACK_ASCENDING":
      if (state.filter) {
        return {
          ...state,
          currentPage: 0,
          order: true,
          filteredPokemons: state.filteredPokemons
            .sort((a, b) => {
              if (a.attack > b.attack) return -1;
              if (a.attack < b.attack) return 1;
              return 0;
            })
            .slice(0, 9),
        };
      } else {
        return {
          ...state,
          currentPage: 0,
          filteredPokemons: state.allPokemons
            .sort((a, b) => {
              if (a.attack > b.attack) return -1;
              if (a.attack < b.attack) return 1;
              return 0;
            })
            .slice(0, 9),
        };
      }
    case "ORDER_ATTACK_DESCENDING":
      if (state.filter) {
        return {
          ...state,
          currentPage: 0,
          order: true,
          filteredPokemons: state.filteredPokemons
            .sort((a, b) => {
              if (a.attack < b.attack) return -1;
              if (a.attack > b.attack) return 1;
              return 0;
            })
            .slice(0, 9),
        };
      } else {
        return {
          ...state,
          currentPage: 0,
          order: true,
          filteredPokemons: state.allPokemons
            .sort((a, b) => {
              if (a.attack < b.attack) return -1;
              if (a.attack > b.attack) return 1;
              return 0;
            })
            .slice(0, 9),
        };
      }
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
