const express = require('express');
const { EventController , getAllEvents } = require('../controller/eventController.js');
const router = express.Router();
console.log('Registering event route');
router.post('/saveevent', EventController);
router.get('/getallevents', getAllEvents);
module.exports = router;
