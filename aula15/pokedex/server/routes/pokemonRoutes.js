const express = require("express");


const pokemonController = require("../controllers/pokemonController");


const router = express.Router();


router.post("/pokemon", pokemonController.createPokemon );

router.get("/pokemon", pokemonController.listPokemon );

router.get("/pokemon/:id", pokemonController.listPokemonById );

//router.get("/pokemon/type/:type", pokemonController.listPokemonByType );

//router.get("/pokemon/type/:type0/:type1", pokemonController.listPokemonByDoubleType );

//router.get("/pokemon/gen/:generation", pokemonController.listPokemonByGen );

router.patch("/pokemon/:id", pokemonController.updatePokemon );

router.delete("/pokemon/:id", pokemonController.deletePokemon );

module.exports = router; 