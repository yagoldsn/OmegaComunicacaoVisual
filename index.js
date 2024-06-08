const express = require('express');
const app = express();



//ROTAS
app.get('/', (req, res)=>{
  res.send('teste"')
})

//CONFIGURAÇÕES SERVIDOR
const PORT = 2000;
app.listen(PORT, () => {
  console.log("Servidor Rodando");
});