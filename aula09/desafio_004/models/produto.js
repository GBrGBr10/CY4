//Boa prática 1 - requisitar bibliotecas
const mongoose = require('mongoose')

//Boa prática 2 - criar um esquema
const produtoSchema = new mongoose.Schema ( {
    nome: { type: String},
    categoria: { type: String},
    preco: { type: Number}
} )

//Boa prática 3 - criar o modelo
const produto = mongoose.model('Produto', produtoSchema);

//Boa prática 4 - Exportar o modelo
module.exports = produto;