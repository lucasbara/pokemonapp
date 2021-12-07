const { Router } = require("express");
const axios = require("axios");
const { getPokemonsAPI } = require("../helper/helper.js");
const { Pokemon, Type } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/*router.get("/pokemons", async (req, res) => {
  const pokemons = await getPokemonsAPI();
  return res.json(pokemons);
}); */

router.get("/pokemons", async (req, res) => {
  let { name } = req.query;
  if (name) {
    name.toLowerCase();
    const pokemonDB = await Pokemon.findAll({
      where: {
        name: name,
      },
    });
    if (pokemonDB.length > 1) {
      return res.json(pokemonDB);
    } else {
      const pokemonsApi = await getPokemonsAPI();
      const foundPokemon = pokemonsApi.find((p) => p.name === name);
      if (foundPokemon) {
        return res.json(foundPokemon);
      } else {
        return res.json("El nombre ingresado no pertenece a ningún pokemon");
      }
    }
  } else {
    const pokemons = await getPokemonsAPI();
    return res.json(pokemons);
  }
});

router.get("/pokemons/:idPokemon", async (req, res) => {
  const id = Number(req.params.idPokemon);
  if (typeof id === "number") {
    const pokemonDb = await Pokemon.findByPk(id);
    if (pokemonDb) {
      return res.json(pokemonDb);
    } else {
      const pokemonsApi = await getPokemonsAPI();
      const foundPokemon = pokemonsApi.find((p) => p.id === id);
      if (foundPokemon) {
        return res.json(foundPokemon);
      } else {
        return res.json("El ID ingresado no pertenece a ningún pokemon");
      }
    }
  }
  return res.send("El ID debe ser un número").status(404);
});

module.exports = router;
