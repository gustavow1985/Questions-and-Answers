const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "Gutabao0932", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;