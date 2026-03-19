//Primeira Boa prática = requisitar as bíbliotecas
const express = require("express");
const connectDB = require("./config/config");
const Book = require("./models/book");
const Emprestimo = require("./models/emprestimo");
const validateTitle = require("./middleware/validateTitle");
const validateAuthor = require("./middleware/validateAuthor");
const validateYear = require("./middleware/validateYear");

//Segunda Boa prática = criar o servidor
const app = express();
app.use(express.json());

//Terceira Boa prática = criar as rotas
app.post('/api/books', validateTitle, validateAuthor, validateYear, async (req, res) => {
    try {
        /*
        const title = req.body.title;
        const author = req.body.author
        const year = req.body.year
        const genre = req.body.genre
        */
        const {title, author, year, genre} = req.body
        
        const newBook = new Book( {title, author, year, genre} );
        await newBook.save();
        res.status(201).json(newBook);

    } catch(err) 
    {res.status(500).json({error: 'Erro ao criar o livro!'})}
} 
)

app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find()
        res.status(201).json(books);

    } catch(err) {res.status(500).json({error: 'Erro ao buscar o livro!'})}
} )
//Ex 001: Criar uma rota de busca pelo Id de um livro
app.get('/api/books/:id', async (req, res) => {
    try {
        const {id} = req.params 
        const bookById = await Book.findById(id)
        res.status(201).json(bookById);

        if (!bookById) {
            return res.status(404).json({ error: "Livro não encontrado" });
        }

        res.json(bookById);

    } catch(err) {res.status(500).json({error: 'Erro ao buscar o livro pelo Id!'})}
} );

//Patch
app.patch('/api/books/:id', async (req, res) => {
    try {
        const {id} = req.params //const id = req.params.id 
        const updates = req.body;
        const options = {new: true, runValidators: true}; //novo objeto new e validações ligadas

        const updateBook = await Book.findByIdAndUpdate(id, updates, options);
        if(!updateBook)
            return res.status(404).json({ error: "Livro não encontrado para atualizar" });

        res.json(updateBook);

    } catch(err) 
        {res.status(500).json({error: 'Erro ao atualizar o livro!'})}
} );

//Delete
app.delete('/api/books/:id', async (req, res) => {
    try {
        const {id} = req.params //const id = req.params.id 
    
        const deleteBook = await Book.findByIdAndDelete(id);
         
        if(!deleteBook)
            return res.status(404).json({ error: "Livro não encontrado para deletar" });

        res.json( {message: "Livro Excluído com sucesso" });

    } catch(err) 
        {res.status(500).json({error: 'Erro ao atualizar o livro!'})}
} );

      

//Ex 002: Criar uma rota para guardar informações de emprestimos de livro: pessoa titulo data
app.post('/api/emprestimo', async (req, res) => {
    try {
        const {title, pessoaDando, pessoaRecebendo} = req.body

        const newEmprestimo = new Emprestimo( {title, pessoaDando, pessoaRecebendo} )
        await newEmprestimo.save()
        res.status(201).json(newEmprestimo);
        
    } catch(err) {res.status(500).json({error: 'Erro ao emprestar o livro!'})}
})

//Quarta Boa prática = conectar banco de dados
connectDB();


//Quinta Boa prática = ligar numa porta
app.listen(3000, () => {
    console.log("Server Running on port 3000");
})