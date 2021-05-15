const Sequelize = require("sequelize");
const connection  = require("./Database");

const Resposta  = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
// force false não força a criação da tabela caso ela já exista
Resposta.sync({force: false});

module.exports = Resposta;