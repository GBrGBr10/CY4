//Boa Prática 1: Importar Bibliotecas
const express = require('express');
const eventRoutes = require("./routes/eventRoute")

//Boa Prática 2: Criar o Servidor
const app = express();
app.use(express.json())

//Boa Prática 3: Criar as rotas
app.use("/api", eventRoutes)

//Boa prática 4: Conectar o Banco

//Boa prática 5: Escutar as requisições
app.listen(4000, () => {

})