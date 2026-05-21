const Pokemon = require("../models/Pokemon");


async function createPokemon(req, res) {
 try {
   const { name, type, level } = req.body;


   const newPokemon = new Pokemon({
     name,
     type,
     level
   });


   const savedPokemon = await newPokemon.save();
   res.status(201).json(savedPokemon);
 } catch (error) {
  
   res.status(400).json({ message: error.message });
 }
}



async function listPokemon(req, res) {
        try {
            const { name, type, level, sortBy, order = "asc", page, limit } = req.query;
            const filter = {};

            if (name) {
                filter.name = new RegExp(name, "i");
            }

            if (type) {
                const algumType = Array.isArray(type)
                ? type
                : type.split(",").map(t => t.trim());
                filter.type = { $in: algumType };
            }   

            if (level) {
                filter.level = { $gte: Number(level) };
            }
            
            const sortOption = {};

            if (sortBy) {
                sortOption[sortBy] = order === "desc" ? -1 : 1;
            }

            const pokemons = await Pokemon.find(filter).sort(sortOption).skip((page - 1) * limit)
            .limit(Number(limit));
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



module.exports = { listPokemon, createPokemon, updatePokemon, deletePokemon, listPokemonById };