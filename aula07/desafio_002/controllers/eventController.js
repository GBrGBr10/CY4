const events = require('../models/event')

const listEvent = (req, res) => {
    try{
        res.json(events)
    } catch(err) {
        res.status(400).json({err: "erro ao buscar eventos"})
    }
}

const createEvent = (req, res) => {
    
}

const updateEvent = (req, res) => {}

const deleteEvent = (req, res) => {}

module.exports = { listEvent, createEvent, updateEvent, deleteEvent }