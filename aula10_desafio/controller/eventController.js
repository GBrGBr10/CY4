//Desafio
    const jwt = require('jsonwebtoken');
    const event = require("../models/event");

    //criar evento
    const createEvent = async (req, res) => {
        try {
            const {nome, data, local, descricao} = req.body
            const newEvent = new Produto( {nome, data, local, descricao} );
            await newEvent.save();
            res.status(201).json(newEvent);
        } catch(err) {
            console.log(error)
            res.status(500).json({error: "Erro ao adicionar evento"});
        }
    };

    //listar evento
    const listEvents = async (req, res) => {
        try {
        const events = await Event.find();
        res.json(events);
        } 
        catch (err) {
            res.status(500).json({ error: "Erro ao buscar eventos" });
    }
};

    const addParticipant = async ( req, res ) => {
        const { eventId } = req.params;
        const { participante, email } = req.body
        const event = await Event.findById(eventId);
        if ( !event ) {
            return res.status(404).json({ error: "Evento não encontrado"});
        }
        event.participants.push ({participante, email});
        await event.save();
        res.json ({ message: "Participante adicionado com sucesso!", event });
    }

module.exports = { createEvent, listEvents, addParticipant };