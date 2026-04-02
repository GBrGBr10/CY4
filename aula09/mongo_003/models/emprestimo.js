//Boa prática 1 - requisitar bibliotecas
const mongoose = require('mongoose')

//Boa prática 2 - criar um esquema
const emprestimoSchema = new mongoose.Schema ( {
    title: {type: String},
    pessoaRecebendo: {type: String},
    pessoaDando: {type: String},
    createdAt: {type: Date, default: Date.now}
} )

//Boa prática 3 - criar o modelo
const Emprestimo = mongoose.model('Emprestimo', emprestimoSchema);

//Boa prática 4 - Exportar o modelo
module.exports = Emprestimo;