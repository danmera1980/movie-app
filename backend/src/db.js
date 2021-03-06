require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PW, DB_HOST, DATABASE } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PW}@${DB_HOST}/${DATABASE}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });


modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Comment, Favorite } = sequelize.models;

User.hasMany(Favorite);
User.belongsToMany(Comment, {through: "user_comment"});
Comment.belongsToMany(User, {through: "user_comment"})


module.exports = {
  ...sequelize.models,
  conn: sequelize,
  Op,
};