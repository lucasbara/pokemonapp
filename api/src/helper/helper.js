const { Pokemon, Type } = require("../db.js");
const axios = require("axios");

// Get Pokemons from API
async function getPokemonsAPI() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40"
    );
    const data = Promise.all(
      response.data.results.map(async (pokemon) => {
        let subRequest = await axios.get(pokemon.url);
        let pokemonResult = {
          name: subRequest.data.name,
          id: Number(subRequest.data.id),
          hp: subRequest.data.stats[0].base_stat,
          attack: subRequest.data.stats[1].base_stat,
          defense: subRequest.data.stats[2].base_stat,
          speed: subRequest.data.stats[4].base_stat,
          height: subRequest.data.height,
          weight: subRequest.data.weight,
          image: subRequest.data.sprites.other.dream_world.front_default,
          created: false,
        };
        return pokemonResult;
      })
    );
    return data;
  } catch (error) {
    return error;
  }
}

// Get all pokemons included DB and API
async function getAllPokemons() {
  const dbPokemons = await Pokemon.findAll();
  const ApiPokemons = await getPokemonsAPI();

  return [...dbPokemons, ...ApiPokemons];
}

module.exports = {
  getPokemonsAPI,
  getAllPokemons,
};

// DB

/*   let pokemonResult = await Pokemon.create({
          name: subRequest.data.name,
          id: subRequest.data.id,
          hp: subRequest.data.stats[0].base_stat,
          attack: subRequest.data.stats[1].base_stat,
          defense: subRequest.data.stats[2].base_stat,
          speed: subRequest.data.stats[4].base_stat,
          height: subRequest.data.height,
          weight: subRequest.data.weight,
          image: subRequest.data.sprites.other.dream_world.front_default,
          created: false,
        });*/
