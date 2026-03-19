//Boa prática 1 - requisitar bibliotecas
const mongoose = require('mongoose')

//Boa prática 2 - criar um esquema
const bookSchema = new mongoose.Schema ( {
    title: {type: String, required:[true, "O título é obrigatório"], minlength: [5, " (Model) O titulo deve ter pelo menos 5 letras"]},
    author: {type: String, required:[true, "O nome do autor é obrigatório"], minlength: [5, "(Model) O author deve ter pelo menos 5 letras"]},
    year: {
        type: Number, 
        required:[true, "O ano é obrigatório"], 
        min:[1000, "(Model) O ano está invalido, não deve ser no passado"], 
        max: [new Date().getFullYear(), "(Model) O ano está invalido, não deve ser no futuro"]
    },
    genre: {type: String, required:[true, "(Model) O gênero é obrigatório"]},
    createdAt: {type: Date, default: Date.now}
} )

//Boa prática 3 - criar o modelo
const Book = mongoose.model('Book', bookSchema);

//Boa prática 4 - Exportar o modelo
module.exports = Book;