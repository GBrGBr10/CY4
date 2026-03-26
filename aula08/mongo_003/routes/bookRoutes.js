const express = require("express")
const router = express.Router();
const bookController = require("../controllers/bookController")
const validateAuthor = require("../middlewares/validadeAuthor")
const validateTitle = require("../middlewares/validadeTitle")
const validateYear = require("../middlewares/validadeYear")

//Transferindo as rotas
router.post("/books", validateAuthor, validateTitle, validateYear, bookController.createBook);
router.get("/books", bookController.listBook);
router.get("/books/:id", bookController.listBookById);
router.patch("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

module.exports = router