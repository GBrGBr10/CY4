const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    nome:{ type: String },
    data:{ type: Date },
    local:{ type: String },
    descricao:{ type: String },
    participantes: [
        {
            participante: String,
            email: String
        }
    ]
});

const event = mongoose.model('Event', eventSchema);

module.exports = event;