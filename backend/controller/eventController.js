const express = require('express');
const mongoose = require('mongoose');
require('../models/eventModel.js');
const EventModel = mongoose.model('EventModel');
const app = express();

const EventController = async (req, res) => {
    try {
        const { eventname, eventlink } = req.body;

        console.log('Received request to save event:', { eventname, eventlink });

        const eventDetail = new EventModel({
            eventname,
            eventlink,
        });

        console.log('Event detail before saving:', eventDetail);

        await eventDetail.save();

        console.log('Event saved successfully');

        res.status(201).send({
            success: true,
            message: 'Event Saved Successfully',
            eventDetail,
        });
    } catch (error) {
        console.error('Error in EventController:', error);

        res.status(500).send({
            success: false,
            message: 'Error in Saving Event',
            error,
        });
    }
};

const getAllEvents = async (req, res) => {
    try {
        const events = await EventModel.find();
        res.status(200).send({
            success: true,
            message: 'Events fetched successfully',
            events,
        });
    } catch (error) {
        console.error('Error in getAllEvents:', error);
        res.status(500).send({
            success: false,
            message: 'Error in fetching events',
            error,
        });
    }
};

module.exports = {
    EventController: EventController,
    getAllEvents,
};
