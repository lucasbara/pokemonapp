const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { getPokemonTypes } = require("./src/controllers/controllers");
const { PORT } = process.env || 3001;

// Syncing all the models at once.
async function getTypes() {
  return await getPokemonTypes();
}

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    getTypes();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
