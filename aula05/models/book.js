//Boa prática 1 - requisitar bibliotecas
const mongoose = require('mongoose')

//Boa prática 2 - criar um esquema
const bookSchema = new mongoose.Schema ( {
    title: {type: String},
    author: {type: String},
    year: {type: Number},
    genre: {type: String},
    createdAt: {type: Date, default: Date.now}
} )

//Boa prática 3 - criar o modelo
const Book = mongoose.model('Book', bookSchema);

//Boa prática 4 - Exportar o modelo
module.exports = Book;