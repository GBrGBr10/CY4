const express = require("express")
const router = express.Router();
const produtoController = require("../controllers/produtoController")

//Transferindo as rotas
router.post("/produtos", produtoController.createProduto);
router.get("/produtos", produtoController.listProduto);

module.exports = router