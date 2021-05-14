const bodyParser = require("body-parser");
const express = require ("express");
const app = express();
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta")

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
        
    res.render("index", {
        
    })
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

app.listen(8080, () => {
    console.log("APP NO AR!")
});