const { Pokemon, Type } = require("../db.js");
const axios = require("axios");

const getAllPokemons = async (req, res) => {
  const dbPokemons = await getDbPokemons();
  const apiPokemons = await getPokemonsApi();

  return res.status(200).json(dbPokemons.concat(apiPokemons));
};

const getDbPokemons = () => {
  return Pokemon.findAll({
    include: {
      model: Type,
      through: {
        attributes: [],
      },
      attributes: ["name"],
    },
  }).then((data) => {
    return data;
  });
};

const getPokemonsApi = async () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40")
    .then((res) => {
      return Promise.all(
        res.data.results.map((pokemon) => {
          return axios.get(pokemon.url).then((res, i) => {
            return {
              name: res.data.name,
              id: Number(res.data.id),
              hp: res.data.stats[0].base_stat,
              attack: res.data.stats[1].base_stat,
              defense: res.data.stats[2].base_stat,
              speed: res.data.stats[4].base_stat,
              height: res.data.height,
              weight: res.data.weight,
              image: res.data.sprites.other.dream_world.front_default,
              types: res.data.types.map((type) => {
                return { name: type.type.name };
              }),
              created: false,
            };
          });
        })
      );
    });
};

const getPokemonByName = async (req, res) => {
  let { name } = req.query;

  const foundPokemon = await Pokemon.findAll({
    where: {
      name: name.toLowerCase(),
    },
  });

  return foundPokemon.length
    ? res.status(200).json(foundPokemon)
    : res
        .status(404)
        .json(
          `Sorry, we couldn't find any information of the pokemon named ${name}`
        );
};

// Get pokemon ID
async function getPokemonById(req, res) {
  const id = req.params.idPokemon;
  const regex =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;

  let foundPokemon = false;

  if (regex.test(id)) {
    foundPokemon = await Pokemon.findByPk(id, {
      include: {
        model: Type,
        through: {
          attributes: [],
        },
        attributes: ["name"],
      },
    });
  } else {
    const pokemonsApi = await getPokemonsApi();
    foundPokemon = pokemonsApi.find((p) => p.id === Number(id));
  }

  return foundPokemon
    ? res.status(200).json(foundPokemon)
    : res
        .status(404)
        .json("Sorry, we couldn't find any information of that pokemon");
}

async function addPokemon(req, res) {
  const { hp, attack, defense, speed, height, weight, image, type1, type2 } =
    req.body;
  let name = req.body.name.toLowerCase();
  let pokemon = {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
  };
  try {
    let createdPokemon = await Pokemon.create(pokemon);
    await createdPokemon.addType(type1, {
      through: "pokemon_type",
    });
    await createdPokemon.addType(type2, {
      through: "pokemon_type",
    });
    return res
      .status(200)
      .send(
        `Congratulations! You have successfully created a new pokemon named ${name}`
      );
  } catch (err) {
    return res.status(404).json(err);
  }
}

async function getPokemonTypes() {
  let pokemonDb = await Type.findAll();
  if (pokemonDb.length) return pokemonDb;
  else {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const data = Promise.all(
      response.data.results.map(async (t, index) => {
        let types = await Type.create({
          id: ++index,
          name: t.name,
        });
        return types;
      })
    );
    return data;
  }
}

module.exports = {
  addPokemon,
  getAllPokemons,
  getPokemonTypes,
  getPokemonByName,
  getPokemonById,
};
