const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    type: {
        type: [String],
    },
    level: {
        type: Number,
        default: 1,
    },
    generation: {
        type: [String],
    },
    pokedexNumber: {
        type: String,
    },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);