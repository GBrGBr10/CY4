const express = require("express")
const router = express.Router();
const eventController = require("../controllers/eventController")
//Transferindo as rotas

// router.post("/events", validateAuthor, validateTitle, validateYear, bookController.createBook);
router.get("/events", eventController.listEvent);
/*
router.get("/events/:id", bookController.listEventById);
router.patch("/events/:id", bookController.updateEvent);
router.delete("/events/:id", bookController.deleteEvent);
*/
module.exports = router