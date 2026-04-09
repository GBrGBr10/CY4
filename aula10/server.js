//Boa prática 1: Importa as bibliotecas
const express = require('express');
const authRoutes = require('./routes/authRoutes');

//Boa prática 2: Criar o servidor
const app =express();
app.use(express.json());

//Boa prática 3: Criar as rotas
app.use('/api', authRoutes);

/*
    app.get('/api/perfil', authMiddleware.tokenValidation, (req, res) => {
    res.json( {mensagem: `Bem vindo ${req.user.email}!`} )
})
*/

//Boa prática 4: Conectar o banco

//Boa prática 5: escutar a porta
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})