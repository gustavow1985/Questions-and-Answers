const Sequelize = require("sequelize");
const connection  = require("./database");

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});
// force false não força a criação da tabela caso ela já exista
Pergunta.sync({force: false}).then(() => {
    console.log("A tabela foi criada.")
});

module.exports = Pergunta;