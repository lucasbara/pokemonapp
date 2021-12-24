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
      if (state.currentPage === 9) {
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
    case "CLEAR STATE":
      if (state.currentPage === 0) {
        return {
          ...state,
          filteredPokemons: state.allPokemons.slice(
            state.currentPage,
            state.currentPage + 9
          ),
          filter: false,
        };
      } else {
        return {
          ...state,
          filter: false,
          filteredPokemons: state.allPokemons.slice(
            state.currentPage,
            state.currentPage + 12
          ),
          filter: false,
        };
      }
    /*case "GET_POKEMON_BY_NAME":
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
      }*/
    case "GET_POKEMON_BY_NAME":
      return {
        ...state,
        filteredPokemons: state.allPokemons.filter((p) => {
          return p.name == action.payload.toLowerCase();
        }),
      };
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
      return {
        ...state,
        filteredPokemons: state.filteredPokemons.filter((p) => {
          return p.types.includes(action.payload);
        }),
      };
    case "FILTER_BY_CREATOR":
      return {
        ...state,
        filteredPokemons: state.filteredPokemons.filter((p) => {
          return p.created.toString() == action.payload;
        }),
      };
    case "ORDER_ASCENDING":
      return {
        ...state,
        currentPage: 0,
        filter: true,
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
    case "ORDER_DESCENDING":
      return {
        ...state,
        currentPage: 0,
        filter: true,
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
    case "ORDER_ATTACK_ASCENDING":
      return {
        ...state,
        currentPage: 0,
        filter: true,
        filteredPokemons: state.allPokemons
          .sort((a, b) => {
            if (a.attack > b.attack) return -1;
            if (a.attack < b.attack) return 1;
            return 0;
          })
          .slice(0, 9),
      };
    case "ORDER_ATTACK_DESCENDING":
      return {
        ...state,
        currentPage: 0,
        filter: true,
        filteredPokemons: state.allPokemons
          .sort((a, b) => {
            if (a.attack < b.attack) return -1;
            if (a.attack > b.attack) return 1;
            return 0;
          })
          .slice(0, 9),
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
