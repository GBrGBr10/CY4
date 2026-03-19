//Primeira Boa prática = requisitar as bíbliotecas
const express = require("express");
const connectDB = require("./config/config");
const Book = require("./models/book");
const Emprestimo = require("./models/emprestimo")
const validateTitle = require("./middlewares/validadeTitle")
const validateAuthor = require("./middlewares/validadeAuthor")
const validateYear = require("./middlewares/validadeYear")
const bookRoutes = require("./routes/bookRoutes")

//Segunda Boa prática = criar o servidor
const app = express();
app.use(express.json());

//Terceira Boa prática = criar as rotas
app.use('/api', bookRoutes); //Novas Rotas separadas no arquivo bookRoutes

//Centralização de Erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json( {error: "Ocorreu um erro no servidor"} )
})

//Ex 002: Criar uma rota para guardar informações de emprestimos de livro: pessoa titulo data
app.post('/api/emprestimo', async (req, res) => {
    try {
        const {title, pessoaDando, pessoaRecebendo} = req.body

        const newEmprestimo = new Emprestimo( {title, pessoaDando, pessoaRecebendo} )
        await newEmprestimo.save()
        res.status(201).json(newEmprestimo);
        
    } catch(err) {res.status(500).json({error: 'Erro ao emprestar o livro!'})}
});

//Quarta Boa prática = conectar banco de dados
connectDB();


//Quinta Boa prática = ligar numa porta
app.listen(3000, () => {
    console.log("Server Running on port 3000");
})