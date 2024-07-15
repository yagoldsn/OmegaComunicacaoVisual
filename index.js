const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');//importando opção de usar a pasta public 

//express=handlebars
const optionsHandlebars = handlebars.create({
  defaultLayout: "main"
});

app.engine("handlebars", optionsHandlebars.engine);
app.set("view engine", "handlebars");


//Public
//Pasta estatica do pro Public
app.use(express.static(path.join(__dirname, "public")));


//ROTAS
app.get('/', (req, res)=>{
  res.render('home');
})


//CONFIGURAÇÕES SERVIDOR
const PORT = 2000;
app.listen(PORT, () => {
  console.log("Servidor Rodando");
});