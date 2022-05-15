const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    console.log(`Server started in port ${port}`); // eslint-disable-line no-console
  });
});