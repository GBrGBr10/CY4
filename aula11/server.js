//Boa prática 1: Importa as bibliotecas
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middlewares/authMiddleware.js')
const roleMiddleware = require('./middlewares/roleMiddleware.js')

//Boa prática 2: Criar o servidor
const app =express();
app.use(express.json());

//Boa prática 3: Criar as rotas
app.use('/api', authRoutes);

    app.get('/api/perfil', authMiddleware.tokenValidation, (req, res) => {
    res.json( {mensagem: `Bem vindo ${req.user.email}!`} )
})

app.get('/api/admin', roleMiddleware.authorize(['admin']), (req, res) => {
    res.json({mensagem: `Bem-vindo ${req.user.email}`});
} )

app.get('/api/mascote', roleMiddleware.authorize(['mascote', 'admin']), (req, res) => {
    res.json({mensagem: `Bem-vindo ${req.user.email}`});
} )

app.get('/api/felca', roleMiddleware.authorize(['felca', 'mascote', 'admin']), (req, res) => {
    res.json({mensagem: `Bem-vindo ${req.user.email}`});
} )


//Boa prática 4: Conectar o banco

//Boa prática 5: escutar a porta
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})