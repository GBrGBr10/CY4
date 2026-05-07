//Boa prática 1 : Importar as bibliotecas e as variáveis de ambiente
const express = require("express");
const cors = require("cors"); // permite o servidor trabalhar com requisições de outras origens no frontend(<form>)
const mongoose = require ("mongoose")

require('dotenv').config() //importando variáveis de ambiente
const connectDB = require("./db");
const PORT = process.env.PORT; //Importando a constante PORT = 8000 - :D
const SM64 = process.env.SM64; //Importando a constante SM64 = 9000 - :D
const NOME_DO_SISTEMA = process.env.NOME_DO_SISTEMA;

//Boa prática 2 : Criar a aplicação
const app = express();
    app.use(cors());
    app.use(express.urlencoded({ extended: true })); //permite trabalhar com formulários
    app.use(express.json());

//Boa prática 3 : Criar as rotas
app.get('/status', (req, res) => {
    const status = mongoose.connection.readyState === 1 ? "Conectado" : "Desconectado"
    res.send(
        {
            "sistema": process.env.NOME_DO_SISTEMA,
            "banco de dados": status
        }
    );
    });

//Boa prática 4 : Conectar os bancos
    connectDB();

//Boa prática 5 : Escutar as portas
app.listen(SM64, () => {
    console.log(`Servidor escutando na porta ${SM64} - :D`);
});

