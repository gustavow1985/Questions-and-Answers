const bodyParser = require("body-parser");
const express = require ("express");
const app = express();


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
    res.send(`Formulário recebido - Título: ${titulo} - Descrição: ${descricao}`)
});



app.listen(8080, () => {
    console.log("APP NO AR!")
});