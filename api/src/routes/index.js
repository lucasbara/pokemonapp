const { Router } = require("express");
const {
  addPokemon,
  getPokemonTypes,
  getPokemonByName,
  getPokemonById,
  getAllPokemons,
} = require("../controllers/controllers.js");

const router = Router();

router.get("/pokemons", (req, res) => {
  const { name } = req.query;
  if (name) return getPokemonByName(req, res);
  getAllPokemons(req, res);
});

router.get("/pokemons/:idPokemon", async (req, res) => {
  return getPokemonById(req, res);
});

router.post("/pokemons", async (req, res) => {
  await addPokemon(req, res);
});

router.get("/types", async (req, res) => {
  const pokemonTypes = await getPokemonTypes(req, res);
  return res.json(pokemonTypes);
});

module.exports = router;
