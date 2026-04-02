//Boa prática 1 - requisitar bibliotecas
const mongoose = require('mongoose')

//Boa prática 2 - criar um esquema
const bookSchema = new mongoose.Schema ( {
    title: {
        type: String, 
        required: [true, "O nome é obrigatório"],
        minlength: [3, "Deve ter pelo menos 3 letras"] 
    },
    author: 
    {
        type: String,
        required: [true, "Autor é obrigatório"],
        minlength: [3, "Deve ter pelo menos 3 letras"]
    },
    year: {
        type: Number,
        required: [true, "Ano é obrigatório"],
        min: [1000, "Ano acima de 1000" ],
        max: [new Date().getFullYear(), "Ano não deve ser no futuro!"]
    },
    genre: {
        type: String,
        required: [true, "Gênero é obrigatório"]
    },
    createdAt: {
        type: Date, default: Date.now
    }
} )

//Boa prática 3 - criar o modelo
const Book = mongoose.model('Book', bookSchema);

//Boa prática 4 - Exportar o modelo
module.exports = Book;