const Pokemon = require("../models/Pokemon");


async function createPokemon(req, res) {
 try {
   const { name, type, level, generation, pokedexNumber } = req.body;


   const newPokemon = new Pokemon({
     name,
     type,
     level,
     generation,
     pokedexNumber,
   });


   const savedPokemon = await newPokemon.save();
   res.status(201).json(savedPokemon);
 } catch (error) {
  
   res.status(400).json({ message: error.message });
 }
}



async function listPokemon(req, res) {
 try {
   const pokemons = await Pokemon.find();
   res.status(200).json(pokemons);
 } catch (error) {
   res.status(500).json({ error: "Erro ao listar Pokemons" });
 }
}


async function updatePokemon(req, res) {
 try {
   const updated = await Pokemon.findByIdAndUpdate(req.params.id, req.body, {
     new: true,
   });
   res.json(updated);
 } catch (err) {
   res.status(400).json({ erro: err.message });
 }
}


async function deletePokemon(req, res) {
 try {
   await Pokemon.findByIdAndDelete(req.params.id);
   res.json({ mensagem: "Pokemon deletado com sucesso." });
 } catch (err) {
   res.status(400).json({ erro: err.message });
 }
}

async function listPokemonById(req, res, next) {
    try {
        const {id} = req.params 
        const pokemonById = await Pokemon.findById(id)
        res.status(201).json(pokemonById);

        if (!pokemonById) {
            return res.status(404).json({ error: "Pokemon não encontrado"})
        }

    } catch(err) {
        next(err)
}}

async function listPokemonByType(req, res, next) {
  try{
    const {type} = req.params
    const pokemonByType = await Pokemon.find({type: type})
    res.status(201).json(pokemonByType)
    
    if (!pokemonByType) {
            return res.status(404).json({ error: "Pokemon não encontrado"})
        }

    } catch(err) {
        next(err)
}}

async function listPokemonByDoubleType(req, res, next) {
  try{
    const {type0} = req.params
    const {type1} = req.params
    const pokemonByDoubleType = await Pokemon.find({type: [type0, type1]})
    res.status(201).json(pokemonByDoubleType)
    
    if (!pokemonByType) {
            return res.status(404).json({ error: "Pokemon não encontrado"})
        }

    } catch(err) {
        next(err)
}}

async function listPokemonByGen(req, res, next) {
  try{
    const {generation} = req.params
    const pokemonByGen = await Pokemon.find({generation: generation})
    res.status(201).json(pokemonByGen)
    
    if (!pokemonByGen) {
            return res.status(404).json({ error: "Pokemon não encontrado"})
        }

    } catch(err) {
        next(err)
}}

module.exports = { listPokemon, createPokemon, updatePokemon, deletePokemon, listPokemonById, listPokemonByType, listPokemonByDoubleType, listPokemonByGen};