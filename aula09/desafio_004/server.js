//Primeira Boa prática = requisitar as bíbliotecas
const express = require("express");
const connectDB = require("./config/config");
const Book = require("./models/produto");
const bookRoutes = require("./routes/bookRoutes")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

//Segunda Boa prática = criar o servidor
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Terceira Boa prática = criar as rotas
app.use('/api', bookRoutes); //Novas Rotas separadas no arquivo bookRoutes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Centralização de Erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json( {error: "Ocorreu um erro no servidor"} )
})

//Quarta Boa prática = conectar banco de dados
connectDB();


//Quinta Boa prática = ligar numa porta
app.listen(3000, () => {
    console.log("Server Running on port 3000");
})