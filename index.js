const bodyParser = require("body-parser");
const express = require ("express");
const app = express();
const connection = require("./database/Database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

connection
    .authenticate()
    .then(() => {
        console.log("Banco de dados conectado.")
    })
    .catch(err => {console.log(err)})

//dizer para o express usar EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static("public"));


//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res)=>{
    Pergunta.findAll({ raw: true, order:[
        ["id", "desc"] // ordenação pelo id em ordem decrescente
    ] }) //find all equivale ao SELECT ALL FROM PERGUNTAS    -- raw: true - traz somente os dados que queremos
        .then(perguntas => {
            res.render("index", {
                perguntas: perguntas
            });
        });
});

app.get("/perguntar", (req, res)=>{
        
    res.render("perguntar", {
        
    })
});

app.post("/salvarPergunta", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    })
});

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id}
    }).then(Pergunta => {
        if(Pergunta != undefined){ //pergunta encontrada
            res.render("pergunta", {
                Pergunta
            });
        } else {// não encontrada
            res.redirect("/");
        }
    });
});

app.listen(8080, () => {
    console.log("APP NO AR!")
});