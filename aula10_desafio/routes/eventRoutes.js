const express = require('express');
const eventController = require('../controller/eventController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

router.post('/events', authMiddleware.tokenValidation, eventController.createEvent);
router.post('events', authMiddleware.tokenValidation, eventController.listEvents);
router.post('events', authMiddleware.tokenValidation, eventController.addParticipant);

module.exports = router;