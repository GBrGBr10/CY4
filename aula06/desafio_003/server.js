//Boa pratica 1 - requisitar as bibliotecas
 const express = require("express");


//Boa pratica 2 - criar o servidor
const app = express()
app.use(express.json())
//GET listagem de tarefa
app.get('/tarefas', async (req, res ) => {
    try{
        res.json( {tarefas: listaTarefas} )
    }
    catch(err) {
        res.status(400).json( {error: "Não foi possivel procurar as tarefas!"})
    }
})


//POST adicionar tarefa usando push
app.post('/tarefas', async (req, res) => {
    try{

        const novaDescricao = req.body.descricao
        

        const novaTarefa = {
            id: listaTarefas.length + 1,
            descricao: novaDescricao,
            completed: false,
            createdAt: new Date()
        };

        listaTarefas.push(novaTarefa);       
        res.status(201).json( {mensagem: "Tarefa adicionada com sucesso!"} )
    } 
    catch(error) {
        res.status(500).json({error: "Erro no servidor ao criar tarefa!"})
    }
})
//PATCH atualizar o completed usando find

//DELETE apagar uma tarefa usando splice

//GET listar tarefas completadas usando filter

//Boa pratica 3 - criar as rotas



//Boa pratica 4 - conectar o banco
let listaTarefas = [
    {id: 1, descricao: 'lavar louça', completed: false, createdAt: new Date()},
    {id: 2, descricao: 'lavar calçado', completed: false, createdAt: new Date()}, 
    {id: 3, descricao: 'lavar carro', completed: false, createdAt: new Date()}
]


//Boa pratica 5 - escutar as requisições
app.listen(3000, () => {
    console.log("Server Running on port 3000");
})

